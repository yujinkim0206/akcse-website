export default function MembersPage() {
  const sections = [
    {
      title: "Presidency",
      members: [
        { name: "Sumin Lee", role: "President", grade: "4th year", major: "Major in Mathematics & Statistics", image: "/images/회장단_이수민.png" },
        { name: "Eric Lee", role: "Vice President", grade: "3rd year", major: "Major in Economics & Mathematics", image: "/images/회장단_이상헌.jpeg" },
        { name: "Paul Im", role: "Vice President", grade: "3rd year", major: "Specialist in Pharmacology & Biomedical Toxicology", image: "/images/회장단_임현욱.jpg" },
      ],
    },
    {
      title: "Marketing",
      members: [
        { name: "Ryan Baek", role: "Director", grade: "4th year", major: "Biological Physics speacialist - Advanced Physics stream", image: "/images/마케팅_백승주.jpeg" },
        { name: "Jian Huh", role: "Director", grade: "Gap year", major: "Specialist in Architectural Studies", image: "/images/마케팅_허지안.jpg" },
        { name: "Sarah Park", role: "Executive Member", grade: "1st year", major: "Major not claimed yet", image: "/images/마케팅_박수현.jpg" },
        { name: "Jenny Kim", role: "Executive Member", grade: "2nd year", major: "Major in Health and Disease & Animal Physiology, Minor in Statistics", image: "/images/마케팅_김제니.jpeg" },
      ],
    },
    {
      title: "Finance",
      members: [
        { name: "Yoon Park", role: "Director", grade: "4th year", major: "Major in Mathematics & Statistics", image: "/images/파이낸스_박윤서.jpg" },
        { name: "Hanseo Park", role: "Director", grade: "3rd year", major: "Major in Mathematics ", image: "/images/파이낸스_박한서.png" },
        { name: "Jinwoo Choi", role: "Executive Member", grade: "3rd year", major: "Major in Mathematics & Drama", image: "/images/회계_최진우.png"},
        { name: "Daeun Lee", role: "Executive Member", grade: "4th year", major: "Major in Human Geography, Minor in Environmentel Geography, East Asain Studies", image: "/images/파이낸스_이다은.jpeg" },
        { name: "Yerin Lee", role: "Executive Member", grade: "2nd year", major: "Major in Chemical Engineering", image: "/images/파이낸스_이예린.jpg"  },
      ],
    },
    {
      title: "Educational Events",
      members: [
        { name: "Sylvia Park", role: "Director", grade: "3rd year", major: "Major in Global Health & French Language, French Linguistics, minor in Immunology", image: "/images/에듀이벤트_박하연.jpg" },
        { name: "Huiwon Shin", role: "Director", grade: "3rd year", major: "Major in Pharmacology, Minor in Immunology & Physiology", image: "/images/에듀이벤트_신희원.jpg" },
        { name: "Chaewon Jin", role: "Executive Member", grade: "3rd year", major: "Major in Life Sciences", image: "/images/에듀이벤트_진채원.jpg"},
        { name: "Aimie Kang", role: "Executive Member", grade: "3rd year", major: "Major in Global Health & Bioethics, Minor in Environmental Ethics", image: "/images/에듀이벤트_강에이미.jpg" },
        { name: "Heejin Kim", role: "Executive Member", grade: "3rd year", major: "Major in Biomedical Toxicology & Physiology, Minor in Immunology", image: "/images/에듀이벤트_김희진.jpg" },
        { name: "Min Kim", role: "Executive Member", grade: "2nd year", major: "Specialist in physics, Minor in Mathematics", image: "/images/에듀이벤트_김민호.jpg" }
      ],
    },
    {
      title: "Social Events",
      members: [
        { name: "Ashely Chang", role: "Director", grade: "3rd year", major: "Major in Human Biology, Minor in Immunology & Physiology", image: "/images/소셜이벤트_장다정.jpg" },
        { name: "Jiyu Chae", role: "Director", grade: "4th year", major: "Major in Pharmacology & Cell and Molecular Biology", image: "/images/소셜이벤트_채지유.jpg"  },
        { name: "Jung Min Son", role: "Executive Member", grade: "2nd year", major: "Major in Quantitative Biology, Minor in Mathematics & Applied Data Science", image: "/images/소셜이벤트_손정민.jpg"  },
        { name: "Rian Hyeonjin Jeong", role: "Executive Member", grade: "2nd year", major: "Major in Management & Accounting ", image: "/images/소셜이벤트_정현진.jpg"  },
        { name: "Daniel Yoo", role: "Executive Member", grade: "3rd year", major: "Major in Mechanical Engineering", image: "/images/소셜이벤트_유종상.jpeg"  },
      ],
    },
    {
      title: "Programming",
      members: [
        { name: "Yujin Kim", role: "Director", grade: "3rd year", major: "Major in Computer Science & Statistics", image: "/images/프로그래밍_김유진.jpeg"  },
        { name: "Daniel Kim", role: "Executive Member", grade: "2nd year", major: "Specialist in Mathematics & Its Applications (Probability/Statistics), Minor in Applied Data Science", image: "/images/프로그래밍_김의찬.jpeg" },
        { name: "Lucy Lee", role: "Executive Member", grade: "2nd year", major: "Major in Mathematics & New Media Studies, Minor in Statistics", image: "/images/프로그래밍_이시영.jpg" },
      ],
    },
    {
      title: "Research & Literature",
      members: [
        { name: "Yoon Kang", role: "Director", grade: "4th year", major: "Major in Physiology and Health & Disease", image: "/images/리서치_강윤종.jpg"  },
        { name: "Ellie Jung", role: "Director", grade: "Gap term", major: "Major in Industrial Engineering", image: "/images/리서치_정여진.jpeg" },
        { name: "Christine Seo", role: "(Life Science) Executive Member", grade: "3rd year", major: "Major in Neuroscience & Nutritional Science, Minor in Immunology ", image: "/images/리서치_서수연.png" },
        { name: "Lucas Yoon", role: "(Tech) Executive Member", grade: "2nd year", major: "Major in Mathematics & Statistics", image: "/images/리서치_윤준서.jpg"  },
        { name: "David Shin", role: "(Tech) Executive Member", grade: "2nd year", major: "Specialist in Mathematics & Its applications (Probability/Statistics), Minor in Statistics", image: "/images/리서치_신승민.jpg"  },
      ],
    },
  ];

  const MemberCard = ( { member }: { member: any }) => (
    <div className="w-60 bg-white p-4 shadow-md text-center">
      {member.image && (
        <img
          src={member.image}
          alt={`${member.name}'s profile`}
          className="w-45 h-55 object-cover mx-auto mb-2"
        />
      )}
      <p className="text-lg font-medium mb-0.5">{member.name}</p>
      <p className="text-sm text-[var(--subtitle)] mb-0.5">{member.role}</p>
      <p className="text-sm text-[var(--subtitle)] mb-0.5">{member.grade}</p>
      <p className="text-sm text-[var(--subtitle)] mb-0.5">{member.major}</p>

    </div>
  );

  return (
    <main className="bg-white">
      <section className="pt-35 pb-10 text-center px-6 md:px-20">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-6 text-black mt-20">Our Team</h1>
          <p className="text-black px-6 max-w-5xl mx-auto">
            AKCSE UofT is run by passionate student leaders committed to supporting the
            academic, professional, and personal growth of Korean-Canadian students in STEM.
          </p>
      </section>

      <div className="px-6 md:px-20 py-16 mb-14 md:mb-22 space-y-24">
        {sections.map((section) => {
          const leaders = section.members.filter((m) => m.role === "President" || m.role === "Director");
          const executives = section.members.filter((m) => m.role !== "President" && m.role !== "Director");
          
          return (
            <div key={section.title} className="max-w-6xl mx-auto text-center space-y-8 bg-gray-100 p-8">
              <h2 className="text-3xl mb-6 text-center">
                <span className="relative inline-block">
                <span className="absolute inset-0 bg-blue-200 -z-10 w-full h-full" />
                {section.title}
                </span>
              </h2>

              {/* Leaders */}
              <div className="flex justify-center flex-wrap gap-6">
                {leaders.map((member, idx) => (
                  <MemberCard key={idx} member={member} />
                ))}
              </div>


              {/* Executive */}
              <div className="flex justify-center flex-wrap gap-6">
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
