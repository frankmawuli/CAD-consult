"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Training Centre", href: "/training" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto h-[68px] lg:h-[90px] flex items-center justify-between px-5 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 lg:gap-3" onClick={() => setOpen(false)}>
          <img src="/images/nav-logo.png" alt="CAD logo" className="h-9 lg:h-12 w-auto" />
          <span className="font-semibold text-[#0e3874] text-lg lg:text-2xl leading-tight">
            CAD Consult Gh
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-medium text-lg transition-colors hover:text-[#ffc425] ${
                  pathname === href ? "text-[#ffc425]" : "text-[#0e3874]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="lg:hidden p-2 -mr-1 text-[#0e3874]"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-5 pb-5">
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 border-b border-gray-100 font-medium text-base transition-colors hover:text-[#ffc425] ${
                    pathname === href ? "text-[#ffc425]" : "text-[#0e3874]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
