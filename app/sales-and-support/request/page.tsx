"use client"

import Image from "next/image"
import { useState } from "react"
import { useSearchParams } from "next/navigation"

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
  "w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] placeholder:text-[#9f9f9f] focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30"
const selectCls =
  "w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30 appearance-none cursor-pointer"
const labelCls =
  "block font-medium text-[#0e3874] text-[clamp(0.72rem,0.88vw,1rem)] mb-1.5"

export default function ProductRequest() {
  const searchParams = useSearchParams()
  const productName = searchParams.get("product") ?? ""
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const words = wordCount(message)
  const overLimit = words > MAX_WORDS

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (overLimit) return
    setSubmitted(true)
  }

  return (
    <main className="bg-[#f5f5f5]">

      {/* ── Product Request Form ── */}
      <section className="px-[5%] py-12 lg:py-40">
        <div className="max-w-[1486px] mx-auto bg-white rounded-[38px] px-[5%] py-11 lg:py-16 shadow-sm">
          <h2 className="font-semibold text-black text-[clamp(1.4rem,2.8vw,2.6rem)] tracking-[-0.03em] text-center mb-10">
            Product Request
          </h2>

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
                Thank you for reaching out. Our team will get back to you shortly.
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

              {/* Product */}
              <div>
                <label className={labelCls}>
                  What product are you requesting?<span className="text-[#ed1c24]">*</span>
                </label>
                <input type="text" placeholder="eg. Trimble GPS, Total Station, Drone..." required defaultValue={productName} className={inputCls} />
              </div>

              {/* I would like to */}
              <div>
                <label className={labelCls}>
                  I would like to request:<span className="text-[#ed1c24]">*</span>
                </label>
                <input type="text" placeholder="eg. Request a quote" required className={inputCls} />
              </div>

              {/* First + Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>
                    First Name<span className="text-[#ed1c24]">*</span>
                  </label>
                  <input type="text" placeholder="eg. Joshua" required className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>
                    Last Name<span className="text-[#ed1c24]">*</span>
                  </label>
                  <input type="text" placeholder="eg. Mensah" required className={inputCls} />
                </div>
              </div>

              {/* Work Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>
                    Work Email<span className="text-[#ed1c24]">*</span>
                  </label>
                  <input type="email" placeholder="you@company.com" required className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>
                    Phone Number<span className="text-[#ed1c24]">*</span>
                  </label>
                  <input type="tel" placeholder="+233 59 511 5011" required className={inputCls} />
                  <p className="text-[#0e3874] text-[clamp(0.6rem,0.72vw,0.85rem)] mt-1.5">
                    Please include country code.
                  </p>
                </div>
              </div>

              {/* Country + Accessories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                <div>
                  <label className={labelCls}>Accessories (Optional)</label>
                  <div className="relative">
                    <select className={selectCls} defaultValue="">
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputCls} resize-none ${overLimit ? "border-[#ed1c24] focus:ring-[#ed1c24]/30" : ""}`}
                />
                <p className={`text-[clamp(0.6rem,0.72vw,0.9rem)] mt-1.5 font-medium ${overLimit ? "text-[#ed1c24]" : "text-[#0e3874]"}`}>
                  {words} / {MAX_WORDS} words{overLimit ? " — please shorten your message" : ""}
                </p>
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={overLimit}
                  className="bg-[#0e3874] text-white font-medium text-[clamp(0.8rem,1.12vw,1.3rem)] px-10 py-4 rounded-[10px] hover:bg-[#0b2d5e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

  

    </main>
  )
}
