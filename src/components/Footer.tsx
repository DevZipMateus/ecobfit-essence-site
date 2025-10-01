import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Produtos", href: "#products" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Contato", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo-ecobfit-hero.png"
                alt="EcoBFit" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Alimentos inovadores à base de babaçu, promovendo inclusão alimentar, 
              sustentabilidade e saudabilidade desde 2020.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/eco.b.fit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram EcoBFit"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/Eco.B.Fit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Facebook EcoBFit"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <a 
                  href="https://wa.me/5586994354930"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  (86) 99435-4930
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <a 
                  href="mailto:ecobfit@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  ecobfit@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-foreground/60 mt-1" />
                <div className="text-primary-foreground/80">
                  <p>Rua Dirce Oliveira, 3597</p>
                  <p>Bairro Ininga, CEP 64048-550</p>
                  <p className="text-sm mt-1">(Dentro do prédio da INEAGRO/CCA/UFPI)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} EcoBFit. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            CNPJ: 39.244.196/0001-03
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;