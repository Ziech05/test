"use client";

import { useState } from "react";

export default function BirthdayCard() {
  const [opened, setOpened] = useState(false);
  const [blown, setBlown] = useState(false);

  if (!opened) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-pink-100 to-purple-100 p-6">
        <div className="text-center">
          <h2 className="mb-2 text-lg text-gray-600">🎂 Happy Birthday 🎂</h2>

          <h1 className="mb-6 text-5xl font-bold text-pink-600">Untuk Kamu</h1>

          <button
            onClick={() => setOpened(true)}
            className="rounded-full bg-pink-500 px-8 py-3 text-white shadow-lg transition hover:scale-105"
          >
            Buka Ucapan
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gradient-to-b from-pink-50 via-white to-purple-50 text-gray-800">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 text-5xl font-bold text-pink-600">
          🎉 Selamat Ulang Tahun 🎉
        </h1>

        <p className="max-w-xl text-lg leading-relaxed">
          Semoga hari ini menjadi awal dari banyak kebahagiaan, keberhasilan,
          dan impian yang terwujud.
        </p>
      </section>

      {/* Foto */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-md rounded-3xl bg-white p-4 shadow-2xl">
          <img
            src="/Gemini_Generated_Image_.png"
            alt="Foto Ulang Tahun"
            className="h-[450px] w-full rounded-2xl object-cover"
          />

          <p className="mt-4 text-center text-lg font-semibold">
            Happy Birthday ❤️
          </p>
        </div>
      </section>

      {/* Pesan */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-3xl font-bold">Sebuah Pesan Untukmu</h2>

          <p className="text-lg leading-9">
            Terima kasih telah menjadi pribadi yang luar biasa. Semoga di usia
            yang baru ini kesehatan selalu menyertai, langkahmu dipermudah, dan
            semua cita-cita yang kamu perjuangkan perlahan menjadi kenyataan.
            Tetaplah tersenyum dan menjadi dirimu sendiri.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/30 bg-white/60 p-10 text-center shadow-xl backdrop-blur-md">
          <p className="text-2xl italic">
            "Semoga setiap langkahmu dipenuhi kebahagiaan, kesehatan, dan
            keberkahan."
          </p>
        </div>
      </section>

      {/* Cake */}
      <section className="px-6 py-24 text-center">
        <h2 className="mb-8 text-3xl font-bold">Make A Wish ✨</h2>

        <div
          onClick={() => setBlown(true)}
          className="cursor-pointer text-8xl select-none"
        >
          {blown ? "🎂" : "🕯️🎂"}
        </div>

        <p className="mt-6 text-lg">
          {blown
            ? "✨ Semoga semua harapanmu terkabul ✨"
            : "Klik lilin untuk meniupnya"}
        </p>
      </section>

      {/* Closing */}
      <section className="px-6 py-24 text-center">
        <h2 className="mb-6 text-4xl font-bold text-pink-600">
          Terima Kasih ❤️
        </h2>

        <p className="mx-auto max-w-xl text-lg leading-8">
          Semoga tahun ini menjadi tahun yang penuh kebahagiaan, kesehatan, dan
          keberuntungan untukmu.
        </p>

        <div className="mt-10">
          <p className="text-gray-500">With Love,</p>
          <h3 className="mt-2 text-2xl font-semibold">Nama Pengirim</h3>
        </div>
      </section>
    </main>
  );
}
