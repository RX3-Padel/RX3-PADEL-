// app/page.tsx
"use client";

import Image from "next/image";
import React from "react";

type LocationStatus = "Open" | "Opening Soon" | "Planned";

type Location = {
  name: string;
  region: string;
  status: LocationStatus;
  description: string;
  bookingUrl?: string;
};

const LOCATIONS: Location[] = [
  {
    name: "Bury St Edmunds",
    region: "Suffolk",
    status: "Opening Soon",
    description:
      "Flagship RX3 Padel club. Premium courts, coaching, leagues and social play.",
  },
  {
    name: "London",
    region: "Greater London",
    status: "Planned",
    description:
      "High-end indoor padel concept designed for city-based players.",
  },
  {
    name: "Midlands",
    region: "Central UK",
    status: "Planned",
    description:
      "Multi-court destination venue with leagues, coaching and events.",
  },
  {
    name: "North West",
    region: "Manchester / Cheshire",
    status: "Planned",
    description:
      "Community-led padel hub built to RX3 premium standards.",
  },
];

function statusBadge(status: LocationStatus) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold";
  switch (status) {
    case "Open":
      return `${base} bg-emerald-600 text-white`;
    case "Opening Soon":
      return `${base} bg-amber-500 text-white`;
    default:
      return `${base} bg-slate-700 text-white`;
  }
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="flex flex-col items-center text-center px-6 pt-16">
        <Image
          src="/logo.png"
          alt="RX3 Padel Logo"
          width={180}
          height={180}
          priority
        />

        <h1 className="text-5xl font-bold mt-8 mb-4">
          RX3 Padel
        </h1>

        <p className="text-lg max-w-2xl mb-8">
          Premium padel clubs launching in Bury St Edmunds and expanding across
          the UK. Built for performance, community and an upmarket experience.
        </p>

        <a
          href="#locations"
          className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          View Our Locations
        </a>

        <div className="mt-12 w-full max-w-5xl">
          <Image
            src="/padel-court.jpg"
            alt="Padel Court"
            width={1200}
            height={600}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto text-center px-6 mt-20">
        <h2 className="text-3xl font-semibold mb-6">About RX3 Padel</h2>
        <p className="text-lg mb-4">
          RX3 Padel is building a premium network of padel clubs across the UK,
          starting with our flagship location in Bury St Edmunds.
        </p>
        <p className="text-lg">
          Every RX3 venue is designed to the same high standard — elite courts,
          coaching, leagues, socials and a strong community feel.
        </p>
      </section>

      {/* LOCATIONS */}
      <section
        id="locations"
        className="max-w-6xl mx-auto px-6 mt-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Our UK Locations</h2>
          <p className="text-lg text-gray-700 mt-2">
            Launching our flagship club, followed by a strategic UK rollout.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.name}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{loc.name}</h3>
                  <p className="text-sm text-gray-600">{loc.region}</p>
                </div>
                <span className={statusBadge(loc.status)}>
                  {loc.status}
                </span>
              </div>

              <p className="mt-4 text-gray-700">{loc.description}</p>

              <div className="mt-6">
                <button
                  disabled
                  className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-600 font-semibold cursor-not-allowed"
                >
                  Booking coming soon
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center mt-24 mb-24 px-6">
        <h2 className="text-3xl font-semibold mb-4">Register Interest</h2>
        <p className="text-lg mb-8">
          For memberships, partnerships or launch updates.
        </p>
        <a
          href="mailto:info@rx3padel.co.uk"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Email RX3 Padel
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        © {new Date().getFullYear()} RX3 Padel. All rights reserved.
      </footer>
    </main>
  );
}
