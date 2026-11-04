const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-white md:py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-3 md:gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="font-serif text-2xl">
            Hassan<span className="text-gold"> Dental</span>
          </p>
          <p className="mt-3 max-w-xs text-sm font-light text-white/60">
            Gentle, modern and luxurious dental care for the whole family in
            Islamabad.
          </p>

          <div className="mt-5 flex gap-3 md:mt-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-gold hover:bg-gold hover:text-ink"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gold md:text-sm">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-xs text-white/70 md:mt-4 md:text-sm">
            <li>Office 20, 2nd Floor, Area Ja, Islamabad</li>
            <li>Phone: +92 51 234 5678</li>
            <li>WhatsApp: +92 300 123 4567</li>
            <li>info@hassandental.pk</li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gold md:text-sm">
            Opening Hours
          </p>
          <ul className="mt-3 space-y-2 text-xs text-white/70 md:mt-4 md:text-sm">
            <li>Mon – Thu: 10 AM – 8 PM</li>
            <li>Friday: 3 PM – 8 PM</li>
            <li>Saturday: 10 AM – 6 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-white/40 md:mt-12">
        © {new Date().getFullYear()} Hassan Dental, Islamabad, Pakistan. All rights reserved.
      </p>
    </footer>
  );
}