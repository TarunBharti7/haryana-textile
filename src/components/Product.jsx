"use client";

import Image from "next/image";
import { FaTshirt, FaBoxOpen, FaFeather } from "react-icons/fa";

const products = [
  {
    name: "Lining Fabric",
    icon: <FaFeather className="text-[#f5c542] text-xl" />,
    img: "/linning.jpg", // replace with appropriate image name
    desc:
      "High-quality lining fabrics in various colors and widths – ideal for garments, linings & tailoring.",
  },
  {
    name: "Blouse Piece",
    icon: <FaTshirt className="text-[#f5c542] text-xl" />,
    img: "/blouse-piece.jpg", // replace with appropriate image name
    desc:
      "Premium blouse piece fabrics suitable for ethnic wear, stitched blouses & fashion garments.",
  },
  {
    name: "Petticoat Fabric",
    icon: <FaBoxOpen className="text-[#f5c542] text-xl" />,
    img: "/petticoat.jpg", // replace with appropriate image name
    desc:
      "Strong and comfortable petticoat fabrics perfect for saree & lehenga underskirts.",
  },
  {
    name: "Upma Falls",
    icon: <FaFeather className="text-[#f5c542] text-xl" />,
    img: "/upma-falls.jpg", // replace with appropriate image name
    desc:
      "Soft and flattering upma falls for sarees, enhancing drape and finish.",
  },
  {
    name: "Pagri Lining",
    icon: <FaFeather className="text-[#f5c542] text-xl" />,
    img: "/pagri-lining.jpg", // replace with appropriate image name
    desc:
      "Pagri lining fabric for turbans, accessories, and traditional headgear.",
  },
  {
    name: "Rubia Fabric",
    icon: <FaFeather className="text-[#f5c542] text-xl" />,
    img: "/rubia.jpg", // replace with appropriate image name
    desc:
      "Rubia fabric for turbans, accessories, and traditional headgear.",
  },
];

export default function Products() {
  return (
    <section className="bg-[#f8f9fa] text-[#0a1a2f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Products
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition text-center"
            >
              <div className="flex justify-center mb-4">
                {product.icon}
              </div>

              <div className="relative mx-auto h-32 w-32 sm:h-40 sm:w-40">
                <Image
                  src={product.img}
                  alt={`${product.name} product`}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                {product.name}
              </h3>

              <p className="mt-2 text-sm text-zinc-600">
                {product.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
