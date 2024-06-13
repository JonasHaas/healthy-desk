"use client";

import Link from 'next/link';

export default function HelpPage() {
  return (
    <>
      <footer className="flex justify-between items-center gap-5 py-4 px-6">
        <Link href="/">
          <button className="btn btn-primary back-button">Back</button>
        </Link>
      </footer>
    </>
  );
}