"use client"

import Image from "next/image"
import { useState } from "react"
import { toast } from "sonner"
import { contactSchema, type ContactInput } from "@/lib/schemas/inquiry"
import { submitInquiry } from "@/lib/services/inquiry"
import { Loader } from "lucide-react"
import AddressSection from "@/components/address-section"

const INITIAL = { intent: "", first_name: "", last_name: "", email: "", phone: "", country: "Ghana", message: "" }

function wordCount(text: string) {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length
}

export default function ServicesPage() {
  const [form, setForm]           = useState(INITIAL)
  const [errors, setErrors]       = useState<Partial<Record<keyof ContactInput, string>>>({})
  const [isSubmitting, setSubmit] = useState(false)

  function field(name: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [name]: e.target.value }))
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const result = contactSchema.safeParse(form)
    if (!result.success) {
      const errs: Partial<Record<keyof ContactInput, string>> = {}
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactInput
        if (!errs[key]) errs[key] = issue.message
      }
      setErrors(errs)
      return
    }
    setSubmit(true)
    try {
      await submitInquiry("service", result.data)
      toast.success("Message sent! We'll be in touch soon.")
      setForm(INITIAL)
      setErrors({})
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setSubmit(false)
    }
  }

  const words    = wordCount(form.message)
  const overLimit = words > 150

  return (
    <main className="bg-[#f5f5f5]">

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <Image
          src="/images/engineering-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/67" />
        <div className="relative z-10 flex flex-col items-center pt-16 pb-12">
          <h1 className="text-white font-semibold text-[clamp(2.4rem,8vw,8.24rem)] leading-[1.1] tracking-[-0.04em] whitespace-nowrap">
            SERVICES
          </h1>
          <p className="text-white text-[clamp(0.7rem,0.92vw,1rem)] max-w-4xl mt-5 leading-relaxed">
            Our team of professional engineers, technicians, and support staff brings deep expertise
            and hands-on experience both locally and internationally. We have proudly served clients
            including the Ghana Highway Authority, Newmont Ghana Gold, Anglogold Ashanti, the Ministry
            of Lands and Natural Resources, KNUST, and the Millennium Development Authority, among many others.
          </p>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="py-12 sm:px-[5%] lg:py-20">
        <div className="max-w-[1486px] mx-auto bg-white rounded-none sm:rounded-[38px] px-[5%] py-11 lg:py-16 shadow-sm">
          <h2 className="font-semibold text-black text-[clamp(1.4rem,2.8vw,2.6rem)] tracking-[-0.03em] text-center mb-10">
            What brings you here today?
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* What service are you looking for? */}
            <div>
              <label className="block font-medium text-[#0e3874] text-[clamp(0.72rem,0.88vw,1rem)] mb-1.5">
                What service are you looking for?<span className="text-[#ed1c24]">*</span>
              </label>
              <div className="relative">
                <select
                  value={form.intent}
                  onChange={field("intent")}
                  className="w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30 appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select an option</option>
                  <option>Bathymetric Surveying and Hydrographic Surveying</option>
                  <option>Mining Surveying</option>
                  <option>Land, Aerial, and Topographical Surveying</option>
                  <option>Cadastral Surveys for land acquisition and title ownership</option>
                  <option>Setting out and Geometric Design of Roads</option>
                  <option>Construction Supervision (bridges, roads)</option>
                  <option>Project Management</option>
                  <option>Technical feasibility studies</option>
                  <option>Other</option>
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0e3874]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {errors.intent && <p className="text-[#ed1c24] text-[0.7rem] mt-1">{errors.intent}</p>}
            </div>

            {/* First Name + Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium text-[#0e3874] text-[clamp(0.72rem,0.88vw,1rem)] mb-1.5">
                  First Name<span className="text-[#ed1c24]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="eg. Joshua"
                  value={form.first_name}
                  onChange={field("first_name")}
                  className="w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] placeholder:text-[#9f9f9f] focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30"
                />
                {errors.first_name && <p className="text-[#ed1c24] text-[0.7rem] mt-1">{errors.first_name}</p>}
              </div>
              <div>
                <label className="block font-medium text-[#0e3874] text-[clamp(0.72rem,0.88vw,1rem)] mb-1.5">
                  Last Name<span className="text-[#ed1c24]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="eg. Mensah"
                  value={form.last_name}
                  onChange={field("last_name")}
                  className="w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] placeholder:text-[#9f9f9f] focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30"
                />
                {errors.last_name && <p className="text-[#ed1c24] text-[0.7rem] mt-1">{errors.last_name}</p>}
              </div>
            </div>

            {/* Work Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium text-[#0e3874] text-[clamp(0.72rem,0.88vw,1rem)] mb-1.5">
                  Work Email<span className="text-[#ed1c24]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={field("email")}
                  className="w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] placeholder:text-[#9f9f9f] focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30"
                />
                {errors.email && <p className="text-[#ed1c24] text-[0.7rem] mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block font-medium text-[#0e3874] text-[clamp(0.72rem,0.88vw,1rem)] mb-1.5">
                  Phone Number<span className="text-[#ed1c24]">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+233 59 501 5811"
                  value={form.phone}
                  onChange={field("phone")}
                  className="w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] placeholder:text-[#9f9f9f] focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30"
                />
                <p className="text-[#0e3874] text-[clamp(0.6rem,0.72vw,0.85rem)] mt-1.5">
                  Please include countries code.
                </p>
                {errors.phone && <p className="text-[#ed1c24] text-[0.7rem] mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block font-medium text-[#0e3874] text-[clamp(0.72rem,0.88vw,1rem)] mb-1.5">
                Country<span className="text-[#ed1c24]">*</span>
              </label>
              <div className="relative">
                <select
                  value={form.country}
                  onChange={field("country")}
                  className="w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30 appearance-none cursor-pointer"
                >
                  <option>Ghana</option>
                  <option>Nigeria</option>
                  <option>Sierra Leone</option>
                  <option>Guinea</option>
                  <option>Burkina Faso</option>
                  <option>Benin</option>
                  <option>Other</option>
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0e3874]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium text-[#0e3874] text-[clamp(0.72rem,0.88vw,1rem)] mb-1.5">
                Your Message<span className="text-[#ed1c24]">*</span>
              </label>
              <textarea
                rows={6}
                placeholder="Tell us about your project, team size, timeline or any specific questions you have. The more detail you share, the better we can help."
                value={form.message}
                onChange={field("message")}
                className={`w-full border-[1.5px] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] placeholder:text-[#9f9f9f] resize-none focus:outline-none focus:ring-2 ${overLimit ? "border-[#ed1c24] focus:ring-[#ed1c24]/30" : "border-[#0e3874] focus:ring-[#0e3874]/30"}`}
              />
              <p className={`font-medium text-[clamp(0.6rem,0.72vw,0.9rem)] mt-1.5 ${overLimit ? "text-[#ed1c24]" : "text-[#0e3874]"}`}>
                {words} / 150 words{overLimit ? " — please shorten your message" : ""}
              </p>
              {errors.message && <p className="text-[#ed1c24] text-[0.7rem] mt-1">{errors.message}</p>}
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting || overLimit}
                className="w-full sm:w-auto bg-[#0e3874] text-white font-medium text-[clamp(0.8rem,1.12vw,1.3rem)] px-10 py-4 rounded-[10px] hover:bg-[#0b2d5e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? <Loader className="animate-spin" /> : "Submit message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ── Head Office + Join Us ── */}
      <AddressSection />

    </main>
  )
}
