export default function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-gold md:text-sm">
        {eyebrow}
      </p>
      <h2
        className={`mt-2 font-serif text-2xl md:mt-3 md:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-3 h-px w-16 bg-gold md:mt-4" />
      {text && (
        <p
          className={`mt-3 text-sm font-light md:mt-5 md:text-base ${
            light ? "text-white/70" : "text-ink/70"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}