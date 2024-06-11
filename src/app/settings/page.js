"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { defaultSettings } from '/src/defaults';

export default function SettingsPage() {
  const [standingTime, setStandingTime] = useState(defaultSettings.standingTime);
  const [sittingTime, setSittingTime] = useState(defaultSettings.sittingTime);
  const [breakTime, setBreakTime] = useState(defaultSettings.breakTime);

  useEffect(() => {
    const savedStandingTime = localStorage.getItem('standingTime');
    const savedSittingTime = localStorage.getItem('sittingTime');
    const savedBreakTime = localStorage.getItem('breakTime');

    if (savedStandingTime && savedSittingTime && savedBreakTime) {
      setStandingTime(parseInt(savedStandingTime));
      setSittingTime(parseInt(savedSittingTime));
      setBreakTime(parseInt(savedBreakTime));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('standingTime', standingTime);
    localStorage.setItem('sittingTime', sittingTime);
    localStorage.setItem('breakTime', breakTime);
  };

  return (
    <div className='flex flex-col justify-between items-center min-h-screen max-w-2xl mx-auto'>
      <header className="flex justify-between items-center py-4 px-6">
        <div className=" flex items-center text-xl font-bold">
          SETTINGS
        </div>
      </header>
      <main className="flex flex-col items-center justify-center py-4 px-6">
        <form className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="standing" className="text-lg font-semibold text-center">Standing Time (minutes)</label>
            <input
              type="number"
              id="standing"
              className="input input-bordered w-full text-center"
              value={standingTime}
              onChange={(e) => setStandingTime(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="sitting" className="text-lg font-semibold text-center">Sitting Time (minutes)</label>
            <input
              type="number"
              id="sitting"
              className="input input-bordered w-full text-center"
              value={sittingTime}
              onChange={(e) => setSittingTime(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="break" className="text-lg font-semibold text-center">Break Time (minutes)</label>
            <input
              type="number"
              id="break"
              className="input input-bordered w-full text-center"
              value={breakTime}
              onChange={(e) => setBreakTime(e.target.value)}
            />
          </div>
        </form>
      </main>
      <footer className="flex justify-between items-center gap-5 py-4 px-6">
        <Link href="/">
          <button className="btn btn-primary back-button" onClick={handleSave}>Save</button>
        </Link>
      </footer>
    </div>
  );
}