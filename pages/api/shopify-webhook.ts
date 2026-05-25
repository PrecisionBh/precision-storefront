import type { NextApiRequest, NextApiResponse } from "next"
import crypto from "crypto"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export const config = {
  api: {
    bodyParser: false,
  },
}

async function getRawBody(req: NextApiRequest) {
  return await new Promise<Buffer>((resolve, reject) => {
    const chunks: Uint8Array[] = []

    req.on("data", (chunk) => chunks.push(chunk))
    req.on("end", () => resolve(Buffer.concat(chunks)))
    req.on("error", reject)
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("========== SHOPIFY WEBHOOK HIT ==========")
  console.log("METHOD:", req.method)

  if (req.method !== "POST") {
    console.log("BLOCKED: Not POST")
    return res.status(405).end()
  }

  try {
    console.log("ENV CHECK:", {
      hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasServiceRole: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      hasWebhookSecret: !!process.env.SHOPIFY_WEBHOOK_SECRET,
    })

    const rawBody = await getRawBody(req)

    console.log("RAW BODY LENGTH:", rawBody.length)

    const hmacHeader =
      req.headers["x-shopify-hmac-sha256"] as string

    console.log("HMAC HEADER EXISTS:", !!hmacHeader)

    const generatedHash =
  crypto
    .createHmac(
      "sha256",
      process.env
        .SHOPIFY_WEBHOOK_SECRET!
    )
    .update(rawBody)
    .digest("base64")

const hashBuffer =
  Buffer.from(generatedHash)

const hmacBuffer =
  Buffer.from(hmacHeader)

const isValid =
  crypto.timingSafeEqual(
    hashBuffer,
    hmacBuffer
  )

console.log(
  "GENERATED:",
  generatedHash
)

console.log(
  "SHOPIFY:",
  hmacHeader
)

console.log(
  "VALID:",
  isValid
)

console.log(
  "RAW SECRET:",
  process.env.SHOPIFY_WEBHOOK_SECRET
)

console.log(
  "RAW BODY:",
  rawBody.toString()
)

console.log(
  "SHOPIFY HEADER:",
  hmacHeader
)

console.log(
  "GENERATED HASH:",
  generatedHash
)

console.log(
  "HASH MATCH:",
  generatedHash === hmacHeader
)

console.log(
  "GENERATED LENGTH:",
  generatedHash.length
)

console.log(
  "HEADER LENGTH:",
  hmacHeader.length
)

if (!isValid) {

  console.error(
    "FAILED: Invalid webhook signature"
  )

  return res.status(401).json({
    error:
      "Invalid webhook signature",
  })
}

    console.log("PASSED: Signature verified")

    const order = JSON.parse(rawBody.toString())

    console.log("ORDER ID:", order.id)
    console.log("ORDER NAME:", order.name)
    console.log("FINANCIAL STATUS:", order.financial_status)
    console.log("LINE ITEMS COUNT:", order.line_items?.length)

    console.log(
      "NOTE ATTRIBUTES:",
      JSON.stringify(order.note_attributes, null, 2)
    )

    console.log(
      "LINE ITEM 0:",
      JSON.stringify(order.line_items?.[0], null, 2)
    )

    const lineItem = order.line_items?.[0]

    const properties =
      lineItem?.properties || []

    console.log(
      "LINE ITEM PROPERTIES:",
      JSON.stringify(properties, null, 2)
    )

    const getProperty = (key: string) => {
      const found = properties.find(
        (p: any) => p.name === key
      )

      console.log(`PROPERTY LOOKUP ${key}:`, found)

      return found?.value || ""
    }

    const player1_name = getProperty("player1_name")
    const player1_fargo = Number(getProperty("player1_fargo"))
    const player1_phone = getProperty("player1_phone")
    const player2_name = getProperty("player2_name")
    const player2_fargo = Number(getProperty("player2_fargo"))
    const robustness = Number(getProperty("robustness"))

    console.log("EXTRACTED DATA:", {
      player1_name,
      player1_fargo,
      player1_phone,
      player2_name,
      player2_fargo,
      robustness,
    })

    if (
      !player1_name ||
      !player2_name ||
      !player1_phone ||
      !player1_fargo ||
      !player2_fargo ||
      !robustness
    ) {
      console.error("FAILED: Missing tournament data")

      return res.status(400).json({
        error: "Missing tournament data",
        extracted: {
          player1_name,
          player1_fargo,
          player1_phone,
          player2_name,
          player2_fargo,
          robustness,
        },
      })
    }

    const { data, error } = await supabase
      .from("tournament_teams")
      .insert({
        player1_name,
        player1_fargo,
        player1_phone,
        player2_name,
        player2_fargo,
        robustness,
        status: "registered",
        registration_paid: true,
      })
      .select()

    console.log("SUPABASE INSERT DATA:", data)
    console.log("SUPABASE INSERT ERROR:", error)

    if (error) {
      return res.status(500).json({
        error: "Database insert failed",
        details: error,
      })
    }

    console.log("SUCCESS: TEAM INSERTED")

    return res.status(200).json({
      success: true,
      data,
    })
  } catch (err) {
    console.error("WEBHOOK CRASH:", err)

    return res.status(500).json({
      error: "Webhook failed",
    })
  }
}