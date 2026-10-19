'use client';

import { useState, useEffect } from 'react';

export default function Header() {

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      setIsDark(false);
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <header className="
      flex
      p-5
      bg-surface
      shadow
    ">
      <h1
        className='
          mr-auto
          font-black
          text-xl
        '
      >Where in the world?</h1>
      <button
        onClick={toggleTheme}
        className="
          ml-auto
          
        "
      >{isDark ? 'Light Mode' : 'Dark Mode'}</button>
    </header>
  );
}