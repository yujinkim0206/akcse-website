import type { Metadata } from "next";
import { supabase } from "@/lib/supabaseClient";

export const metadata: Metadata = {
  title: "Members",
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
  const titles = [
    "Presidency",
    "Marketing",
    "Finance",
    "Educational Events",
    "Social Events",
    "Programming",
    "Research & Literature (Life Science)",
    "Research & Literature (Tech)",
  ];
  
  const sections: Section[] = titles.map((t) => ({ title: t, members: [] }));
  
  const { data, error } = await supabase.from("members").select().order("name", { ascending: true });
  if (error) {
    return (
      <section className="wrap section-spacing">
        <p>{error.message}</p>
      </section>
    );
  }
  for (const m of data) {
    const section = sections.find((s) => s.title === m.title);
    if (section) {
      section.members.push({
        name: m.name,
        role: m.role,
        grade: m.grade,
        major: m.major,
        image: m.image,
      });
    }
  }

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
          // 섹션 내 역할 구분
          const isIntern = (m: any) =>
            (m.role ?? "").toLowerCase().includes("intern");
          const isLeader = (m: any) =>
            m.role === "President" || m.role === "Director";

          const leaders = section.members.filter(isLeader);
          const interns = section.members.filter(isIntern);
          const executives = section.members.filter(
            (m) => !isLeader(m) && !isIntern(m),
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
              {leaders.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6">
                  {leaders.map((member, idx) => (
                    <MemberCard key={`L-${idx}`} member={member} />
                  ))}
                </div>
              )}

              {/* Executives */}
              {executives.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6">
                  {executives.map((member, idx) => (
                    <MemberCard key={`E-${idx}`} member={member} />
                  ))}
                </div>
              )}

              {/* Interns */}
              {interns.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6">
                  {interns.map((member, idx) => (
                    <MemberCard key={`I-${idx}`} member={member} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
