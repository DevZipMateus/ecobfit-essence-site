import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Products />
      <Achievements />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
