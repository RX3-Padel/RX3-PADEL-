// app/page.tsx
"use client";

import Image from "next/image";
import React from "react";

type LocationStatus = "Open" | "Opening Soon" | "Planned";

type Location = {
  name: string;
  region: string;
  status: LocationStatus;
  courts: string; // e.g. "6 courts" / "4–12 courts"
  description: string;
  matchpointUrl?: string; // add the real Matchpoint link when you have it
};

const MATCHPOINT_GLOBAL = "https://matchpoint.com"; // replace with your actual booking page when ready

const LOCATIONS: Location[] = [
  {
    name: "Bury St Edmunds",
    region: "Suffolk",
    status: "Opening Soon",
    courts: "4–12 courts",
    description:
      "Flagship RX3 club — premium courts, coaching, leagues and community sessions for all ages.",
    // matchpointUrl: "https://matchpoint.com/your-bury-link"
  },
  {
    name: "Winchester",
    region: "Hampshire",
    status: "Planned",
    courts: "4–12 courts",
    description:
      "Premium RX3 venue designed for performance, community and high-quality facilities.",
    // matchpointUrl: "https://matchpoint.com/your-winchester-link"
  },
  {
    name: "Horsham",
    region: "West Sussex",
    status: "Planned",
    courts: "4–12 courts",
    description:
      "Community-focused padel club bringing fitness, wellbeing and social play to all ages.",
    // matchpointUrl: "https://matchpoint.com/your-horsham-link"
  },
  {
    name: "Reigate",
    region: "Surrey",
    status: "Planned",
    courts: "4–12 courts",
    description:
      "High-end padel destination serving Surrey with RX3’s premium court and coaching standard.",
    // matchpointUrl: "https://matchpoint.com/your-reigate-link"
  },
];

function statusClasses(status: LocationStatus) {
  switch (status) {
    case "Open":
      return "bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-400/30";
    case "Opening Soon":
      return "bg-amber-500/15 text-amber-200 ring-1 ring-amber-400/30";
    default:
      return "bg-slate-500/15 text-slate-200 ring-1 ring-slate-400/30";
  }
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#070A10] text-white">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(255,215,140,0.18),rgba(7,10,16,0))]" />

      {/* NAV */}
      <header className="relative z-10 mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/rx3-logo.png"
            alt="RX3 Padel"
            width={44}
            height={44}
            priority
          />
          <span className="tracking-[0.22em] text-sm text-white/80">
            RX3 PADEL
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a className="hover:text-white transition" href="#locations">
            Locations
          </a>
          <a className="hover:text-white transition" href="#vision">
            Vision
          </a>
          <a className="hover:text-white transition" href="#booking">
            Booking
          </a>
        </nav>

        <a
          href={MATCHPOINT_GLOBAL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition"
        >
          Book on Matchpoint
        </a>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-white/60 tracking-[0.3em] text-xs mb-4">
              PREMIUM • COMMUNITY • PERFORMANCE
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              High-end padel clubs,
              <span className="text-[#FFD08A]"> built for the UK.</span>
            </h1>

            <p className="mt-5 text-white/75 text-lg max-w-xl">
              RX3 Padel is expanding across the UK with{" "}
              <span className="text-white">4–12 world-class courts per site</span>,
              partnering with local communities to bring fitness and wellbeing
              to all ages.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#locations"
                className="rounded-lg bg-[#FFD08A] text-black px-6 py-3 font-semibold hover:bg-[#ffcf7a] transition text-center"
              >
                Explore locations
              </a>

              <a
                href={MATCHPOINT_GLOBAL}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10 transition text-center"
              >
                Book via Matchpoint
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-[#FFD08A]">4–12</div>
                <div className="text-sm text-white/70">Courts per site</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-[#FFD08A]">All ages</div>
                <div className="text-sm text-white/70">Wellbeing focus</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-[#FFD08A]">UK</div>
                <div className="text-sm text-white/70">Multi-site rollout</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src="/padel-court.jpg"
                alt="RX3 Padel courts"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>
            <p className="mt-3 text-sm text-white/60 px-1">
              Premium courts • Coaching • Social play • Community programmes
            </p>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-semibold">UK Locations</h2>
            <p className="text-white/70 mt-2 max-w-2xl">
              One flagship launch, then a strategic rollout — each venue built to the RX3 standard.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{loc.name}</h3>
                  <p className="text-sm text-white/60">{loc.region}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses(
                    loc.status
                  )}`}
                >
                  {loc.status}
                </span>
              </div>

              <p className="mt-4 text-white/75">{loc.description}</p>

              <div className="mt-5 flex items-center justify-between text-sm text-white/60">
                <span>{loc.courts}</span>
                <span className="text-[#FFD08A]">RX3 Standard</span>
              </div>

              <div className="mt-6">
                {loc.matchpointUrl ? (
                  <a
                    href={loc.matchpointUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-white text-black px-4 py-2 font-semibold hover:bg-white/90 transition"
                  >
                    Book on Matchpoint
                  </a>
                ) : (
                  <a
                    href={MATCHPOINT_GLOBAL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-semibold hover:bg-white/10 transition"
                  >
                    Booking (link coming soon)
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h2 className="text-3xl font-semibold">Community + Wellbeing</h2>
          <p className="mt-4 text-white/75 max-w-3xl">
            RX3 Padel partners with local communities to create access to sport,
            fitness and wellbeing for all ages — from juniors and families to
            performance players and social leagues.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/10 bg-black/20 p-6">
              <h3 className="font-semibold text-lg">Coaching Pathways</h3>
              <p className="mt-2 text-white/70 text-sm">
                Structured coaching for beginners through to competitive players.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-6">
              <h3 className="font-semibold text-lg">Social & Leagues</h3>
              <p className="mt-2 text-white/70 text-sm">
                Weekly socials, ladder leagues and club competitions.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-6">
              <h3 className="font-semibold text-lg">All Ages</h3>
              <p className="mt-2 text-white/70 text-sm">
                Family-friendly sessions and community programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold">Book & Register Interest</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Book via Matchpoint (or register for launch updates, memberships and partnerships).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={MATCHPOINT_GLOBAL}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-[#FFD08A] text-black px-6 py-3 font-semibold hover:bg-[#ffcf7a] transition text-center"
            >
              Book on Matchpoint
            </a>
            <a
              href="mailto:info@rx3padel.co.uk"
              className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10 transition text-center"
            >
              Email us
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} RX3 Padel. All rights reserved.
      </footer>
    </main>
  );
}
