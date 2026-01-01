import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Products from "@/components/Product";
import ColorPalette from "@/components/ColorPalette";

export const metadata = {
  title: "Products | Haryana Textile Agency - Linning, Blouse Pieces & More",
  description:
    "Explore the wide range of textile products at Haryana Textile Agency, including linning, blouse pieces, petticoats, upma falls, and Pagri linning in Ambala.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <Products/>
      <ColorPalette/>
      <Footer />
    </>
  );
}
