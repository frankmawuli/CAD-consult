import { prisma } from "@/lib/prisma"
import { resend, recipientsFor, fromFor } from "@/lib/resend"
import { FORM_LABELS, companyEmailHtml, confirmationEmailHtml, type InquiryBody } from "@/lib/emails/inquiry"

export async function POST(req: Request) {
  try {
    const body: InquiryBody = await req.json()
    const { form_type, first_name, last_name, email, phone, country, message, intent, product, accessories } = body

    if (!form_type || !first_name || !last_name || !email || !phone || !country) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!["contact", "product-request", "support", "service"].includes(form_type)) {
      return Response.json({ error: "Invalid form_type" }, { status: 400 })
    }

    const { company: companyEmail, team: teamEmail } = recipientsFor(form_type)
    const from = fromFor(form_type)

    const inquiry = await prisma.inquiry.create({
      data: {
        form_type,
        first_name,
        last_name,
        email,
        phone,
        country,
        message: message ?? null,
        intent: intent ?? null,
        product: product ?? null,
        accessories: accessories ?? null,
      },
    })

    const sendEmail = async (label: string, payload: Parameters<typeof resend.emails.send>[0]) => {
      try {
        const { error } = await resend.emails.send(payload)
        if (error) console.error(`Failed to send ${label} email:`, error)
      } catch (err) {
        console.error(`Failed to send ${label} email:`, err)
      }
    }

    await Promise.all([
      sendEmail("company", {
        from,
        to: companyEmail,
        subject: `New ${FORM_LABELS[form_type]} from ${first_name} ${last_name}`,
        html: companyEmailHtml(body),
      }),
      sendEmail("confirmation", {
        from,
        to: email,
        subject: `We received your ${FORM_LABELS[form_type]} — CAD`,
        html: confirmationEmailHtml(body),
      }),
      ...(teamEmail && companyEmail
        ? [
            sendEmail("team", {
              from,
              to: teamEmail,
              subject: `New ${FORM_LABELS[form_type]} from ${first_name} ${last_name}`,
              html: companyEmailHtml(body),
            }),
          ]
        : []),
    ])

    return Response.json({ success: true, id: inquiry.id }, { status: 201 })
  } catch {
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
