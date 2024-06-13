"use client"; // This directive marks the file as a Client Component

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCog, FaPlay, FaPause, FaForward, FaRedo, FaQuestionCircle } from 'react-icons/fa';
import { defaultSettings } from '/src/defaults';
import { rubik_mono_one } from './fonts'

export default function Home() {

  const [settings, setSettings] = useState(defaultSettings);
  const [currentPhase, setCurrentPhase] = useState('sitting');
  const [timeRemaining, setTimeRemaining] = useState(settings.sittingTime * 60); // in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const savedStandingTime = localStorage.getItem('standingTime');
    const savedSittingTime = localStorage.getItem('sittingTime');
    const savedBreakTime = localStorage.getItem('breakTime');

    if (savedStandingTime && savedSittingTime && savedBreakTime) {
      const newSettings = {
        standingTime: parseInt(savedStandingTime),
        sittingTime: parseInt(savedSittingTime),
        breakTime: parseInt(savedBreakTime),
      };
      setSettings(newSettings);
      setTimeRemaining(newSettings.sittingTime * 60);
    }
  }, []);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            handleNextPhase();
            if (audioRef.current) {
              audioRef.current.play();
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(intervalRef.current);
    }
  }, [isRunning]);

  const handleNextPhase = () => {
    if (currentPhase === 'sitting') {
      setCurrentPhase('standing');
      setTimeRemaining(settings.standingTime * 60);
    } else if (currentPhase === 'standing') {
      setCurrentPhase('break');
      setTimeRemaining(settings.breakTime * 60);
    } else {
      setCurrentPhase('sitting');
      setTimeRemaining(settings.sittingTime * 60);
    }
    setIsRunning(false);
  };

  const handleStartPause = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  };

  const handleSkip = () => handleNextPhase();
  const handleRedo = () => {
    if (currentPhase === 'sitting') {
      setTimeRemaining(settings.sittingTime * 60);
    } else if (currentPhase === 'standing') {
      setTimeRemaining(settings.standingTime * 60);
    } else {
      setTimeRemaining(settings.breakTime * 60);
    }
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const getProgressValue = () => {
    const totalTime =
      currentPhase === 'sitting'
        ? settings.sittingTime * 60
        : currentPhase === 'standing'
          ? settings.standingTime * 60
          : settings.breakTime * 60;
    return ((totalTime - timeRemaining) / totalTime) * 100;
  };

  return (
    <div className='flex flex-col justify-between min-h-screen mx-auto'>
      <header className="flex justify-between items-center py-4 px-6">
        <div className=" flex items-center text-xl font-bold">
          <Image className="mr-1" src="/logo.svg" alt="Logo" width={40} height={40} /><span>HEALTHY DESK</span>
        </div>
        <div className='flex gap-4'>
          <Link href="/help">
            <FaQuestionCircle className="text-2xl cursor-pointer" />
          </Link>
          <Link href="/settings">
            <FaCog className="text-2xl cursor-pointer" />
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center py-4 px-6">
        <div className='py-6 px-6 text-xl font-bold'>{currentPhase.toUpperCase()}</div>
        <div className="radial-progress" style={{ "--value": getProgressValue(), "--size": "15rem", "--thickness": "4px" }} role="progressbar">
          <div className={`text-5xl ${rubik_mono_one.className}`}>{formatTime(timeRemaining)}</div>
        </div>
        <div className='py-4 px-6'>
          <button className="btn btn-circle btn-ghost btn-lg text-3xl" onClick={handleStartPause}>
            {isRunning ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </main>
      <footer className="flex justify-between items-center gap-5 py-4 px-6">
        <button className="btn btn-primary" onClick={handleSkip}><FaForward /></button>
        <button className="btn btn-secondary" onClick={handleRedo}><FaRedo /></button>
      </footer>
      <audio ref={audioRef} src="/alert.mp3" preload="auto" />
    </div>
  );
}
