import { Button } from "@/components/ui/button";
import { Leaf, Heart, Shield } from "lucide-react";
const Hero = () => {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth"
      });
    }
  };
  const handleProductsClick = () => {
    const element = document.querySelector("#products");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/hero-background-new2.jpg" alt="Palmeiras de babaçu" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-nature/80"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <Leaf className="w-8 h-8 text-primary/30" />
      </div>
      <div className="absolute bottom-1/3 right-20 animate-float" style={{
      animationDelay: "1s"
    }}>
        <Heart className="w-6 h-6 text-accent/40" />
      </div>
      <div className="absolute top-1/2 right-10 animate-float" style={{
      animationDelay: "2s"
    }}>
        <Shield className="w-7 h-7 text-primary/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Content Background */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl -z-10"></div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in relative z-10 p-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              EcoBFit
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-950 lg:text-3xl">
              Alimentos inovadores à base de babaçu, livres de lactose, caseína e glúten. 
              Promovendo inclusão alimentar, sustentabilidade e saudabilidade.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button onClick={handleProductsClick} size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-natural px-8 py-3">
                Conheça nossos produtos
              </Button>
              <Button onClick={handleContactClick} variant="outline" size="lg" className="border-primary/60 text-primary hover:bg-primary/10 hover:border-primary px-8 py-3">
                Fale conosco
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-zinc-50">100% natural</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-slate-50">Sem lactose</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                <span className="text-slate-50">Sem glúten</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-slate-50">Sustentável</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 animate-scale-in">
            <div className="relative">
              <div className="w-full max-w-lg mx-auto">
                <img src="/logo-ecobfit-hero.png" alt="Produtos EcoBFit à base de babaçu" className="w-full h-auto drop-shadow-2xl" />
              </div>
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;