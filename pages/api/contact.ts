import type {
  NextApiRequest,
  NextApiResponse,
} from "next"

import nodemailer from "nodemailer"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({
        error:
          "Method not allowed",
      })
  }

  const {
    name,
    email,
    subject,
    message,
  } = req.body

  try {

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

    await transporter.sendMail({
      from:
        process.env.GMAIL_USER,

      to:
        "precision.bh@gmail.com",

      subject:
        `[Precision Contact] ${subject}`,

      html: `
        <h2>New Contact Form Submission</h2>

        <p>
          <strong>Name:</strong>
          ${name}
        </p>

        <p>
          <strong>Email:</strong>
          ${email}
        </p>

        <p>
          <strong>Subject:</strong>
          ${subject}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <p>
          ${message}
        </p>
      `,
    })

    return res.status(200).json({
      success: true,
    })

  } catch (error) {

    console.error(error)

    return res.status(500).json({
      error:
        "Failed to send email",
    })
  }
}