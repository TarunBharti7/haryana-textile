"use client";

import Image from "next/image";

export default function ShopGallery() {
  // images present in public folder: g1.webp → g12.webp
  const images = Array.from({ length: 12 }, (_, i) => `/g${i + 1}.webp`);

  return (
    <section className="bg-[#f8f9fa] text-[#0a1a2f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Shop & Team Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden rounded-xl cursor-pointer transition-transform hover:scale-105"
            >
              <Image
                src={img}
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Explore the interiors of our shop and meet our dedicated team members.
        </p>
      </div>
    </section>
  );
}
