"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function ColorPalette() {
  const colors = [
    "#881cf3", "#532edd", "#bf2478", "#435961", "#6625ea", "#6d4068",
    "#4749f4", "#2fbdf1", "#a04c7c", "#1c8fe1", "#e0126b",
    "#ff5733", "#33ff57", "#3357ff", "#f5c542", "#ff33a6", "#33fff6",
    "#f54242", "#42f554", "#f5e142", "#4233f5", "#f533d4",
    // ... add all 200+ colors here
  ];

  const [selectedColor, setSelectedColor] = useState("");

  return (
    <section className="bg-[#f8f9fa] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* ===== TITLE ===== */}
        <h2 className="text-3xl font-bold mb-6 text-center text-[#0a1a2f]">
          Choose Your Color
        </h2>

        {/* ===== SELECTED COLOR PREVIEW ===== */}
        {selectedColor && (
          <div className="flex justify-center items-center mb-6">
            <span className="mr-2 font-medium text-[#0a1a2f]">Selected Color:</span>
            <div
              className="h-12 w-12 rounded-full ring-2 ring-[#f5c542] flex items-center justify-center"
              style={{ backgroundColor: selectedColor }}
            >
              <FaCheck className="text-white" />
            </div>
          </div>
        )}

        {/* ===== COLOR GRID ===== */}
        <div className="grid grid-cols-6 sm:grid-cols-12 md:grid-cols-16 gap-3 justify-center">
          {colors.map((color, index) => (
            <div
              key={index}
              title={color}
              className={`h-12 w-12 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full cursor-pointer flex items-center justify-center transition-transform transform hover:scale-110 ${
                selectedColor === color ? "ring-2 ring-[#f5c542]" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            >
              {selectedColor === color && <FaCheck className="text-white" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
