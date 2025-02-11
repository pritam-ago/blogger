import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">Welcome to my website</h1>
      <p className="text-center">
        <Link href="/login" className="m-10 bg-slate-500 ">LOGIN</Link>
        <Link href="/signup" className="m-10 bg-slate-500 ">SIGNUP</Link>
      </p>
    </div>
  );
}
