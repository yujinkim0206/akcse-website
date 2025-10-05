export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="section-spacing relative h-[100vh] w-full overflow-hidden">
        <img
          src="/images/jason-uoft.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent">
          <div className="mx-auto flex h-full max-w-[90rem] items-center justify-start px-6">
            <div className="w-full text-white md:w-[40%]">
              <h1 className="mb-2 sm:mb-6 text-3xl md:text-5xl font-light">About Us</h1>
              <p className="leading-7">
                Founded in 1986, Association of Korean-Canadian Scientists and
                Engineers (AKCSE) is a non-profit professional organization that
                promotes the exchange of scientific knowledge and fosters
                cooperation between Korean and Canadian communities. As the
                University of Toronto chapter, AKCSE UofT supports
                Korean-Canadian students in STEM through academic, professional,
                and cultural initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing mx-auto flex w-[100vw] flex-col items-center justify-center px-6">
        {/* 오른쪽: 비전 설명 */}
        <div className="flex max-w-xl flex-col text-center">
          <h2 className="mb-2 sm:mb-6 text-3xl md:text-5xl font-light">Our Vision</h2>
          <p className="mb-4 leading-7">
            At AKCSE UofT, we envision a community where Korean-Canadian students in STEM feel seen, supported,
            and inspired.
          </p>
          <p className="mb-4 leading-7">
            We strive to create a space where academic ambition and cultural identity grow side by
            side. Through mentorship, skill-building, and peer support, we help students navigate their unique journeys. We believe that
            true growth happens not only in classrooms, but also in
            collaboration, curiosity, and courage.
          </p>
          <p className="mb-4 leading-7">
            We are committed to building bridges
            <br />
            —between disciplines, cultures, and generations. By empowering individuals, we strengthen our collective voice and presence in STEM.
          </p>
          <p className="mb-4 leading-7">
            Together, we’re shaping a future where knowledge and connection lead
            the way.
          </p>
        </div>
        <div className="mx-auto mt-20 flex max-w-7xl flex-col gap-10 md:flex-row items-center md:justify-center">
          <img
            src="/images/about-akcse.jpg"
            alt="AKCSE UofT"
            className="w-[90%] object-cover shadow-md md:w-1/3"
          />
          <img
            src="/images/about-coffeechat.jpg"
            alt="Coffee Chat"
            className="w-[90%] object-cover shadow-md md:w-1/3"
          />
        </div>
      </section>
    </main>
  );
}

