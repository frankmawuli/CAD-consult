import type { ContactInput, SupportInput, ProductRequestInput } from "@/lib/schemas/inquiry"

type FormType = "contact" | "support" | "product-request"
type InquiryData = ContactInput | SupportInput | ProductRequestInput

export async function submitInquiry(form_type: FormType, data: InquiryData) {
  const res = await fetch("/api/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ form_type, ...data }),
  })
  if (!res.ok) throw new Error("Submission failed")
  return res.json()
}
