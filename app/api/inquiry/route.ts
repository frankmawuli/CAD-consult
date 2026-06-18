import { prisma } from "@/lib/prisma"
import { resend, FROM, COMPANY_EMAIL, TEAM_EMAIL } from "@/lib/resend"
import { FORM_LABELS, companyEmailHtml, confirmationEmailHtml, type InquiryBody } from "@/lib/emails/inquiry"

export async function POST(req: Request) {
  try {
    const body: InquiryBody = await req.json()
    const { form_type, first_name, last_name, email, phone, country, message, intent, product, accessories } = body

    if (!form_type || !first_name || !last_name || !email || !phone || !country) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!["contact", "product-request", "support"].includes(form_type)) {
      return Response.json({ error: "Invalid form_type" }, { status: 400 })
    }

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
        from: FROM,
        to: COMPANY_EMAIL,
        subject: `New ${FORM_LABELS[form_type]} from ${first_name} ${last_name}`,
        html: companyEmailHtml(body),
      }),
      sendEmail("confirmation", {
        from: FROM,
        to: email,
        subject: `We received your ${FORM_LABELS[form_type]} — CAD`,
        html: confirmationEmailHtml(body),
      }),
      ...(TEAM_EMAIL
        ? [
            sendEmail("team", {
              from: FROM,
              to: TEAM_EMAIL,
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
