import Contact from "@/components/Contact";
import Details from "@/components/Details";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Details />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
