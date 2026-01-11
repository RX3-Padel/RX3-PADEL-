"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B1F3A] text-white">

      {/* HEADER */}
     

<header className="max-w-6xl mx-auto px-6 py-6">
  {/* Logo full-width */}
  <div className="relative w-full h-[180px] sm:h-[180px] md:h-[210px] lg:h-[280px]">
    <Image
      src="/rx3-logo-blue.png"

      alt="RX3 Padel – Elevating fitness, strengthening community"
      fill
      className="object-contain"
      priority
    />
  </div>

  {/* Nav under logo, right aligned */}
  <nav className="mt-4 flex justify-end gap-8 text-sm text-white/80">
    <a href="#club" className="hover:text-white transition">The Club</a>
    <a href="#locations" className="hover:text-white transition">Locations</a>
    <a href="#booking" className="hover:text-white transition">Book</a>
  </nav>
</header>


      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs mb-4 text-[#C8A24A]">
            Premium Padel Clubs
          </p>

          <h1 className="text-5xl font-semibold leading-tight mb-6">
            A new standard for padel<br />
            in the United Kingdom
          </h1>
          <p className="text-lg text-[#C8A24A] font-medium mb-4">
  Elevating fitness, strengthening community
</p>


          <p className="text-lg text-[#F4F3EF]/85 max-w-xl mb-8">
            RX3 Padel delivers premium courts, coaching and community-led wellbeing across carefully selected UK locations.
          </p>

          <a
            href="#booking"
            className="inline-block bg-[#C8A24A] text-[#0A2F1F] px-8 py-3 font-semibold rounded-md hover:bg-[#d6b35c] transition"
          >
            Book via Matchpoint
          </a>
        </div>

        <div>
          <CourtCarousel />
          <p className="mt-3 text-sm text-[#F4F3EF]/70">
            Rotating gallery • court-1.jpg → court-4.jpg
          </p>
        </div>
      </section>

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

