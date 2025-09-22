import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, ShieldCheck } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "Óleo extravirgem de babaçu",
      description: "Extraído por prensagem a frio, preservando todos os nutrientes naturais do babaçu.",
      features: ["Prensagem a frio", "100% puro", "Rico em vitamina E"],
      icon: <Leaf className="w-8 h-8" />
    },
    {
      name: "Doce pastoso de babaçu",
      description: "Delicioso doce cremoso feito com a polpa natural do babaçu, sem aditivos artificiais.",
      features: ["Sem conservantes", "Sabor único", "Textura cremosa"],
      icon: <Heart className="w-8 h-8" />
    },
    {
      name: "Bolo de babaçu",
      description: "Disponível com e sem açúcar, perfeito para quem busca sabor e saúde em cada fatia.",
      features: ["Com ou sem açúcar", "Sem glúten", "Fofinho e saboroso"],
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      name: "Sorvetes",
      description: "Sorvetes cremosos de babaçu puro ou saborizados, uma opção refrescante e nutritiva.",
      features: ["Base vegetal", "Sem lactose", "Diversos sabores"],
      icon: <Leaf className="w-8 h-8" />
    },
    {
      name: "Cookie de babaçu",
      description: "Cookies crocantes e saborosos, ideais para um lanche saudável a qualquer hora.",
      features: ["Crocante", "Sem glúten", "Fonte de fibras"],
      icon: <Heart className="w-8 h-8" />
    }
  ];

  const badges = [
    { text: "Sem lactose", color: "bg-primary/10 text-primary" },
    { text: "Sem glúten", color: "bg-accent/10 text-accent" },
    { text: "Origem vegetal", color: "bg-primary-glow/10 text-primary-glow" },
    { text: "Sem caseína", color: "bg-secondary/20 text-secondary-foreground" }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossos produtos
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todos os nossos produtos são de origem vegetal, livres de lactose, caseína e glúten, 
            desenvolvidos com amor e dedicação para oferecer o melhor do babaçu.
          </p>
        </div>

        {/* Product Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {badges.map((badge, index) => (
            <Badge 
              key={index}
              className={`${badge.color} border-0 px-4 py-2 text-sm font-medium`}
            >
              {badge.text}
            </Badge>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="bg-gradient-card hover:shadow-natural transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:text-primary-glow transition-colors">
                    {product.icon}
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{product.name}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Quer conhecer mais sobre nossos produtos?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Entre em contato conosco e descubra como nossos alimentos podem fazer parte da sua vida saudável.
            </p>
            <a
              href="https://wa.me/5586994354930"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-glow text-primary-foreground rounded-lg font-medium transition-colors shadow-natural"
            >
              Fale conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;