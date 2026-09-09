import { useEffect, useState } from 'react';

export default function LoadingDots() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => (c + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return <span>{'.'.repeat(count)}</span>;
}
