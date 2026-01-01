import Link from "next/link";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaStore,
  FaCheckCircle,
  FaAward,
  FaTruck,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-[#0a1a2f] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-32">

        <div className="grid gap-16 md:grid-cols-2 items-center">

          {/* ===== LEFT CONTENT ===== */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Top Lining Wholesale Shop in Ambala
            </h1>

            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-zinc-200">
              Haryana Textile Agency is a trusted lining fabric wholesaler in Ambala,
              supplying premium quality lining fabrics, Vimal Poplin, Pagri Rubia,
              Full Voile and matching textile products at wholesale prices since 1995.
            </p>

            {/* highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaAward className="text-[#f5c542]" />
                <span>Serving Since 1995</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaCheckCircle className="text-[#f5c542]" />
                <span>Wholesale Textile Dealer</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaTruck className="text-[#f5c542]" />
                <span>Bulk Supply Available</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaStore className="text-[#f5c542]" />
                <span>Ambala Cloth Market</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="tel:9216750600"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5c542] px-8 py-3 text-sm font-semibold text-[#0a1a2f] hover:bg-[#e6b837] transition"
              >
                <FaPhoneAlt />
                Call for Wholesale Rates
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f5c542] px-8 py-3 text-sm font-semibold text-[#f5c542] hover:bg-[#f5c542] hover:text-[#0a1a2f] transition"
              >
                <FaStore />
                Visit Our Shop
              </Link>
            </div>
          </div>

          {/* ===== RIGHT IMAGE GALLERY ===== */}
<div className="flex justify-center md:justify-end w-full">
  <div className="grid grid-cols-3 gap-5 max-w-md">

    {["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"].map(
      (img, index) => (
        <div
          key={index}
          className="
            flex items-center justify-center
            overflow-hidden
          "
        >
          <Image
            src={`/${img}`}
            alt={`Haryana Textile Agency fabric sample ${index + 1}`}
            width={144}
            height={144}
            className="object-cover rounded-xl h-38"
          />
        </div>
      )
    )}

  </div>
</div>



        </div>
      </div>
    </section>
  );
}
