export default function MembersPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-center">Our Members</h1>
      <p className="text-lg leading-relaxed text-center max-w-2xl mx-auto mt-4">
        Founded in 1986, the Association of Korean-Canadian Scientists and Engineers (AKCSE)
        supports the growth and development of Korean-Canadian professionals in STEM
        through academic, professional, and community initiatives.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {[
          'Marketing',
          'Social Events',
          'Educational Events',
          'Programming',
          'Research – Tech',
          'Research – Literature & Science Article',
        ].map((role) => (
          <div key={role} className="bg-gray-100 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold">{role}</h3>
            <p className="mt-2 text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
