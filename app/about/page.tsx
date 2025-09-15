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
              Association of Korean-Canadian Scientists and Engineers (AKCSE) is a
              non-profit professional organization to support the sharing of scientific
              knowledge between Korean-Canadians and setting up connections between Korea
              and Canada for further development.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-24 grid md:grid-cols-2 gap-24 items-start pb-24 px-6 md:px-30">
      {/* 왼쪽: 이미지 두 장 */}
      <div className="flex gap-6 md:gap-10 pl-4 md:pl-10">
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
      <div className="pt-4">
        <h2 className="mt-8 text-3xl font-semibold mb-6">Our Vision</h2>
        <p className="text-base leading-relaxed mb-4">
          Founded in 1986, AKCSE promotes the application of science and technology
          for the general welfare of society.
        </p>
        <p className="text-base leading-relaxed">
          Further, we encourage international cooperation between Korea and Canada and
          support Korean-Canadians to develop their career potential in STEM through
          academic, professional, and community initiatives.
        </p>
      </div>
    </section>

    </main>
  );
}
