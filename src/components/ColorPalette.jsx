"use client";

export default function ColorPalette() {
  // Generate 200 colors (you can replace with your actual product colors)
  const colors = Array.from({ length: 200 }, (_, i) => {
    // Generate random hex colors
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    return randomColor;
  });

  return (
    <section className="bg-[#0a1a2f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Available Color Palette
        </h2>

        <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 gap-2 justify-items-center">
          {colors.map((color, idx) => (
            <div
              key={idx}
              title={color}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full cursor-pointer transition-transform hover:scale-110"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-zinc-300">
          Explore more than 200 colors across all our products: Lining, Blouse
          Piece, Petticoat, Upma Falls, Pagri Lining.
        </p>
      </div>
    </section>
  );
}
