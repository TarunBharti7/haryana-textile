import AboutUs from "@/components/AboutUs";
import ColorPalette from "@/components/ColorPalette";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Product";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export const metadata = {
  title: "Top Lining Wholesale Shop in Ambala | Haryana Textile Agency",
  description:
    "Haryana Textile Agency is a trusted lining fabric wholesaler in Ambala since 1995. Authorised dealer of Vimal Poplin, Pagri Rubia, Full Voile & matching textile products.",
};


export default function Home() {
  return (
    <> 
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Products/>
      <Gallery/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
      {/* <ColorPalette/> */}
    </>
  );
}
