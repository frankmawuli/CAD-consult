"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {label: "Sales and Support", href: "/sales-and-support"},
  { label: "Services", href: "/services" },
  { label: "Training Centre", href: "/training" },
  { label: "Contact Us", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white shadow-sm">
      <div className="flex h-14 items-center justify-between px-[5%] lg:h-18">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 lg:gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/nav-logo.svg"
            alt="CAD Consult Gh logo"
            width={48}
            height={48}
            className="h-9 w-11.5"
          />
          <span className="text-sm leading-tight font-semibold text-[#0e3874] lg:text-xl">
            CAD Consult Gh
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-base font-medium transition-colors hover:text-accent ${
                  pathname === href ? "text-[#0e3874]" : "text-[#0e3874]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="-mr-1 p-2 text-[#0e3874] lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-gray-100 py-2 text-sm font-medium transition-colors ${
                    pathname === href ? "text-[#0e3874]" : "text-[#0e3874]"
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
