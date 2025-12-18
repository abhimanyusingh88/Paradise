import Image from "next/image";
import Link from "next/link";
import bg from "../../public/bg.png"

export default function Page() {
  return (
    <main className="mt-12 md:mt-24">
      <Image src={bg} fill placeholder="blur" className="object-cover object-top" alt="Mountains and forests with two cabins" />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to your-home
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-4 py-4 md:px-8 md:py-6 text-primary-800 text-base md:text-lg font-semibold hover:bg-accent-600 transition-all inline-block w-full md:w-auto"
        >
          Explore luxury cabins and rooms
        </Link>
      </div>
    </main>
  );
}
