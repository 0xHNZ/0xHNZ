import { useEffect, useState } from 'react';

type TypewriterProps = {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
};

export default function Typewriter({
  text,
  speed = 70,
  className = '',
  showCursor = true,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && <span className={done ? 'cursor-blink text-white' : 'text-white'}>▋</span>}
    </span>
  );
}
