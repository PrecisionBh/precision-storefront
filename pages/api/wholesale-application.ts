import type {
  NextApiRequest,
  NextApiResponse,
} from "next"

const formidable =
  require("formidable").default

import fs from "fs"

import nodemailer from "nodemailer"

export const config = {
  api: {
    bodyParser: false,
  },
}

const transporter =
  nodemailer.createTransport({
    service: "gmail",

    auth: {
      user:
        process.env.GMAIL_USER,

      pass:
        process.env.GMAIL_APP_PASSWORD,
    },
  })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method !== "POST") {

    return res.status(405).json({
      success: false,
      error:
        "Method not allowed",
    })
  }

  const form =
    formidable({
      multiples: false,
      keepExtensions: true,
    })

  form.parse(
    req,

    async (
      err: any,
      fields: any,
      files: any
    ) => {

      if (err) {

        console.error(err)

        return res.status(500).json({
          success: false,
          error:
            "Form parsing failed",
        })
      }

      try {

        const attachments: any[] =
          []

        const uploadedFile =
          files.resaleCertificate

        if (uploadedFile) {

          const file =
            Array.isArray(
              uploadedFile
            )
              ? uploadedFile[0]
              : uploadedFile

          attachments.push({
            filename:
              file.originalFilename ||
              "certificate",

            content:
              fs.readFileSync(
                file.filepath
              ),
          })
        }

        await transporter.sendMail({
          from:
            process.env.GMAIL_USER,

          to:
            "precision.bh@gmail.com",

          subject:
            "New Wholesale Application",

          html: `
            <div style="font-family: Arial; padding: 20px;">

              <h1>
                New Wholesale Application
              </h1>

              <p>
                <strong>
                  Business Name:
                </strong>
                ${
                  fields.businessName?.[0] ||
                  ""
                }
              </p>

              <p>
                <strong>
                  Contact Name:
                </strong>
                ${
                  fields.contactName?.[0] ||
                  ""
                }
              </p>

              <p>
                <strong>
                  Email:
                </strong>
                ${
                  fields.email?.[0] ||
                  ""
                }
              </p>

              <p>
                <strong>
                  Phone:
                </strong>
                ${
                  fields.phone?.[0] ||
                  ""
                }
              </p>

              <p>
                <strong>
                  Website/Social:
                </strong>
                ${
                  fields.website?.[0] ||
                  ""
                }
              </p>

              <p>
                <strong>
                  Years In Business:
                </strong>
                ${
                  fields.yearsInBusiness?.[0] ||
                  ""
                }
              </p>

              <p>
                <strong>
                  Message:
                </strong>
              </p>

              <p>
                ${
                  fields.message?.[0] ||
                  ""
                }
              </p>

            </div>
          `,

          attachments,
        })

        return res.status(200).json({
          success: true,
        })

      } catch (error) {

        console.error(error)

        return res.status(500).json({
          success: false,
          error:
            "Email send failed",
        })
      }
    }
  )
}