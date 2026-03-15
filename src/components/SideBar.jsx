import { useEffect, useState } from 'react';

export default function SideBar({ theme, setTheme }) {
  // const [theme, setTheme] = useState('light');

  // useEffect(() => {
  //   document.documentElement.classList.toggle('dark', theme === 'dark');
  // }, [theme]);

  return (
    <div className="theme-sidebar">
      <div
        className="theme-option"
        onClick={() => setTheme('light')}
      >
        <label className="theme-button">
          <input 
            type="radio"
            name="theme"
            value="light"
            checked={theme === 'light'}
            readOnly // prevent React warning since we're using onClick outside
          />
          <span className={theme === 'light' ? 'checked' : ''}></span>
        </label>
        <span className="label-text">LIGHTMODE</span>
      </div>

      <div
        className="theme-option"
        onClick={() => setTheme('dark')}
      >
        <label className="theme-button">
          <input 
            type="radio"
            name="theme"
            value="dark"
            checked={theme === 'dark'}
            readOnly
          />
          <span className={theme === 'dark' ? 'checked' : ''}></span>
        </label>
        <span className="label-text">DARKMODE</span>
      </div>
    </div>
  );
}