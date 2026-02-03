

import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B1F3A] text-white">
      <header className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex items-center justify-between gap-6">
         <a href="#" className="relative h-16 w-56 md:h-20 md:w-72">

            <Image
              src="/rx3-og.jpg"
              alt="PX3 Padel Club"
              fill
              className="object-contain"
              priority
            />
          </a>

          <nav className="flex justify-end gap-10 text-sm uppercase tracking-wider text-white/70">

            <a href="#club" className="hover:text-white transition">The Club</a>
            <a href="#locations" className="hover:text-white transition">Locations</a>
            <a href="#booking" className="hover:text-white transition">Book</a>
          </nav>
        </div>
      </header>

      <section id="club" className="bg-[#F4F3EF] text-[#0A2F1F] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative mx-auto mb-14 h-20 w-72 md:h-24 md:w-[28rem]">
  <div className="absolute inset-0 rounded-xl bg-white/60 blur-xl" />
  <Image
    src="/rx3-og.jpg"
    alt="PX3 Padel Club"
    fill
    className="relative object-contain"
  />
</div>


          <p className="text-lg mb-4">
            PX3 Padel Club venues are designed as modern sporting destinations —
            combining performance facilities with a welcoming social atmosphere.
          </p>

          <p className="text-lg">
            Each location features between 4 and 12 premium courts, professional
            coaching pathways and community-focused programmes.
          </p>
        </div>
      </section>

      <section id="locations" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">Locations</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div><h3 className="text-xl font-semibold">Bury St Edmunds</h3><p className="text-[#F4F3EF]/80">Opening Soon</p></div>
          <div><h3 className="text-xl font-semibold">Winchester</h3><p className="text-[#F4F3EF]/80">Planned</p></div>
          <div><h3 className="text-xl font-semibold">Horsham</h3><p className="text-[#F4F3EF]/80">Planned</p></div>
          <div className="md:col-span-3"><h3 className="text-xl font-semibold mt-6">Reigate</h3><p className="text-[#F4F3EF]/80">Planned</p></div>
        </div>
      </section>

      <section id="booking" className="bg-white text-[#0B1F3A] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Play at PX3 Padel Club</h2>
          <p className="text-lg mb-8">Book courts, sessions and events via our booking platform.</p>
          <a href="https://matchpoint.com" target="_blank" rel="noreferrer"
             className="inline-block bg-[#C8A24A] text-[#0B1F3A] px-8 py-3 font-semibold rounded-md hover:bg-[#d6b35c] transition">
            Book via Matchpoint
          </a>
        </div>
      </section>

      <footer className="bg-[#0B1F3A] py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} PX3 Padel Club. All rights reserved.
      </footer>
    </main>
  );
}


