import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Testimonials = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const testimonials = [
    {
      name: "Cliente satisfeito",
      text: "Esse doce é muito, muito gostoso! Super recomendo",
      rating: 5,
      product: "Doce de babaçu",
      image: "/depoimentos/depoimento1.jpg"
    },
    {
      name: "Cliente satisfeito",
      text: "Professora Leanne me deu um doce de vcs e eu amei. Que maravilha ❤️. Já segui a página pra ficar de olho",
      rating: 5,
      product: "Doce de babaçu",
      image: "/depoimentos/depoimento3.jpg"
    },
    {
      name: "Cliente satisfeito",
      text: "Adorei a estética 💜💜💜💜 sempre compro em garrafa Pet e fica um grude só kkkkk esse não conheço",
      rating: 5,
      product: "Óleo de babaçu",
      image: "/depoimentos/depoimento4.jpg"
    },
    {
      name: "Clientes satisfeitos",
      text: "Os produtos são maravilhosos! 😊😊 amei. Os produtos são uma delícia! 😊😊",
      rating: 5,
      product: "Produtos gerais",
      image: "/depoimentos/depoimentos5e6.jpg"
    },
    {
      name: "Clientes satisfeitos",
      text: "Disparado meu novo doce favorito 😍. Maravilhoso 😍😍😍. Esse doce é muitooo bom. O melhooooor 👏🔥😍",
      rating: 5,
      product: "Doce de babaçu",
      image: "/depoimentos/depoimento7.jpg"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Depoimentos
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos produtos à base de babaçu.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="w-6 h-6 text-primary/20" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Image */}
                {testimonial.image && (
                  <div className="mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={`Depoimento de ${testimonial.name}`}
                      className="w-full h-auto max-h-48 object-contain rounded-lg cursor-pointer hover:opacity-80 transition-opacity bg-muted/10"
                      onClick={() => setSelectedImage(testimonial.image)}
                    />
                  </div>
                )}

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author and Product */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.product}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Seja o próximo a experimentar nossos produtos
            </h3>
            <p className="text-muted-foreground mb-6">
              Junte-se aos nossos clientes satisfeitos e descubra o sabor único dos alimentos à base de babaçu.
            </p>
            <a
              href="https://wa.me/5586994354930"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-glow text-primary-foreground rounded-lg font-medium transition-colors shadow-natural"
            >
              Experimente agora
            </a>
          </div>
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-3xl w-full p-0">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Depoimento expandido"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Testimonials;