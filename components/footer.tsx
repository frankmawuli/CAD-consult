import Image from "next/image"
const footerLinks = [
  "Home",
  "About Us",
  "Training Centre",
  "Services",
  "Contact Us",
]
const socials = [
  {
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-[#0e3874] text-white">
      <div className="grid grid-cols-1 gap-10 px-[5%] pt-12 pb-10 md:grid-cols-2 lg:grid-cols-13 lg:gap-12 lg:pt-16">
        {/* Brand */}
        <div className="lg:col-span-6">
          <div className="mb-5 flex items-center gap-3">
            <Image
              src="/images/footer-logo.svg"
              alt="CAD logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-[1.7rem] leading-tight font-semibold">
              CAD Consult Gh
            </span>
          </div>
          <p className="text-justify text-[0.95rem] leading-relaxed text-white/90 " >
            CAD Consult GH is a wholly Ghanaian-owned engineering and surveying
            company incorporated in March 2001, with offices located at the
            Tycan Office Complex, off Achimota School Road, Accra. For over two
            decades, we have grown to become a leading provider of innovative
            positioning solutions and applications software to clients across
            Ghana and the wider West Africa region.
          </p>
        </div>

        {/* Links */}
        <div className="lg:col-span-2">
          <h3 className="mb-6 text-[1.875rem] font-semibold">Links</h3>
          <ul className="space-y-3 text-[1.0625rem]">
            {footerLinks.map((link) => (
              <li key={link}>
                <a href="#" className="transition-colors hover:text-[#ffc425]">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Working Hours */}
        <div className="lg:col-span-3">
          <h3 className="mb-6 text-[1.875rem] font-semibold">Working Hours</h3>
          <p className="text-[1.0625rem]">Weekdays 9:00AM – 5:00PM</p>
        </div>

        {/* Contact */}
        <div className="lg:col-span-2">
          <h3 className="mb-6 text-[1.875rem] font-semibold">Get In Touch</h3>
          <p className="mb-2 text-[1.0625rem]">info@cadconsultgh.com.gh</p>
          <p className="mb-6 text-[1.0625rem] leading-relaxed">
            (233-27) 7603276 / (233-0303) 934116
            <br />
            (233-20) 9981240 / (233-020) 4342261
          </p>
          <ul className="flex flex-row gap-2 text-[1.0625rem]">
            {socials.map((s) => (
              <li>
                <a
                  href={s.href}
                  className="flex items-center gap-2 transition-colors hover:text-[#ffc425]"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-[5%] flex flex-wrap items-center justify-between gap-3 border-t border-white/20 py-5 text-[0.95rem] font-semibold lg:py-6 lg:text-[1.0625rem]">
        <span>© 2026 CAD Consult Ghana</span>
        <div className="flex gap-8">
          <a href="#" className="transition-colors hover:text-[#ffc425]">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-[#ffc425]">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
