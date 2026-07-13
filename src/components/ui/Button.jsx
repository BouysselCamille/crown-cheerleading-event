export function Button({ children, variant = 'primary', href, onClick, className = '', disabled = false, ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-display font-bold tracking-wider uppercase text-sm px-8 py-4 transition-all duration-300 cursor-pointer';
  const variants = {
    primary: 'gold-gradient text-black hover:opacity-90 hover:scale-105',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-black',
    ghost: 'text-gold hover:text-gold-light underline-offset-4 hover:underline',
  };

  const classes = `${base} ${variants[variant]} ${disabled ? 'opacity-40 pointer-events-none cursor-not-allowed' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
