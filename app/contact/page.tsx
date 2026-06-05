import Image from "next/image"

export default function ContactPage() {
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
            CONTACT US
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
      <section className="px-[5%] py-12 lg:py-20">
        <div className="max-w-[1486px] mx-auto bg-white rounded-[38px] px-[5%] py-11 lg:py-16 shadow-sm">
          <h2 className="font-semibold text-black text-[clamp(1.4rem,2.8vw,2.6rem)] tracking-[-0.03em] text-center mb-10">
            Get In Touch With Us
          </h2>

          <form className="space-y-6">
            {/* I would like to */}
            <div>
              <label className="block font-medium text-[#0e3874] text-[clamp(0.72rem,0.88vw,1rem)] mb-1.5">
                I would like to:<span className="text-[#ed1c24]">*</span>
              </label>
              <select
                className="w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30 appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>Select an option</option>
                <option>Request a quote</option>
                <option>Get product information</option>
                <option>Schedule a demo</option>
                <option>Technical support</option>
                <option>Partnership enquiry</option>
                <option>Other</option>
              </select>
            </div>

            {/* First + Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium text-[#0e3874] text-[clamp(0.72rem,0.88vw,1rem)] mb-1.5">
                  Full Name<span className="text-[#ed1c24]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="eg. Joshua"
                  className="w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] placeholder:text-[#9f9f9f] focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30"
                />
              </div>
              <div>
                <label className="block font-medium text-[#0e3874] text-[clamp(0.72rem,0.88vw,1rem)] mb-1.5">
                  Last Name<span className="text-[#ed1c24]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="eg. Mensah"
                  className="w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] placeholder:text-[#9f9f9f] focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30"
                />
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
                  className="w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] placeholder:text-[#9f9f9f] focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30"
                />
              </div>
              <div>
                <label className="block font-medium text-[#0e3874] text-[clamp(0.72rem,0.88vw,1rem)] mb-1.5">
                  Phone Number<span className="text-[#ed1c24]">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+233 59 511 5011"
                  className="w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] placeholder:text-[#9f9f9f] focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30"
                />
                <p className="text-[#0e3874] text-[clamp(0.6rem,0.72vw,0.85rem)] mt-1.5">
                  Please include country code.
                </p>
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block font-medium text-[#0e3874] text-[clamp(0.72rem,0.88vw,1rem)] mb-1.5">
                Country<span className="text-[#ed1c24]">*</span>
              </label>
              <div className="relative">
                <select
                  className="w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30 appearance-none cursor-pointer"
                  defaultValue="Ghana"
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
                className="w-full border-[1.5px] border-[#0e3874] rounded-[10px] px-3 py-3 text-[clamp(0.72rem,0.8vw,1rem)] placeholder:text-[#9f9f9f] resize-none focus:outline-none focus:ring-2 focus:ring-[#0e3874]/30"
              />
              <p className="text-[#0e3874] font-medium text-[clamp(0.6rem,0.72vw,0.9rem)] mt-1.5">
                150 Maximum Words
              </p>
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#0e3874] text-white font-medium text-[clamp(0.8rem,1.12vw,1.3rem)] px-10 py-4 rounded-[10px] hover:bg-[#0b2d5e] transition-colors"
              >
                Submit message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ── Head Office + QR Code ── */}
      <section className="px-[5%] pb-12 lg:pb-20">
        <div className="max-w-[1486px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          {/* Office details */}
          <div>
            <h2 className="text-[#0e3874] font-semibold text-[clamp(1.2rem,2vw,1.85rem)] mb-5">
              Head Office Location
            </h2>
            <div className="space-y-2 text-black text-[clamp(0.76rem,1.04vw,1.3rem)] leading-relaxed">
              <p>Tetteh Okuley Avenue Abofu Off Achimota School Road</p>
              <p>
                <span className="font-medium">Post Office Address:</span>
                {"  "}P.O Box LG 723
              </p>
              <p>
                <span className="font-medium">Telephone No.:</span>
                {" "}(233-27) 7603276 / (233-0303) 934116
              </p>
              <p>
                <span className="font-medium">Fax No.:</span>
                {" "}(233-0302) 407459
              </p>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center lg:items-end gap-3">
            <div className="bg-[#0e3874] rounded-[26px] p-6 flex flex-col items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/contact/qr-code.svg"
                alt="QR code – Join us online"
                className="w-[160px] h-[160px] lg:w-[224px] lg:h-[224px]"
              />
            </div>
            <p className="font-semibold text-[#0e3874] text-[clamp(0.8rem,1.2vw,1.35rem)]">
              Join Us Online
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
