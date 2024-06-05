"use client"; // This directive marks the file as a Client Component

import { useState } from 'react';

export default function Home() {
  return (
    <>
      <header className="max-w-7xl mx-auto px-8 py-5 flex items-center">
        <div className="w-full flex items-center pl-12 md:pl-24 gap-4 md:gap-12">
          <a className="link link-hover" href="#pricing">Pricing</a>
          <a className="link link-hover hidden sm:inline" href="#demo">Demo</a>
          <a className="link link-hover" href="#testimonials">Wall of love</a>
          <a className="link link-hover hidden md:inline" target="_blank" href="/leaderboard">Leaderboard</a></div>
      </header>
      <button className="btn btn-primary">Button</button>
    </>
  );
}
