import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Lightbulb, Target } from "lucide-react";

const Achievements = () => {
  const milestones = [
    {
      year: "2020",
      title: "Programa Centelha/PI",
      description: "Aprovação que marcou o nascimento da empresa e deu início ao desenvolvimento dos primeiros produtos.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      year: "2021",
      title: "Capacitação e Aceleração",
      description: "Participação em programas como Catalisa ICT (1ª etapa), PEIEX, Ideiaz, InovAtiva Brasil e Rede Mulheres Empreendedoras, fundamentais para fortalecer nossa gestão e ampliar conexões.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      year: "2022",
      title: "Novos Editais e FUNDECI",
      description: "Aprovação em Catalisa ICT (2ª e 3ª etapas) e Startup Nordeste/SEBRAE. Seleção no FUNDECI 01/2021 – Subvenção Econômica para Inovação em Empresas (Banco do Nordeste), viabilizando a aquisição de equipamentos e o desenvolvimento de quatro produtos inovadores.",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2023-2024",
      title: "Execução FUNDECI e Patentes",
      description: "Execução e conclusão do projeto FUNDECI, com validação de produtos e depósito de quatro patentes.",
      icon: <Target className="w-6 h-6" />
    },
    {
      year: "2025",
      title: "Expansão e Mercado Regional",
      description: "Aprovação nos programas Tecnova 3 PI (MCTI/FINEP/FAPEPI) e Inova Cerrado (SEBRAE), que apoiam a expansão da produção e a inserção da EcoBFit no mercado regional.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossas Conquistas
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ao longo da nossa trajetória, a EcoBFit tem se destacado pela capacidade de transformar 
            inovação em resultados concretos. Essa jornada tem sido fortalecida pela participação e 
            aprovação em diversos editais de fomento e programas de aceleração, que reconheceram o 
            potencial dos nossos projetos e nos possibilitaram avançar em pesquisa, desenvolvimento 
            e expansão de mercado.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {milestones.map((milestone, index) => (
            <Card 
              key={index}
              className="bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in border-l-4 border-l-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon and Year */}
                  <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      {milestone.icon}
                    </div>
                    <Badge className="bg-primary/20 text-primary border-0 px-3 py-1 text-sm font-bold whitespace-nowrap">
                      {milestone.year}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-xl mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Closing Message */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Esses reconhecimentos reforçam nossa missão de inovar de forma sustentável e de 
              levar o babaçu para novos patamares, <strong className="text-foreground">unindo ciência, 
              tradição e impacto positivo</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;