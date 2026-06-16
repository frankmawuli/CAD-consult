"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { productRequestSchema, type ProductRequestInput } from "@/lib/schemas/inquiry"
import { submitInquiry } from "@/lib/services/inquiry"
import { Loader } from "lucide-react"

const ACCESSORIES = [
  "Carrying Case",
  "Extra Battery Pack",
  "Tripod & Tribrach",
  "Survey Pole & Prism",
  "Data Cable Set",
  "Field Data Collector",
  "Extended Warranty",
  "Solar Charger",
]

const COUNTRIES = [
  "Ghana",
  "Nigeria",
  "Côte d'Ivoire",
  "Senegal",
  "Sierra Leone",
  "Guinea",
  "Burkina Faso",
  "Benin",
  "Togo",
  "Other",
]

const INITIAL = {
  product: "", intent: "", first_name: "", last_name: "",
  email: "", phone: "", country: "Ghana", accessories: "", message: "",
}

function wordCount(text: string) {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length
}

const chevronDown = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
  </svg>
)

const inputCls =
  "w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] placeholder:text-[#9f9f9f] focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30"
const selectCls =
  "w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30 appearance-none cursor-pointer"
const labelCls =
  "block font-medium text-[#0e3874] text-[clamp(0.72rem,0.88vw,1rem)] mb-1.5"

function ProductRequestForm() {
  const searchParams = useSearchParams()
  const [form, setForm]           = useState({ ...INITIAL, product: searchParams.get("product") ?? "" })
  const [errors, setErrors]       = useState<Partial<Record<keyof ProductRequestInput, string>>>({})
  const [isSubmitting, setSubmit] = useState(false)

  function field(name: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [name]: e.target.value }))
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const result = productRequestSchema.safeParse(form)
    if (!result.success) {
      const errs: Partial<Record<keyof ProductRequestInput, string>> = {}
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ProductRequestInput
        if (!errs[key]) errs[key] = issue.message
      }
      setErrors(errs)
      return
    }
    setSubmit(true)
    try {
      await submitInquiry("product-request", result.data)
      toast.success("Request submitted! We'll be in touch soon.")
      setForm(INITIAL)
      setErrors({})
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setSubmit(false)
    }
  }

  const words     = wordCount(form.message)
  const overLimit = words > 150

  return (
    <main className="bg-[#f5f5f5]">

      {/* ── Product Request Form ── */}
      <section className="px-[5%] py-12 lg:py-40">
        <div className="max-w-[1486px] mx-auto bg-white rounded-[38px] px-[5%] py-11 lg:py-16 shadow-sm">
          <h2 className="font-semibold text-black text-[clamp(1.4rem,2.8vw,2.6rem)] tracking-[-0.03em] text-center mb-10">
            Product Request
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Product */}
            <div>
              <label className={labelCls}>
                What product are you requesting?<span className="text-[#ed1c24]">*</span>
              </label>
              <input
                type="text"
                placeholder="eg. Trimble GPS, Total Station, Drone..."
                value={form.product}
                onChange={field("product")}
                className={inputCls}
              />
              {errors.product && <p className="text-[#ed1c24] text-[0.7rem] mt-1">{errors.product}</p>}
            </div>

            {/* Intent */}
          
            {/* First + Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>
                  First Name<span className="text-[#ed1c24]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="eg. Joshua"
                  value={form.first_name}
                  onChange={field("first_name")}
                  className={inputCls}
                />
                {errors.first_name && <p className="text-[#ed1c24] text-[0.7rem] mt-1">{errors.first_name}</p>}
              </div>
              <div>
                <label className={labelCls}>
                  Last Name<span className="text-[#ed1c24]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="eg. Mensah"
                  value={form.last_name}
                  onChange={field("last_name")}
                  className={inputCls}
                />
                {errors.last_name && <p className="text-[#ed1c24] text-[0.7rem] mt-1">{errors.last_name}</p>}
              </div>
            </div>

            {/* Work Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>
                  Work Email<span className="text-[#ed1c24]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={field("email")}
                  className={inputCls}
                />
                {errors.email && <p className="text-[#ed1c24] text-[0.7rem] mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className={labelCls}>
                  Phone Number<span className="text-[#ed1c24]">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+233 59 511 5011"
                  value={form.phone}
                  onChange={field("phone")}
                  className={inputCls}
                />
                <p className="text-[#0e3874] text-[clamp(0.6rem,0.72vw,0.85rem)] mt-1.5">
                  Please include country code.
                </p>
                {errors.phone && <p className="text-[#ed1c24] text-[0.7rem] mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Country + Accessories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>
                  Country<span className="text-[#ed1c24]">*</span>
                </label>
                <div className="relative">
                  <select
                    value={form.country}
                    onChange={field("country")}
                    className={selectCls}
                  >
                    {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0e3874]">
                    {chevronDown}
                  </div>
                </div>
              </div>
              <div>
                <label className={labelCls}>Accessories (Optional)</label>
                <div className="relative">
                  <select
                    value={form.accessories}
                    onChange={field("accessories")}
                    className={selectCls}
                  >
                    <option value="" />
                    {ACCESSORIES.map((a) => <option key={a}>{a}</option>)}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0e3874]">
                    {chevronDown}
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className={labelCls}>Your Message (Optional)</label>
              <textarea
                rows={6}
                placeholder="Tell us about your project, team size, timeline or any specific questions you have. The more detail you share, the better we can help."
                value={form.message}
                onChange={field("message")}
                className={`${inputCls} resize-none ${overLimit ? "border-[#ed1c24] focus:ring-[#ed1c24]/30" : ""}`}
              />
              <p className={`text-[clamp(0.6rem,0.72vw,0.9rem)] mt-1.5 font-medium ${overLimit ? "text-[#ed1c24]" : "text-[#0e3874]"}`}>
                {words} / 150 words{overLimit ? " — please shorten your message" : ""}
              </p>
              {errors.message && <p className="text-[#ed1c24] text-[0.7rem] mt-1">{errors.message}</p>}
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting || overLimit}
                className="bg-[#0e3874] text-white font-medium text-[clamp(0.8rem,1.12vw,1.3rem)] px-10 py-4 rounded-[10px] hover:bg-[#0b2d5e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? <Loader className="animate-spin" /> : "Submit message"}
              </button>
            </div>
          </form>
        </div>
      </section>

    </main>
  )
}

export default function ProductRequest() {
  return (
    <Suspense>
      <ProductRequestForm />
    </Suspense>
  )
}
