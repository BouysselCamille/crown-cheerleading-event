export function SectionTitle({ label, title, subtitle, center = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && (
        <span className="text-gold font-display font-bold tracking-widest uppercase text-xs mb-3 block">
          {label}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-400 text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
