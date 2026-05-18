const footerLinks = ["Home", "About Us", "Training Centre", "Services", "Contact Us"]
const socials = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "WhatsApp", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-[#0e3874] text-white">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 pt-12 lg:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src="/images/footer-logo.png" alt="CAD logo" className="h-10 w-auto" />
            <span className="font-semibold text-[1.7rem] leading-tight">CAD Consult Gh</span>
          </div>
          <p className="text-[0.95rem] leading-relaxed text-justify text-white/90">
            CAD Consult GH is a wholly Ghanaian-owned engineering and surveying company incorporated
            in March 2001, with offices located at the Tycan Office Complex, off Achimota School Road,
            Accra. For over two decades, we have grown to become a leading provider of innovative
            positioning solutions and applications software to clients across Ghana and the wider
            West Africa region.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-[1.875rem] mb-6">Links</h3>
          <ul className="space-y-3 text-[1.0625rem]">
            {footerLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#ffc425] transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="font-semibold text-[1.875rem] mb-6">Working Hours</h3>
          <p className="text-[1.0625rem]">Weekdays 9:00AM – 5:00PM</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-[1.875rem] mb-6">Get In Touch</h3>
          <p className="text-[1.0625rem] mb-2">info@cadconsultgh.com.gh</p>
          <p className="text-[1.0625rem] mb-6 leading-relaxed">
            (233-27) 7603276 / (233-0303) 934116
            <br />
            (233-20) 9981240 / (233-020) 4342261
          </p>
          <ul className="space-y-2 text-[1.0625rem]">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="hover:text-[#ffc425] transition-colors">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mx-5 sm:mx-10 py-5 lg:py-6 flex flex-wrap items-center justify-between gap-3 text-[0.95rem] lg:text-[1.0625rem] font-semibold">
        <span>© 2026 CAD Consult Ghana</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#ffc425] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#ffc425] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
