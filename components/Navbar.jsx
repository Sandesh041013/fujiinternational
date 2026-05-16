import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
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
      href: "/courses",
      label: "Courses",
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
    href === "/"
      ? router.pathname === "/"
      : router.pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-black/5 shadow-md"
          : "bg-transparent border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto h-[80px] px-5 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center shrink-0"
        >
          <Image
            src="/fujibigbg.png"
            alt="Fuji International Consultancy"
            width={220}
            height={80}
            priority
            className="object-contain w-auto h-auto max-h-[60px]"
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-1 ml-auto">
          {links.map((item) => (
            <li
              key={item.href}
              className="relative group"
            >
              <Link
                href={item.href}
                className={`relative px-4 py-2 text-[15px] font-semibold transition duration-300 ${
                  scrolled
                    ? "text-black"
                    : "text-white"
                } ${
                  isActive(item.href)
                    ? "text-red-600"
                    : ""
                } hover:text-red-600`}
              >
                {item.label}

                {/* underline */}
                <span
                  className={`absolute left-4 right-4 bottom-1 h-[2px] bg-red-600 origin-left transition-transform duration-300 ${
                    isActive(item.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>

              {/* DROPDOWN */}
              {item.dropdown && (
                <div className="absolute top-[120%] left-0 min-w-[190px] rounded-xl bg-[#111] border border-white/10 overflow-hidden opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">

                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-5 py-3 text-sm text-white hover:bg-white/5 transition"
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
          className="hidden lg:inline-flex ml-6 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-3 rounded-lg transition duration-300 hover:-translate-y-[2px]"
        >
          Get in Touch
        </Link>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-[5px]"
        >
          <span
            className={`w-6 h-[2px] rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-black"
                : "bg-white"
            } ${
              menuOpen
                ? "translate-y-[7px] rotate-45"
                : ""
            }`}
          />

          <span
            className={`w-6 h-[2px] rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-black"
                : "bg-white"
            } ${
              menuOpen
                ? "opacity-0"
                : ""
            }`}
          />

          <span
            className={`w-6 h-[2px] rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-black"
                : "bg-white"
            } ${
              menuOpen
                ? "-translate-y-[7px] -rotate-45"
                : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden bg-white transition-all duration-500 border-t border-black/5 ${
          menuOpen
            ? "max-h-[500px]"
            : "max-h-0"
        }`}
      >
        <div className="flex flex-col py-3">

          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-6 py-4 text-base font-semibold transition-all duration-300 ${
                isActive(item.href)
                  ? "text-red-600 pl-8"
                  : "text-black hover:text-red-600 hover:pl-8"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="px-6 pt-3 pb-5">
            <Link
              href="/contact"
              className="block text-center bg-[#E60013] hover:bg-red-700 text-white font-bold rounded-lg py-4 transition"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}