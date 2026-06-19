import type { FormType } from "@/lib/emails/inquiry"

import { Resend } from "resend"

export const resend = new Resend(process.env.RESEND_API_KEY)

export const FROM = process.env.RESEND_FROM_EMAIL!
export const COMPANY_EMAIL = process.env.COMPANY_EMAIL!
export const TEAM_EMAIL = process.env.TEAM_EMAIL!

export const SERVICES_EMAIL = process.env.SERVICES_EMAIL!
export const SERVICES_TEAM_EMAIL = process.env.SERVICES_TEAM_EMAIL!

export function recipientsFor(form_type: FormType): { company: string; team?: string } {
  if (form_type === "service") {
    return { company: SERVICES_EMAIL, team: SERVICES_TEAM_EMAIL }
  }
  return { company: COMPANY_EMAIL, team: TEAM_EMAIL }
}

export function fromFor(form_type: FormType): string {
  return form_type === "service" ? SERVICES_EMAIL : FROM
}
