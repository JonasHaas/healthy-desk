"use client";

import Link from 'next/link';

export default function HelpPage() {
  return (
    <div className='flex flex-col justify-between items-center min-h-screen max-w-2xl mx-auto'>
      <header className="flex justify-between items-center py-4 px-6">
        <div className=" flex items-center text-xl font-bold">
          Introduction
        </div>
      </header>
      <main className="flex flex-col items-center justify-center py-4 px-6 gap-10">
        <section className='text-center'>
          Healthy Desk is my simple & quick solution to keep your lazy ass off the chair. Customize your standing, sitting, and break phases, get audio reminders, and enjoy a sleek interface. Your back will thank you later!
        </section>
        <section>
          2
        </section>
        <section>
          3
        </section>
      </main>
      <footer className="flex justify-between items-center gap-5 py-4 px-6">
        <Link href="/">
          <button className="btn btn-primary back-button">Back</button>
        </Link>
      </footer>
    </div>
  );
}