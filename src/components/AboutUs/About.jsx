const aboutSections = [
  {
    title: "History",
    image: "/img/about/about_img-1.png",
    intro:
      "Established in the late 1960s, our family owned business is based in Edinburgh and Falkirk, but services customers across the UK.",
    paragraphs: [
      "Our Edinburgh branch has the longest history as an audio retailer in the UK. During recent renovations, receipts were found from Nicolson’s Gramophone Saloon dating back to 1926. In the 1950s WG Graham took over the shop and renamed it WG Graham’s HiFi Corner. Upon his retirement, Graham Tiso bought the business and modernized the name to HiFi Horizon.",
      "Soon thereafter a young enthusiastic Colin MacKenzie (left), who was recommended by Linn’s own Ivor Tiefenbrun, was employed to manage the shop; with a knack for business and years of experience in the hi-fi industry, Colin would later become the owner of HiFi Horizon. Today, Struan MacKenzie carries on the legacy as the company’s Managing Director."
    ]
  },
  {
    title: "Hear The Difference",
    image: "/img/about/about_img-2.png",
    intro:
      "Book a demonstration at our Edinburgh or Falkirk showrooms.",
    paragraphs: [
      "Would you choose a quality car without a test drive? If you are familiar with the brand and have great trust in it, you might. However, our listening preferences are unique to the individual and with many of our customers new to the world of high quality sound and vision, we encourage everyone to come in to demonstrate the products they are interested in. You’ll find a relaxing and comfortable environment in both our Edinburgh and Falkirk premises where you can decide for yourself if the kit is right for you. We also offer home demonstrations on selected products.",
      "It's our aim to get the right product for you.",
      "Our experts are on hand to guide you through the differences between speakers, amplifiers and sources and provide simple solutions that suit your needs."
    ]
  },
  {
    title: "Services",
    image: "/img/about/about_img-3.png",
    intro:
      "Our passion for the products we sell and, for our customers’ satisfaction simply means that we happily offer additional services not found on the high-street.",
    paragraphs: [
      "<span>Home Setup</span> – We want to ensure that the equipment you’ve purchased from us is installed correctly and sounds perfect; and we happily provide this service throughout the UK.",
      "<span>Part Exchange</span> – To help you upgrade your system, we offer our part-exchange program. We can offer a set price, or sell your old kit on your behalf.",
      "<span>Turntable Doctor</span> – Our turntable experts have been trained by the manufacturers for initial setup, long-term maintenance, and upgrading your high quality turntables.",
      "<span>Record Cleaning Service</span> – Have some old records that need a bit of love? We offer Scotland’s very own professional record cleaning service with our bespoke Pro-Ject record cleaner."
    ]
  },
  {
    title: "Tailored For You",
    image: "/img/about/about_img-4.png",
    intro:
      "We look forward to customising a system to meet your needs.",
    paragraphs: [
      "We don’t favour one manufacturer over another – the only thing we do favour is making sure our customers get the right product that suits their needs and listening preferences. We will ask many questions in order to ensure that what you buy from us is tailored to you and you alone.",
      "If you are looking for a product not found in our demonstration showrooms or our online site, don’t fret as we have access to hundreds of brands.",
      "One of our biggest pleasures of working in this industry is to see the smile on our customers’ faces when they finally hear and see the system of their dreams."
    ]
  }
];

export default function About() {
  return (
    <section className="about">
      {aboutSections.map((section, index) => {
        const direction = index % 2 === 0 ? "right" : "left";
        return (
          <article key={index} className={`about__content ${direction}`}>
            <img src={section.image} alt={section.title} />
            <div>
              <h2>{section.title}</h2>
              <span>{section.intro}</span>
              {section.paragraphs.map((text, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
              ))}
            </div>
          </article>
        );
      })}
    </section>
  );
}
