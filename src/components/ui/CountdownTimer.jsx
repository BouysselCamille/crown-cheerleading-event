import { useCountdown } from '../../hooks/useCountdown';

function Pad(n) {
  return String(n).padStart(2, '0');
}

function Block({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-crown-gray border border-gold/30 rounded-lg w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 flex items-center justify-center">
        <span className="text-xl sm:text-3xl md:text-5xl font-display font-black text-gold">{Pad(value)}</span>
      </div>
      <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-display">{label}</span>
    </div>
  );
}

export function CountdownTimer({ targetDate }) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className="flex gap-2 sm:gap-4 md:gap-6 justify-center">
      <Block value={days} label="Jours" />
      <div className="self-center text-gold text-xl sm:text-3xl font-black pb-6">:</div>
      <Block value={hours} label="Heures" />
      <div className="self-center text-gold text-xl sm:text-3xl font-black pb-6">:</div>
      <Block value={minutes} label="Minutes" />
      <div className="self-center text-gold text-xl sm:text-3xl font-black pb-6">:</div>
      <Block value={seconds} label="Secondes" />
    </div>
  );
}
