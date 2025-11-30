import type { Metadata } from "next";
import { supabase } from "@/lib/supabaseClient";

export const metadata: Metadata = {
  title: "Members",
  robots: {
    index: false,
    follow: false,
  },
};

type Member = {
  name: string;
  role: string;
  grade: string;
  major: string;
  image: string;
};

type Section = {
  title: string;
  members: Member[];
};

export default async function MembersPage() {
  // const titles = [
  //   "Presidency",
  //   "Marketing",
  //   "Finance",
  //   "Educational Events",
  //   "Social Events",
  //   "Programming",
  //   "Research & Literature",
  // ];

  // const sections: Section[] = titles.map((t) => ({
  //   title: t,
  //   members: [],
  // }));

  // const { data, error } = await supabase
  //   .from("members")
  //   .select()
  //   .order("name", { ascending: true });

  // console.log(data);

  // if (error) {
  //   return (
  //     <section className="wrap section-spacing">
  //       <p>{error.message}</p>
  //     </section>
  //   );
  // }

  // for (const m of data) {
  //   const section = sections.find((s) => s.title == m.title);
  //   if (section) {
  //     section.members.push({
  //       name: m.name,
  //       role: m.role,
  //       grade: m.grade,
  //       major: m.major,
  //       image: m.image,
  //     });
  //   }
  // }

  // uncomment above and delete sections below after populating the database
  const sections = [
    {
      title: "Presidency",
      members: [
        {
          name: "Sumin Lee",
          role: "President",
          grade: "4th year",
          major: "Major in Mathematics & Statistics",
          image: "/images/sumin_lee.png",
        },
        {
          name: "Eric Lee",
          role: "Vice President",
          grade: "3rd year",
          major: "Major in Economics & Mathematics",
          image: "/images/sanghun_lee.jpeg",
        },
        {
          name: "Paul Im",
          role: "Vice President",
          grade: "3rd year",
          major: "Specialist in Pharmacology & Biomedical Toxicology",
          image: "/images/hyunwook_im.jpg",
        },
      ],
    },
    {
      title: "Marketing",
      members: [
        {
          name: "Ryan Baek",
          role: "Director",
          grade: "4th year",
          major: "Biological Physics speacialist - Advanced Physics stream",
          image: "/images/seungju_ryan_song_baek.jpeg",
        },
        {
          name: "Jian Huh",
          role: "Director",
          grade: "Gap year",
          major: "Specialist in Architectural Studies",
          image: "/images/jian_huh.jpg",
        },
        {
          name: "Sarah Park",
          role: "Executive Member",
          grade: "1st year",
          major: "Major not claimed yet",
          image: "/images/suehyun_park.jpg",
        },
        {
          name: "Jenny Kim",
          role: "Executive Member",
          grade: "2nd year",
          major:
            "Major in Health and Disease & Animal Physiology, Minor in Statistics",
          image: "/images/jenny_kim.jpeg",
        },
      ],
    },
    {
      title: "Finance",
      members: [
        {
          name: "Yoon Park",
          role: "Director",
          grade: "4th year",
          major: "Major in Mathematics & Statistics",
          image: "/images/yunseo_park.jpg",
        },
        {
          name: "Hanseo Park",
          role: "Director",
          grade: "3rd year",
          major: "Major in Mathematics ",
          image: "/images/kevin_park.png",
        },
        {
          name: "Jinwoo Choi",
          role: "Executive Member",
          grade: "3rd year",
          major: "Major in Mathematics & Drama",
          image: "/images/jinwoo_choi.png",
        },
        {
          name: "Daeun Lee",
          role: "Executive Member",
          grade: "4th year",
          major:
            "Major in Human Geography, Minor in Environmentel Geography, East Asain Studies",
          image: "/images/daeun_lee.jpeg",
        },
        {
          name: "Yerin Lee",
          role: "Executive Member",
          grade: "2nd year",
          major: "Major in Chemical Engineering",
          image: "/images/yerin_lee.jpg",
        },
      ],
    },
    {
      title: "Educational Events",
      members: [
        {
          name: "Sylvia Park",
          role: "Director",
          grade: "3rd year",
          major:
            "Major in Global Health & French Language, French Linguistics, minor in Immunology",
          image: "/images/hayeon_park.jpg",
        },
        {
          name: "Huiwon Shin",
          role: "Director",
          grade: "3rd year",
          major: "Major in Pharmacology, Minor in Immunology & Physiology",
          image: "/images/huiwon_shin.jpg",
        },
        {
          name: "Chaewon Jin",
          role: "Executive Member",
          grade: "3rd year",
          major: "Major in Life Sciences",
          image: "/images/chaewon_jin.jpg",
        },
        {
          name: "Aimie Kang",
          role: "Executive Member",
          grade: "3rd year",
          major:
            "Major in Global Health & Bioethics, Minor in Environmental Ethics",
          image: "/images/aimie_kang.jpg",
        },
        {
          name: "Heejin Kim",
          role: "Executive Member",
          grade: "3rd year",
          major:
            "Major in Biomedical Toxicology & Physiology, Minor in Immunology",
          image: "/images/heejin_kim.jpg",
        },
        {
          name: "Min Kim",
          role: "Executive Member",
          grade: "2nd year",
          major: "Specialist in physics, Minor in Mathematics",
          image: "/images/minho_kim.jpg",
        },
      ],
    },
    {
      title: "Social Events",
      members: [
        {
          name: "Ashely Chang",
          role: "Director",
          grade: "3rd year",
          major: "Major in Human Biology, Minor in Immunology & Physiology",
          image: "/images/dachung_chang.jpg",
        },
        {
          name: "Jiyu Chae",
          role: "Director",
          grade: "4th year",
          major: "Major in Pharmacology & Cell and Molecular Biology",
          image: "/images/jiyu_chae.jpg",
        },
        {
          name: "Jung Min Son",
          role: "Executive Member",
          grade: "2nd year",
          major:
            "Major in Quantitative Biology, Minor in Mathematics & Applied Data Science",
          image: "/images/jung_min_son.jpg",
        },
        {
          name: "Rian Hyeonjin Jeong",
          role: "Executive Member",
          grade: "2nd year",
          major: "Major in Management & Accounting ",
          image: "/images/hyunjin_jeong.jpg",
        },
        {
          name: "Daniel Yoo",
          role: "Executive Member",
          grade: "3rd year",
          major: "Major in Mechanical Engineering",
          image: "/images/jongsang_yoo.jpeg",
        },
      ],
    },
    {
      title: "Programming",
      members: [
        {
          name: "Yujin Kim",
          role: "Director",
          grade: "3rd year",
          major: "Major in Computer Science & Statistics",
          image: "/images/yujin_kim.jpeg",
        },
        {
          name: "Daniel Kim",
          role: "Executive Member",
          grade: "2nd year",
          major:
            "Specialist in Mathematics & Its Applications (Probability/Statistics), Minor in Applied Data Science",
          image: "/images/euichan_kim.jpeg",
        },
        {
          name: "Lucy Lee",
          role: "Executive Member",
          grade: "2nd year",
          major:
            "Major in Mathematics & New Media Studies, Minor in Statistics",
          image: "/images/siyoung_lee.jpg",
        },
      ],
    },
    {
      title: "Research & Literature",
      members: [
        {
          name: "Yoon Kang",
          role: "Director",
          grade: "4th year",
          major: "Major in Physiology and Health & Disease",
          image: "/images/yoonjong_kang.jpg",
        },
        {
          name: "Ellie Jung",
          role: "Director",
          grade: "Gap term",
          major: "Major in Industrial Engineering",
          image: "/images/ellie_jung.jpeg",
        },
        {
          name: "Christine Seo",
          role: "(Life Science) Executive Member",
          grade: "3rd year",
          major:
            "Major in Neuroscience & Nutritional Science, Minor in Immunology ",
          image: "/images/suyeon_seo.png",
        },
        {
          name: "Lucas Yoon",
          role: "(Tech) Executive Member",
          grade: "2nd year",
          major: "Major in Mathematics & Statistics",
          image: "/images/junseo_yoon.jpg",
        },
        {
          name: "David Shin",
          role: "(Tech) Executive Member",
          grade: "2nd year",
          major:
            "Specialist in Mathematics & Its applications (Probability/Statistics), Minor in Statistics",
          image: "/images/seungmin_shin.jpg",
        },
      ],
    },
  ];

  const MemberCard = ({ member }: { member: any }) => (
    <div className="w-60 bg-white p-4 text-center shadow-md">
      {member.image && (
        <img
          src={member.image}
          alt={`${member.name}'s profile`}
          className="mx-auto mb-2 h-55 w-45 object-cover"
        />
      )}
      <p className="mb-0.5 text-lg font-medium">{member.name}</p>
      <p className="mb-0.5 text-sm text-[var(--subtitle)]">{member.role}</p>
      <p className="mb-0.5 text-sm text-[var(--subtitle)]">{member.grade}</p>
      <p className="mb-0.5 text-sm text-[var(--subtitle)]">{member.major}</p>
    </div>
  );

  return (
    <main className="bg-white">
      <section className="px-6 pt-35 pb-10 text-center md:px-20">
        <h1 className="mt-20 mb-2 text-3xl font-light text-black sm:mb-6 md:text-5xl">
          Our Team
        </h1>
        <p className="mx-auto max-w-5xl px-6 text-black">
          AKCSE UofT is run by passionate student leaders committed to
          supporting the academic, professional, and personal growth of
          Korean-Canadian students in STEM.
        </p>
      </section>

      <div className="mb-14 space-y-24 px-6 py-16 md:mb-22 md:px-20">
        {sections.map((section) => {
          const leaders = section.members.filter(
            (m) => m.role === "President" || m.role === "Director",
          );
          const executives = section.members.filter(
            (m) => m.role !== "President" && m.role !== "Director",
          );

          return (
            <div
              key={section.title}
              className="mx-auto max-w-6xl space-y-8 bg-gray-100 p-8 text-center"
            >
              <h2 className="mb-6 text-center text-2xl font-light sm:text-3xl sm:font-normal">
                <span className="relative inline-block">
                  <span className="absolute inset-0 -z-10 h-full w-full bg-blue-200" />
                  {section.title}
                </span>
              </h2>

              {/* Leaders */}
              <div className="flex flex-wrap justify-center gap-6">
                {leaders.map((member, idx) => (
                  <MemberCard key={idx} member={member} />
                ))}
              </div>

              {/* Executive */}
              <div className="flex flex-wrap justify-center gap-6">
                {executives.map((member, idx) => (
                  <MemberCard key={idx} member={member} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
