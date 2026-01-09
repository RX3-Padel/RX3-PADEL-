// app/page.tsx
"use client";

import Image from "import Image from "next/image";
import { useEffect, useState } from "react";
const COURT_IMAGES = ["/court-1.jpg", "/court-2.jpg","/court-3.jpg", "/court-4.jpg"];

function CourtCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % COURT_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
      <Image
        src={COURT_IMAGES[index]}
        alt="RX3 Padel Courts"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}


function CourtCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % COURT_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
      <Image
        src={COURT_IMAGES[index]}
        alt="RX3 Padel Courts"
        fill
        className="object-cover transition-opacity duration-700"
        priority
      />
    </div>
  );
}


function CourtCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % COURT_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
      <Image
        src={COURT_IMAGES[index]}
        alt="RX3 Padel Courts"
        fill
        className="object-cover transition-opacity duration-700"
        priority
      />
    </div>
  );
}



export default function Page() {
  return (
    <main className="min-h-screen bg-[#0A2F1F] text-[#F4F3EF]">
      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/rx3-logo.png"
            alt="RX3 Padel"
            width={200}
            height={200}
          />
          <span className="tracking-[0.25em] text-sm">
            RX3 PADEL
          </span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-[#F4F3EF]/80">
          <a href="#club">The Club</a>
          <a href="#courts">Courts</a>
          <a href="#community">Community</a>
          <a href="#booking">Book</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs mb-4 text-[#C8A24A]">
            Premium Padel Clubs
          </p>

          <h1 className="text-5xl font-semibold leading-tight mb-6">
            A new standard for padel<br />
            in the United Kingdom
          </h1>

          <p className="text-lg text-[#F4F3EF]/85 max-w-xl mb-8">
            RX3 Padel delivers premium courts, coaching and community-led
            wellbeing across carefully selected UK locations.
          </p>

          <a
            href="#booking"
            className="inline-block bg-[#C8A24A] text-[#0A2F1F] px-8 py-3 font-semibold rounded-md hover:bg-[#d6b35c] transition"
          >
            Book a Court
          </a>
        </div>        <div>
          <CourtCarousel />
        </div>


        <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#C8A24A]/30">
          <Image
            src="/padel-court.jpg"
            alt="RX3 Padel Courts"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* THE CLUB */}
      <section id="club" className="bg-[#F4F3EF] text-[#0A2F1F] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            The RX3 Club
          </h2>
          <p className="text-lg mb-4">
            RX3 Padel clubs are designed as modern sporting venues —
            combining performance facilities with a welcoming social atmosphere.
          </p>
          <p className="text-lg">
            Each location features between 4 and 12 premium courts,
            professional coaching pathways and community-focused programmes.
          </p>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Community & Wellbeing
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">All Ages</h3>
            <p className="text-[#F4F3EF]/80">
              Inclusive sessions for juniors, adults and families.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Coaching</h3>
            <p className="text-[#F4F3EF]/80">
              Structured development from beginner to competitive play.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Social Play</h3>
            <p className="text-[#F4F3EF]/80">
              Leagues, events and club nights that build connection.
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="bg-[#C8A24A] text-[#0A2F1F] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Play at RX3 Padel
          </h2>
          <p className="text-lg mb-8">
            Book courts, sessions and events via our booking platform.
          </p>
          <a
            href="https://matchpoint.com"
            className="inline-block bg-[#0A2F1F] text-[#F4F3EF] px-8 py-3 font-semibold rounded-md hover:bg-black transition"
          >
            Book via Matchpoint
          </a>
        </div>
      </section>

      <footer className="bg-[#0A2F1F] py-8 text-center text-sm text-[#F4F3EF]/60">
        © {new Date().getFullYear()} RX3 Padel. All rights reserved.
      </footer>
    </main>
  );
}
