import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 text-sm rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
    >
      Toggle {dark ? 'Light' : 'Dark'} Mode
    </button>
  );
}