import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

export const metadata = {
  title: "Contact Us | Haryana Textile Agency - Top Linning Wholesale Shop in Ambala",
  description:
    "Get in touch with Haryana Textile Agency for inquiries about linning, blouse pieces, petticoats, upma falls & Pagri linning. Visit our shop or contact us via phone/email.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <ContactUs/>

      <Footer />
    </>
  );
}
