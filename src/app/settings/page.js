import Link from 'next/link';
import Image from 'next/image';

export default function SettingsPage() {
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
              defaultValue={30}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="sitting" className="text-lg font-semibold text-center">Sitting Time (minutes)</label>
            <input
              type="number"
              id="sitting"
              className="input input-bordered w-full text-center"
              defaultValue={15}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="break" className="text-lg font-semibold text-center">Break Time (minutes)</label>
            <input
              type="number"
              id="break"
              className="input input-bordered w-full text-center"
              defaultValue={5}
            />
          </div>
        </form>
      </main>
      <footer className="flex justify-between items-center gap-5 py-4 px-6">
        <Link href="/">
          <button className="btn btn-primary back-button">Back to Timer</button>
        </Link>
      </footer>
    </div>
  );
}