"use client"

import Image from "next/image"
import { useState } from "react"

const DEVICE_CATEGORIES = [
  "GNSS / GPS Receivers",
  "Total Stations",
  "UAV / Drones",
  "Laser Scanners",
  "Data Collectors",
  "Software & Licenses",
  "Accessories",
  "Other",
]

const SERVICE_TYPES = [
  "Calibration",
  "Repair",
  "Maintenance",
  "Firmware Update",
  "Hardware Inspection",
  "Other",
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

const MAX_WORDS = 150

function wordCount(text: string) {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length
}

const chevronDown = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
  </svg>
)

const inputCls =
  "w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-4 py-3 text-[clamp(0.72rem,0.8vw,1rem)] placeholder:text-[#9f9f9f] focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30"
const selectCls =
  "w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-4 py-3 text-[clamp(0.72rem,0.8vw,1rem)] text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30 appearance-none cursor-pointer"
const labelCls =
  "block font-medium text-[#0e3874] text-[clamp(0.72rem,0.88vw,1rem)] mb-1.5"

export default function LaboratoryServices() {
  const [issue, setIssue] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const words = wordCount(issue)
  const overLimit = words > MAX_WORDS

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (overLimit) return
    setSubmitted(true)
  }

  return (
    <main className="bg-[#f1f1f1]">

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 min-h-[55vh]">
        <Image
          src="/images/lab-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/62" />
        <div className="relative z-10 flex flex-col items-center pt-24 pb-16">
          <h1 className="text-white font-semibold text-[clamp(3rem,8vw,8.6rem)] leading-[1.1] tracking-[-0.04em] uppercase">
            Laboratory
          </h1>
          <p className="text-white text-[clamp(0.78rem,0.95vw,1.1rem)] max-w-4xl mt-6 leading-relaxed">
            Our team of professional engineers, technicians, and support staff brings deep expertise
            and hands-on experience both locally and internationally. We have proudly served clients
            including the Ghana Highway Authority, Newmont Ghana Gold, Anglogold Ashanti, the Ministry
            of Lands and Natural Resources, KNUST, and the Millennium Development Authority, among many others.
          </p>
        </div>
      </section>

      {/* ── Form Card ── */}
      <section className="px-[5%] py-12 lg:py-20">
        <div className="max-w-[1486px] mx-auto bg-white rounded-[59px] px-[5%] py-12 lg:py-16 shadow-sm">

          <h2 className="font-semibold text-black text-[clamp(1.6rem,2.8vw,3.25rem)] tracking-[-0.03em] text-center mb-3">
            Laboratory Services
          </h2>
          <p className="text-[#0e3874] font-medium text-[clamp(0.72rem,0.82vw,0.96rem)] text-center mb-10">
            Fill in your device details and describe the issue. Our technicians will follow up within 1-2 working days
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-5 py-12">
              <div className="w-16 h-16 rounded-full bg-[#0e3874]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0e3874" className="w-8 h-8">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[#0e3874] font-semibold text-[clamp(1rem,1.6vw,1.4rem)] text-center">
                Your request has been submitted!
              </p>
              <p className="text-gray-500 text-[clamp(0.72rem,0.96vw,0.9rem)] text-center max-w-lg">
                Thank you for reaching out. Our technicians will follow up within 1-2 working days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 text-[#0e3874] underline underline-offset-4 text-[clamp(0.7rem,0.8vw,0.8rem)] hover:text-[#0b2d5e] transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* First Name + Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>
                    First Name<span className="text-[#ed1c24]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="eg. Joshua"
                    required
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>
                    Last Name<span className="text-[#ed1c24]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="eg. Mensah"
                    required
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Work Email + Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>
                    Work Email<span className="text-[#ed1c24]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    required
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>
                    Phone Number<span className="text-[#ed1c24]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+233 59 501 5811"
                    required
                    className={inputCls}
                  />
                  <p className="text-[#0e3874] text-[clamp(0.6rem,0.72vw,0.85rem)] mt-1.5">
                    Please include country code.
                  </p>
                </div>
              </div>

              {/* Country */}
              <div>
                <label className={labelCls}>
                  Country<span className="text-[#ed1c24]">*</span>
                </label>
                <div className="relative">
                  <select className={selectCls} defaultValue="Ghana" required>
                    {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0e3874]">
                    {chevronDown}
                  </div>
                </div>
              </div>

              {/* Device Name + Model Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>
                    Device Name<span className="text-[#ed1c24]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="eg. TRIMBLE R10 PPK KIT"
                    required
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>
                    Model Number<span className="text-[#ed1c24]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="TB-A5811"
                    required
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Device Category + Service Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>
                    Device Category<span className="text-[#ed1c24]">*</span>
                  </label>
                  <div className="relative">
                    <select className={selectCls} defaultValue="" required>
                      <option value="" disabled>Select Categories</option>
                      {DEVICE_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0e3874]">
                      {chevronDown}
                    </div>
                  </div>
                </div>
                <div>
                  <label className={labelCls}>
                    Service Type<span className="text-[#ed1c24]">*</span>
                  </label>
                  <div className="relative">
                    <select className={selectCls} defaultValue="" required>
                      <option value="" disabled>Select type</option>
                      {SERVICE_TYPES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0e3874]">
                      {chevronDown}
                    </div>
                  </div>
                </div>
              </div>

              {/* Describe the issue */}
              <div>
                <label className={labelCls}>
                  Describe the issue<span className="text-[#ed1c24]">*</span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Describe what's wrong, when it started, and any error messages you've seen..."
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  required
                  className={`${inputCls} resize-none ${overLimit ? "border-[#ed1c24] focus:ring-[#ed1c24]/30" : ""}`}
                />
                <p className={`font-medium text-[clamp(0.6rem,0.72vw,0.9rem)] mt-1.5 ${overLimit ? "text-[#ed1c24]" : "text-[#0e3874]"}`}>
                  {overLimit ? `${words} / ${MAX_WORDS} words — please shorten your message` : "150 Maximum Words"}
                </p>
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={overLimit}
                  className="bg-[#0e3874] text-white font-medium text-[clamp(0.8rem,1.12vw,1.15rem)] px-10 py-4 rounded-[10px] hover:bg-[#0b2d5e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit request
                </button>
              </div>

            </form>
          )}
        </div>
      </section>

    </main>
  )
}
