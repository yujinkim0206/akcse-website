export default function AboutPage() {
  return (
    <main className="px-6 md:px-20 py-12 bg-white text-gray-800">
      <section className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg leading-relaxed">
            Association of Korean-Canadian Scientists and Engineers (AKCSE) is a
            non-profit professional organization to support the sharing of scientific
            knowledge between Korean-Canadians and setting up connections between Korea
            and Canada for further development.
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src="/images/about-university.jpg"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="mt-20 grid md:grid-cols-3 gap-10 items-center">
        <div className="md:col-span-2 flex gap-6">
          <img
            src="/images/about-akcse.jpg"
            alt="AKCSE UOFT"
            className="w-1/2 rounded-xl shadow-md"
          />
          <img
            src="/images/about-coffeechat.jpg"
            alt="Coffee Chat with AKCSE"
            className="w-1/2 rounded-xl shadow-md"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-base leading-relaxed">
            Founded in 1986, AKCSE promotes the application of science and technology
            for the general welfare of society. Further, we encourage international
            cooperation between Korea and Canada and support Korean-Canadians to develop
            their career potential in STEM through academic, professional, and community
            initiatives.
          </p>
        </div>
      </section>
    </main>
  );
}
