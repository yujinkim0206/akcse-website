export default function MembersPage() {
  const sections = [
    {
      title: "Presidency",
      members: [
        { name: "Sumin Lee", role: "President", image: "/images/mon.png" },
        { name: "Eric Lee", role: "Vice President", image: "/images/회장단_이상헌.jpeg" },
        { name: "Paul Im", role: "Vice President", image: "/images/mon.png" },
      ],
    },
    {
      title: "Marketing",
      members: [
        { name: "Ryan Baek", role: "Director", image: "/images/마케팅_백승주.jpeg" },
        { name: "Jian Huh", role: "Director", image: "/images/mon.png" },
        { name: "Sarah Park", role: "Executive Member", image: "/images/마케팅_박수현.jpg" },
        { name: "Jenny Kim", role: "Executive Member", image: "/images/마케팅_김제니.jpeg" },
      ],
    },
    {
      title: "Finance",
      members: [
        { name: "Yoon Park", role: "Director", image: "/images/mon.png" },
        { name: "Hanseo Park", role: "Director", image: "/images/mon.png" },
        { name: "Jinwoo Choi", role: "Executive Member", image: "/images/mon.png"},
        { name: "Daeun Lee", role: "Executive Member", image: "/images/mon.png" },
        { name: "Yerin Lee", role: "Executive Member", image: "/images/파이낸스_이예린.jpg"  },
      ],
    },
    {
      title: "Educational Events",
      members: [
        { name: "Sylvia Park", role: "Director", image: "/images/에듀이벤트_박하연.jpg" },
        { name: "Huiwon Shin", role: "Director", image: "/images/에듀이벤트_신희원.jpg" },
        { name: "Chaewon Jin", role: "Executive Member", image: "/images/mon.png"},
        { name: "Aimie Kang", role: "Executive Member", image: "/images/에듀이벤트_강에이미.jpg" },
        { name: "Heejin Kim", role: "Executive Member", image: "/images/에듀이벤트_김희진.jpg" },
        { name: "Min Kim", role: "Executive Member", image: "/images/에듀이벤트_김민호.jpg" }
      ],
    },
    {
      title: "Social Events",
      members: [
        { name: "Ashely Chang", role: "Director", image: "/images/소셜이벤트_장다정.jpg" },
        { name: "Jiyu Chae", role: "Director", image: "/images/mon.png"  },
        { name: "Jung Min Son", role: "Executive Member", image: "/images/소셜이벤트_손정민.jpg"  },
        { name: "Rian Jeong", role: "Executive Member", image: "/images/소셜이벤트_정현진.jpg"  },
        { name: "Daniel Yoo", role: "Executive Member", image: "/images/소셜이벤트_유종상.jpeg"  },
      ],
    },
    {
      title: "Programming",
      members: [
        { name: "Yujin Kim", role: "Director", image: "/images/프로그래밍_김유진.jpeg"  },
        { name: "Daniel Kim", role: "Executive Member", image: "/images/mon.png" },
        { name: "Lucy Lee", role: "Executive Member", image: "/images/프로그래밍_이시영.jpg" },
      ],
    },
    {
      title: "Research & Literature",
      members: [
        { name: "Yoon Kang", role: "Director", image: "/images/mon.png"  },
        { name: "Ellie Jung", role: "Director", image: "/images/리서치_정여진.jpeg" },
        { name: "Christine Seo", role: "(Life Science) Executive Member",image: "/images/mon.png" },
        { name: "Lucas Yoon", role: "(Tech) Executive Member", image: "/images/리서치_윤준서.jpg"  },
        { name: "David Shin", role: "(Tech) Executive Member", image: "/images/리서치_신승민.jpg"  },
      ],
    },
  ];

  const MemberCard = ( { member }: { member: any }) => (
    <div className="w-60 bg-white p-4 shadow-sm hover:shadow-md transition text-center">
      {member.image && (
        <img
          src={member.image}
          alt={`${member.name}'s profile`}
          className="w-45 h-55 object-cover mx-auto mb-2"
        />
      )}
      <p className="font-bold text-lg">{member.name}</p>
      <p className="text-md text-gray-600">{member.role}</p>
    </div>
  );

  return (
    <main className="bg-white text-gray-800">
      <section className="bg-[#1E3765] pt-28 pb-20 text-center px-6 md:px-20">
          <h1 className="text-5xl font-extrabold text-white mt-20 mb-2">OUR TEAM</h1>
          <p className="text-white font-semibold text-lg px-20 max-w-5xl mx-auto">
            AKCSE UofT is run by passionate student leaders committed to supporting the
            academic, professional, and personal growth of Korean-Canadian students in STEM.
          </p>
      </section>

      <div className="px-6 md:px-20 py-16 space-y-24">
        {sections.map((section) => {
          const leaders = section.members.filter((m) => m.role === "President" || m.role === "Director");
          const executives = section.members.filter((m) => m.role !== "President" && m.role !== "Director");
          
          return (
            <div key={section.title} className="max-w-6xl mx-auto text-center space-y-8 bg-[#eef3fa] p-8 rounded-xl shadow-md">
              <h2 className="text-4xl font-semibold mb-6 text-center">
                <span className="relative inline-block">
                <span className="absolute inset-0 bg-blue-200 rounded-md -z-10 w-full h-full" />
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
