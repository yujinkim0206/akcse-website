import Sponsor from "../ui/Sponsor";

export default function Sponsors() {
  const sponsors = [
    {
      name: "Sponsor 1",
      description: "Description for Sponsor 1",
      image: "/images/sponsor1.jpg",
      url: "https://sponsor1.com",
    },
    {
      name: "Sponsor 2",
      description: "Description for Sponsor 2",
      image: "/images/sponsor2.jpg",
      url: "https://sponsor2.com",
    },
    {
      name: "Sponsor 3",
      description: "Description for Sponsor 3",
      image: "/images/sponsor3.jpg",
      url: "https://sponsor3.com",
    },
    {
      name: "Sponsor 4",
      description: "Description for Sponsor 4",
      image: "/images/sponsor4.jpg",
      url: "https://sponsor4.com",
    },
    {
      name: "Sponsor 5",
      description: "Description for Sponsor 5",
      image: "/images/sponsor5.jpg",
      url: "https://sponsor5.com",
    },
    {
      name: "Sponsor 6",
      description: "Description for Sponsor 6",
      image: "/images/sponsor6.jpg",
      url: "https://sponsor6.com",
    },
  ];
  return (
    <section className="wrap section-spacing">
      <h2 className="section-heading mb-6 sm:mb-10">Our Sponsors</h2>
      <div className="grid grid-cols-2 gap-6 md:gap-10 md:grid-cols-3">
        {sponsors.map((sponsor, i) => (
          <Sponsor
            key={i}
            name={sponsor.name}
            description={sponsor.description}
            image={sponsor.image}
            url={sponsor.url}
          />
        ))}
      </div>
    </section>
  );
}
