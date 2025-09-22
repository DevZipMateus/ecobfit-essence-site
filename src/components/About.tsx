import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Target, Eye, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Inovação",
      description: "Criar alimentos únicos, de alto valor agregado, sempre à frente das tendências de mercado."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Sustentabilidade",
      description: "Valorizar a biodiversidade e reduzir desperdícios, atuando em harmonia com o meio ambiente."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Inclusão",
      description: "Desenvolver produtos acessíveis para todos, especialmente para pessoas com restrições alimentares."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Qualidade",
      description: "Garantir segurança alimentar, nutrição e sabor em cada produto."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sobre nós
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Nossa história
            </h3>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Na EcoBFit, acreditamos que é possível unir inovação, saúde e sustentabilidade em cada alimento que produzimos. 
                Nascemos em 2020, em Teresina-PI, com a missão de transformar o babaçu — um fruto abundante em nossa região — 
                em produtos nutritivos, saborosos e acessíveis para todos.
              </p>
              <p>
                Valorizamos a bioeconomia e a inovação como caminhos para um futuro mais saudável. Por isso, desenvolvemos 
                alimentos livres de lactose, caseína e glúten, ideais para vegetarianos, pessoas com restrições alimentares 
                ou simplesmente para quem busca uma alimentação mais equilibrada.
              </p>
              <p>
                Nosso compromisso vai além da nutrição: também trabalhamos para gerar impacto positivo na sociedade, 
                na economia local e no meio ambiente, alinhados aos Objetivos de Desenvolvimento Sustentável da ONU.
              </p>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Nossa missão</h4>
                    <p className="text-muted-foreground">
                      Desenvolver e oferecer alimentos inovadores à base de babaçu, promovendo inclusão alimentar, 
                      sustentabilidade e saudabilidade, por meio do uso responsável dos recursos naturais e da 
                      valorização da biodiversidade brasileira.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Nossa visão</h4>
                    <p className="text-muted-foreground">
                      Ser referência nacional em inovação alimentar a partir do babaçu, tornando-se uma marca 
                      reconhecida por unir ciência, tradição e sustentabilidade, e levando o sabor e os benefícios 
                      desse fruto para o Brasil e o mundo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Nossos valores
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;