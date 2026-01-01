import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import ShopGallery from "@/components/Gallery";

export const metadata = {
  title: "About Us | Haryana Textile Agency - Top Linning Wholesale Shop in Ambala",
  description:
    "Haryana Textile Agency is a trusted wholesale supplier of linning, blouse pieces, petticoat, upma falls & Pagri linning in Ambala since 1995. Learn about our story, vision, and team.",
};

export default function AboutPage() {
  return (
    <>  
        <Navbar />
        <AboutUs/>
        <ShopGallery/>
        <Footer/>
    </>
  );
}
