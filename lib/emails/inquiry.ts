export type FormType = "contact" | "product-request" | "support" | "service"

export interface InquiryBody {
  form_type: FormType
  first_name: string
  last_name: string
  email: string
  phone: string
  country: string
  message?: string
  intent?: string
  product?: string
  accessories?: string
}

export const FORM_LABELS: Record<FormType, string> = {
  "contact": "Contact Us",
  "product-request": "Product Request",
  "support": "Product Support",
  "service": "Service Request",
}

export function companyEmailHtml(body: InquiryBody) {
  const label = FORM_LABELS[body.form_type]
  const rows = [
    ["Form", label],
    ["Name", `${body.first_name} ${body.last_name}`],
    ["Email", body.email],
    ["Phone", body.phone],
    ["Country", body.country],
    body.intent      ? ["Intent",      body.intent]      : null,
    body.product     ? ["Product",     body.product]     : null,
    body.accessories ? ["Accessories", body.accessories] : null,
    body.message     ? ["Message",     body.message]     : null,
  ]
    .filter((row): row is string[] => row !== null)
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:8px 12px;font-weight:600;color:#0e3874;white-space:nowrap;vertical-align:top">${label}</td>
        <td style="padding:8px 12px;color:#333">${value}</td>
      </tr>`
    )
    .join("")

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0e3874;padding:24px 32px">
        <h1 style="color:#fff;margin:0;font-size:20px">New ${label} Submission</h1>
      </div>
      <div style="padding:24px 32px;background:#f9f9f9">
        <table style="width:100%;border-collapse:collapse">
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div style="padding:16px 32px;background:#eee;font-size:12px;color:#888">
        Submitted via CAD website
      </div>
    </div>`
}

export function confirmationEmailHtml(body: InquiryBody) {
  const label = FORM_LABELS[body.form_type]
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0e3874;padding:24px 32px">
        <h1 style="color:#fff;margin:0;font-size:20px">We received your ${label}</h1>
      </div>
      <div style="padding:24px 32px">
        <p style="color:#333">Hi ${body.first_name},</p>
        <p style="color:#333">
          Thank you for reaching out to CAD. We have received your submission and
          our team will get back to you as soon as possible.
        </p>
        <p style="color:#333">
          If you have any urgent questions, feel free to call us at
          <strong>(233-27) 7603276</strong>.
        </p>
        <p style="color:#555;margin-top:32px">— The CAD Team</p>
      </div>
      <div style="padding:16px 32px;background:#eee;font-size:12px;color:#888">
        CAD · Tetteh Okuley Avenue, Abofu, Accra, Ghana
      </div>
    </div>`
}
