import type {
  NextApiRequest,
  NextApiResponse,
} from "next"

import crypto from "crypto"

import { createClient }
  from "@supabase/supabase-js"

const supabase =
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

export const config = {
  api: {
    bodyParser: false,
  },
}

async function getRawBody(
  req: NextApiRequest
) {

  return await new Promise<Buffer>(
    (resolve, reject) => {

      const chunks: Uint8Array[] = []

      req.on(
        "data",
        (chunk) =>
          chunks.push(chunk)
      )

      req.on(
        "end",
        () =>
          resolve(
            Buffer.concat(chunks)
          )
      )

      req.on(
        "error",
        reject
      )
    }
  )
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method !== "POST") {

    return res
      .status(405)
      .end()
  }

  try {

    const rawBody =
      await getRawBody(req)

    const hmacHeader =
      req.headers[
        "x-shopify-hmac-sha256"
      ] as string

    const generatedHash =
      crypto
        .createHmac(
          "sha256",
          process.env
            .SHOPIFY_WEBHOOK_SECRET!
        )
        .update(rawBody)
        .digest("base64")

    if (
      generatedHash !==
      hmacHeader
    ) {

      console.error(
        "Invalid webhook signature"
      )

      return res
        .status(401)
        .end()
    }

    const order =
      JSON.parse(
        rawBody.toString()
      )

    console.log(
      "SHOPIFY ORDER:",
      JSON.stringify(
        order,
        null,
        2
      )
    )

    // STOREFRONT CART ATTRIBUTES
    const properties =
      order.note_attributes || []

    const getProperty = (
      key: string
    ) => {

      const found =
        properties.find(
          (p: any) =>
            p.name === key
        )

      return found?.value || ""
    }

    const player1_name =
      getProperty(
        "player1_name"
      )

    const player1_fargo =
      Number(
        getProperty(
          "player1_fargo"
        )
      )

    const player1_phone =
      getProperty(
        "player1_phone"
      )

    const player2_name =
      getProperty(
        "player2_name"
      )

    const player2_fargo =
      Number(
        getProperty(
          "player2_fargo"
        )
      )

    const robustness =
      Number(
        getProperty(
          "robustness"
        )
      )

    console.log(
      "EXTRACTED DATA:",
      {
        player1_name,
        player1_fargo,
        player1_phone,
        player2_name,
        player2_fargo,
        robustness,
      }
    )

    // INSERT INTO SUPABASE
    const { error } =
      await supabase
        .from(
          "tournament_teams"
        )
        .insert({
          player1_name,
          player1_fargo,
          player1_phone,

          player2_name,
          player2_fargo,

          robustness,

          status:
            "registered",

          registration_paid:
            true,

          registration_amount:
            15,
        })

    if (error) {

      console.error(
        "SUPABASE ERROR:",
        error
      )

      return res
        .status(500)
        .json({
          error:
            "Database insert failed",
        })
    }

    console.log(
      "TEAM INSERTED SUCCESSFULLY"
    )

    return res
      .status(200)
      .json({
        success: true,
      })

  } catch (err) {

    console.error(
      "WEBHOOK ERROR:",
      err
    )

    return res
      .status(500)
      .json({
        error:
          "Webhook failed",
      })
  }
}