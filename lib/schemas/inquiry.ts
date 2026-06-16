import { z } from "zod"

function wordCount(text: string) {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length
}

const base = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name:  z.string().min(1, "Last name is required"),
  email:      z.string().email("Enter a valid email address"),
  phone:      z.string().min(7, "Enter a valid phone number"),
  country:    z.string().min(1, "Country is required"),
})

export const contactSchema = base.extend({
  intent:  z.string().min(1, "Please select an option"),
  message: z.string()
    .min(1, "Message is required")
    .refine((val) => wordCount(val) <= 150, "Message must be 150 words or fewer"),
})

export const productRequestSchema = base.extend({
  product:     z.string().min(1, "Product name is required"),
  accessories: z.string().optional(),
  message:     z.string()
    .refine((val) => wordCount(val) <= 150, "Message must be 150 words or fewer")
    .optional(),
})

export const supportSchema = base.extend({
  product: z.string().min(1, "Product name is required"),
  message: z.string()
    .min(1, "Message is required")
    .refine((val) => wordCount(val) <= 150, "Message must be 150 words or fewer"),
})

export type ContactInput        = z.infer<typeof contactSchema>
export type ProductRequestInput = z.infer<typeof productRequestSchema>
export type SupportInput        = z.infer<typeof supportSchema>
