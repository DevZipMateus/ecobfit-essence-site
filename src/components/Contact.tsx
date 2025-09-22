import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Telefone",
      value: "(86) 99435-4930",
      link: "https://wa.me/5586994354930"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ecobfit@gmail.com",
      link: "mailto:ecobfit@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Endereço",
      value: "Rua Dirce Oliveira, 3597, Bairro Ininga, CEP 64048-550",
      subValue: "(Dentro do prédio da INEAGRO/CCA/UFPI)",
      link: "https://maps.app.goo.gl/Hj3e1FWwMB4aTe7h6"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Horário de funcionamento",
      value: "Segunda a Sexta: 8h30min às 17h30min"
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      url: "https://www.instagram.com/eco.b.fit/",
      handle: "@eco.b.fit"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      url: "https://www.facebook.com/Eco.B.Fit",
      handle: "Eco.B.Fit"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco para conhecer mais sobre nossos produtos 
            ou para se tornar um parceiro da EcoBFit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Informações de contato
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-gradient-card hover:shadow-card transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{info.label}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-glow transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                      {info.subValue && (
                        <p className="text-sm text-muted-foreground mt-1">{info.subValue}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold text-foreground mb-4">Siga-nos nas redes sociais</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gradient-card rounded-lg hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-primary">{social.icon}</div>
                    <div>
                      <div className="font-medium text-foreground">{social.label}</div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map and CTA */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Nossa localização
            </h3>
            
            {/* Map */}
            <div className="bg-gradient-card rounded-2xl p-6 shadow-card">
              <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.456789012345!2d-42.7833333!3d-5.0833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDUnMDAuMCJTIDQywrA0NycwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização EcoBFit"
                ></iframe>
              </div>
              <Button 
                asChild
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground"
              >
                <a
                  href="https://maps.app.goo.gl/Hj3e1FWwMB4aTe7h6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Ver no Google Maps
                </a>
              </Button>
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-hero text-primary-foreground border-0 shadow-float">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold mb-4">
                  Fale conosco agora!
                </h4>
                <p className="mb-6 opacity-90">
                  Clique no botão abaixo para conversar diretamente conosco via WhatsApp.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50"
                >
                  <a
                    href="https://wa.me/5586994354930"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;