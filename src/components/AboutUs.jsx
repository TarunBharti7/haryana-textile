import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-white text-[#0a1a2f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ===== LEFT CONTENT ===== */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1a2f]">
              About Haryana Textile Agency
            </h2>

            <p className="text-zinc-700 sm:text-lg leading-relaxed">
              Established in <span className="font-semibold text-[#f5c542]">1995</span>, Haryana Textile Agency 
              is a trusted wholesale supplier of high-quality lining fabrics, 
              Vimal Poplin, Pagri Rubia, Full Voile, and matching textile products. 
              Serving retailers and bulk buyers in Ambala and nearby regions, 
              we pride ourselves on consistency, quality, and long-lasting partnerships.
            </p>

            <p className="text-zinc-700 sm:text-lg leading-relaxed">
              Our mission is to provide premium textile products at competitive 
              wholesale rates while maintaining personalised service and a 
              trustworthy business relationship with every client.
            </p>

            <ul className="mt-4 space-y-2 text-sm sm:text-base text-[#0a1a2f]">
              <li>✔ Authorised Dealer of Vimal Poplin & Pagri Rubia</li>
              <li>✔ Premium Quality Lining & Voile Fabrics</li>
              <li>✔ Serving Retailers & Bulk Buyers Since 1995</li>
              <li>✔ Wholesale Prices & Reliable Delivery</li>
            </ul>
          </div>

          {/* ===== RIGHT IMAGE / VISUAL ===== */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md rounded-xl overflow-hidden">
              <Image
                src="/shop.webp" // you can put any image in public folder
                alt="Haryana Textile Agency Shop"
                width={400}
                height={400}
                className="object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
