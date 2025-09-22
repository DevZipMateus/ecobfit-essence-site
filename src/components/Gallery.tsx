import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const galleryImages = [
  {
    src: "/galeria/descricao_de_produto_bolo.png",
    alt: "Descrição do produto bolo de coco babaçu"
  },
  {
    src: "/galeria/descricao_de_produto_creme_vegetal.png",
    alt: "Descrição do produto creme vegetal"
  },
  {
    src: "/galeria/descricao_de_produto_doce_pastoso.png",
    alt: "Descrição do produto doce pastoso"
  },
  {
    src: "/galeria/descricao_de_produto_oleo_extravirgem.png",
    alt: "Descrição do produto óleo extravirgem"
  },
  {
    src: "/galeria/destaque_de_parceiros_e_apoios_financeiros.png",
    alt: "Destaque de parceiros e apoios financeiros"
  },
  {
    src: "/galeria/doce_pastoso_de_coco_babacu_140g.png",
    alt: "Doce pastoso de coco babaçu 140g"
  },
  {
    src: "/galeria/doce_pastoso_de_coco_babacu_250g.png",
    alt: "Doce pastoso de coco babaçu 250g"
  },
  {
    src: "/galeria/entrevista_para_o_canal_o_dia.jpg",
    alt: "Entrevista para o Canal O Dia"
  },
  {
    src: "/galeria/entrevista_para_o_painel_agro_.jpg",
    alt: "Entrevista para o Painel Agro"
  },
  {
    src: "/galeria/entrevista_para_o_programa_falando_nisso_.jpg",
    alt: "Entrevista para o programa Falando Nisso"
  },
  {
    src: "/galeria/foto_de_produto_doce_pastos.jpg",
    alt: "Foto do produto doce pastoso"
  },
  {
    src: "/galeria/foto_de_produto_oleo_de_babacu.jpg",
    alt: "Foto do produto óleo de babaçu"
  },
  {
    src: "/galeria/midia_11.jpg",
    alt: "Mídia 11"
  },
  {
    src: "/galeria/midia_9.jpg",
    alt: "Mídia 9"
  },
  {
    src: "/galeria/nossa_uniao_com_o_babacu.jpg",
    alt: "Nossa união com o babaçu"
  },
  {
    src: "/galeria/oleo_de_babacu_extravirgem_250_ml_extraido_por_prensagem_a_frio_.png",
    alt: "Óleo de babaçu extravirgem 250ml"
  },
  {
    src: "/galeria/oleo_de_babacu_extravirgem_500_ml_extraido_por_prensagem_a_frio_.png",
    alt: "Óleo de babaçu extravirgem 500ml"
  },
  {
    src: "/galeria/sorvete_nas_opcoes_babacu_puro_e_saborizado_.png",
    alt: "Sorvete nas opções babaçu puro e saborizado"
  }
];

const Gallery = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const autoPlay = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000);

    return () => clearInterval(autoPlay);
  }, [api]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Galeria
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa trajetória e nossos produtos através de imagens
          </p>
        </div>

        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl"
            setApi={setApi}
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                          <CardContent className="p-0">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-60 object-cover rounded-lg"
                            />
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;