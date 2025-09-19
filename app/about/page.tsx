export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] mt-[var(--header)]">
        <img
          src="/images/jason-uoft.jpg"
          alt="University"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-start px-6 md:px-20">
          <div className="max-w-2xl bg-black/40 text-white p-6 rounded-sm">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg leading-relaxed">
              Founded in 1986, Association of Korean-Canadian Scientists and Engineers (AKCSE) is a
              non-profit professional organization that promotes the exchange of scientific knowledge
              and fosters cooperation between Korean and Canadian communities.
              As the University of Toronto chapter, AKCSE UofT supports Korean-Canadian students in STEM through academic, professional, and cultural initiatives.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-24 grid md:grid-cols-2 gap-24 items-start pb-24 px-6 md:px-30">
      {/* 왼쪽: 이미지 두 장 */}
      <div className="mt-10 flex gap-6 md:gap-10 pl-4 md:pl-10">
        <img
          src="/images/about-akcse.jpg"
          alt="AKCSE UofT"
          className="w-1/2 object-cover shadow-md"
        />
        <img
          src="/images/about-coffeechat.jpg"
          alt="Coffee Chat"
          className="w-1/2 object-cover shadow-md"
        />
      </div>

      {/* 오른쪽: 비전 설명 */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
        <p className="text-base leading-relaxed mb-4">
         At AKCSE UofT, we envision a community where
         Korean-Canadian students in STEM feel seen, supported, and inspired.
        </p>
        <p className="text-base leading-relaxed mb-4">
          We strive to create a space where academic ambition and cultural identity grow side by side.
          Through mentorship, skill-building, and peer support, we help students navigate their unique journeys.
          We believe that true growth happens not only in classrooms, but also in collaboration, curiosity, and courage.
        </p>
        <p className="text-base leading-relaxed">
          We are committed to building bridges—between disciplines, cultures, and generations.
          By empowering individuals, we strengthen our collective voice and presence in STEM.
          Together, we’re shaping a future where knowledge and connection lead the way.
        </p>
      </div>
    </section>
    </main>
  );
}
