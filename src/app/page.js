"use client"; // This directive marks the file as a Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCog, FaPlay, FaPause, FaForward, FaRedo } from 'react-icons/fa';
import { defaultSettings } from '/src/defaults';

export default function Home() {

  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    const savedStandingTime = localStorage.getItem('standingTime');
    const savedSittingTime = localStorage.getItem('sittingTime');
    const savedBreakTime = localStorage.getItem('breakTime');

    if (savedStandingTime && savedSittingTime && savedBreakTime) {
      setSettings({
        standingTime: parseInt(savedStandingTime),
        sittingTime: parseInt(savedSittingTime),
        breakTime: parseInt(savedBreakTime),
      });
    }
  }, []);

  return (
    <div className='flex flex-col justify-between min-h-screen max-w-2xl mx-auto'>
      <header className="flex justify-between items-center py-4 px-6">
        <div className=" flex items-center text-xl font-bold">
          <Image className="mr-1" src="/logo.svg" alt="Logo" width={40} height={40} /><span>HEALTHY DESK</span>
        </div>
        <Link href="/settings">
          <FaCog className="text-2xl cursor-pointer" />
        </Link>
      </header>
      <main className="flex flex-col items-center justify-center py-4 px-6">
        <div className='settings-values'>
          <p>Standing Time: {settings.standingTime} minutes</p>
          <p>Sitting Time: {settings.sittingTime} minutes</p>
          <p>Break Time: {settings.breakTime} minutes</p>
        </div>
        <div className='py-4 px-6 '>PHASENAME</div>
        <div className="radial-progress" style={{ "--value": "70", "--size": "15rem", "--thickness": "4px" }} role="progressbar">
          <div className='text-5xl'>00:00</div>
        </div>
        <div className='py-4 px-6'></div>
        <button className="btn btn-circle btn-ghost btn-lg text-3xl">
          <FaPlay />
        </button>
      </main>
      <footer className="flex justify-between items-center gap-5 py-4 px-6">
        <button className="btn btn-primary"><FaForward /></button>
        <button className="btn btn-secondary"><FaRedo /></button>
      </footer>
    </div>
  );
}