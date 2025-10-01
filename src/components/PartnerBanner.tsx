const PartnerBanner = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <a
            href="http://www.finep.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
            aria-label="FINEP - Inovação e Pesquisa"
          >
            <img
              src="/banner-finep.png"
              alt="FINEP - Inovação e Pesquisa"
              className="h-auto max-w-full"
              style={{ maxHeight: '90px' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnerBanner;
