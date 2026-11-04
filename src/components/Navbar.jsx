import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#appointment" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-serif text-2xl tracking-wide text-white">
          Hassan<span className="text-gold"> Dental</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-white/80 transition hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#appointment"
          className="hidden rounded-full bg-gold px-5 py-2 text-sm font-medium text-ink transition hover:bg-gold-dark md:inline-block"
        >
          Book Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="space-y-4 border-t border-white/10 bg-ink px-6 py-5 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-white/80 hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="inline-block rounded-full bg-gold px-5 py-2 text-sm font-medium text-ink"
            >
              Book Now
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
