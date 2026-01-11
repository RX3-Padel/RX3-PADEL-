"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const COURT_IMAGES = [
  "/court-1.jpg",
  "/court-2.jpg",
  "/court-3.jpg",
  "/court-4.jpg",
];

function CourtCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % COURT_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#C8A24A]/30">
      <Image
        key={index}
        src={COURT_IMAGES[index]}
        alt="RX3 Padel Courts"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
const logos = [
  { src: "/rx3-logo.png", label: "Primary" },
  { src: "/rx3-logo-blue.png", label: "Blue" },
  { src: "/rx3-logo-black.jpg", label: "Black" },
  { src: "/rx3-logo-horizontal-strapline.png", label: "Strapline" },
]

function LogoPicker() {
  const [index, setIndex] = useState(0);
  const total = logos.length;

  // swipe handling
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);


  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {

    const t = e.touches[0];
    startX.current = t.clientX;
    startY.current = t.clientY;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {

    if (startX.current == null || startY.current == null) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - startX.current;
    const dy = t.clientY - startY.current;

    // ignore mostly vertical (scroll)
    if (Math.abs(dy) > Math.abs(dx)) {
      startX.current = null;
      startY.current = null;
      return;
    }

    if (dx > 40) prev();
    if (dx < -40) next();

    startX.current = null;
    startY.current = null;
  };

  // Optional: auto-rotate (comment out if you want manual only)
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % total), 3500);
    return () => clearInterval(t);
  }, [total]);

  return (
    <div className="col-span-full w-full flex flex-col items-center justify-center gap-4">
      <div
        className="relative w-[95vw] max-w-[1400px] aspect-[5/2] select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="group"
        aria-label="Logo selector"
      >
        <Image
          key={logos[index].src}
          src={logos[index].src}
          alt={`RX3 Padel logo – ${logos[index].label}`}
          fill
          priority
          className="object-contain"
          draggable={false}
        />

        <button
          type="button"
          onClick={prev}
          aria-label="Previous logo"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 shadow hover:bg-white"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next logo"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 shadow hover:bg-white"
        >
          ›
        </button>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-white/80">{logos[index].label}</span>
        <div className="flex gap-2">
          {logos.map((l, i) => (
            <button
              key={l.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Select ${l.label}`}
              className={`h-2.5 w-2.5 rounded-full ${
                i === index ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-xs text-white/60">Swipe left/right to change logo</p>
    </div>
  );
}


export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B1F3A] text-white">

      {/* HEADER */}
     

<header className="max-w-6xl mx-auto px-6 py-6">
  {/* Logo full-width */}
  <div className="w-full">
  <LogoPicker />
</div>


  {/* Nav under logo, right aligned */}
  <nav className="mt-4 flex justify-end gap-8 text-sm text-white/80">
    <a href="#club" className="hover:text-white transition">The Club</a>
    <a href="#locations" className="hover:text-white transition">Locations</a>
    <a href="#booking" className="hover:text-white transition">Book</a>
  </nav>
</header>


  
      {/* HERO */}



      {/* THE CLUB */}
      <section id="club" className="bg-[#F4F3EF] text-[#0A2F1F] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">The RX3 Club</h2>
          <p className="text-lg mb-4">
            RX3 Padel clubs are designed as modern sporting venues — combining performance facilities with a welcoming social atmosphere.
          </p>
          <p className="text-lg">
            Each location features between 4 and 12 premium courts, professional coaching pathways and community-focused programmes.
          </p>
        </div>
      </section>
      {/* COMMUNITY IMPACT */}
<section className="bg-[#0B1F3A] py-24">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <p className="uppercase tracking-[0.35em] text-xs text-[#C8A24A] mb-4">
      Community Impact
    </p>

    <h2 className="text-4xl font-semibold mb-6 text-white">
      Elevating fitness, strengthening community
    </h2>

    <p className="max-w-3xl mx-auto text-lg text-white/80 mb-16">
      RX3 Padel works with local authorities, schools and community groups
      to deliver accessible, inclusive padel facilities that support physical
      health, mental wellbeing and social connection across all ages.
    </p>

    <div className="grid md:grid-cols-3 gap-12 text-white">
      <div>
        <h3 className="text-xl font-semibold mb-2">Youth Programmes</h3>
        <p className="text-white/75">
          Introducing young people to padel through schools, clubs and
          affordable coaching pathways.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Inclusive Adult Play</h3>
        <p className="text-white/75">
          Social sessions, leagues and beginner-friendly formats that welcome
          all abilities.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Health & Wellbeing</h3>
        <p className="text-white/75">
          Supporting active lifestyles through fun, low-impact and highly
          social sport.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* LOCATIONS */}
      <section id="locations" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">Locations</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div><h3 className="text-xl font-semibold">Bury St Edmunds</h3><p className="text-[#F4F3EF]/80">Opening Soon</p></div>
          <div><h3 className="text-xl font-semibold">Winchester</h3><p className="text-[#F4F3EF]/80">Planned</p></div>
          <div><h3 className="text-xl font-semibold">Horsham</h3><p className="text-[#F4F3EF]/80">Planned</p></div>
          <div className="md:col-span-3"><h3 className="text-xl font-semibold mt-6">Reigate</h3><p className="text-[#F4F3EF]/80">Planned</p></div>
        </div>
      </section>

           {/* BOOKING */}
      <section id="booking" className="bg-white text-[#0B1F3A] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Play at RX3 Padel</h2>
          <p className="text-lg mb-8">
            Book courts, sessions and events via our booking platform.
          </p>

          <a
            href="https://matchpoint.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#C8A24A] text-[#0B1F3A] px-8 py-3 font-semibold rounded-md hover:bg-[#d6b35c] transition"
          >
            Book via Matchpoint
          </a>
        </div>
      </section>

      <footer className="bg-[#0B1F3A] py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} RX3 Padel. All rights reserved.
      </footer>
    </main>
  );
}

