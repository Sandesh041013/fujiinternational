"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/universities", label: "Universities" },
    { href: "/services", label: "Services" },
    {
      href: "#",
      label: "Tests",
      dropdown: [
        { href: "/courses/jft", label: "JFT" },
        { href: "/courses/jlpt", label: "JLPT" },
        { href: "/courses/nat", label: "NAT" },
      ],
    },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-black/5"
          : "bg-transparent border-white/10"
      } h-[70px] md:h-[80px]`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/fujibigbg.png"
            alt="Fuji International"
            width={200}
            height={70}
            className="h-[45px] md:h-[55px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 ml-auto">
          {links.map((item) => (
            <li key={item.href} className="relative group">
              <Link
                href={item.href}
                className={`px-3 py-2 text-sm font-semibold transition-all relative ${
                  isActive(item.href)
                    ? "text-red-600"
                    : scrolled
                      ? "text-black"
                      : "text-white"
                } hover:text-red-600`}
              >
                {item.label}

                {/* underline */}
                <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>

              {/* Dropdown */}
              {item.dropdown && (
                <div className="absolute top-full left-0 mt-3 min-w-[180px] bg-black text-white rounded-lg overflow-hidden shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-3 text-sm hover:bg-white/10"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block ml-4 bg-red-600 text-white px-5 py-2 rounded-md font-bold text-sm hover:bg-red-700 transition"
        >
          Get in Touch
        </Link>

       
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-1 w-10 h-10"
        >
          <span
            className={`h-[2px] w-6 bg-gray-600 transition ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-gray-600 transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-gray-600 transition ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-black/10 transition-all overflow-hidden ${
          menuOpen ? "max-h-[500px] py-3" : "max-h-0"
        }`}
      >
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-6 py-3 font-semibold transition ${
              isActive(item.href) ? "text-red-600" : "text-black"
            } hover:text-red-600`}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href="/contact"
          className="block mx-6 mt-4 bg-[#E60013] text-white text-center py-3 rounded-md font-bold"
        >
          Get in Touch →
        </Link>
      </div>
    </nav>
  );
}
