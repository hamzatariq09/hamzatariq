import ThemeSwitchButton from "@/components/buttons/theme-switch";
import ExperienceItem from "@/components/experience-item";
import SkillsItem from "@/components/skills-item";
import Experience from "@/constants/Experience";
import Skills from "@/constants/Skills";
import Summary from "@/constants/Summary";
import {
  Briefcase,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  School,
  Wrench,
} from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <header className="flex items-center justify-end border-b-2 px-2 py-4">
        <ThemeSwitchButton />
      </header>

      <main className="">
        <section className="flex items-center  border-b px-4 py-4">
          <div className="w-2/3">
            <h1 className="text-3xl font-semibold">Hamza Tariq</h1>
            <h3 className="font-medium">
              Data Scientist & Data Visualization Specialist
            </h3>
          </div>
          <div className="flex w-1/3 items-center justify-center">
            <div className="h-32 w-32 overflow-hidden rounded-full">
              <Image
                alt="profile"
                src="/Hamza Tariq.jpg"
                className="h-full w-full object-cover object-top"
                width={100}
                height={100}
              />
            </div>
          </div>
        </section>

        <section className="space-y-1 p-4 px-5 font-sans">
          <h2 className="text-xs font-bold uppercase">Summary</h2>
          <p className="text-justify text-base">{Summary}</p>

          <div className="flex flex-col gap-2 py-2 text-sm font-bold">
            <div className="flex items-center gap-2">
              <MapPin className="w-[20px]" />
              <div>Toronto, Ontario, Canada</div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-[20px]" />
              <div>+1 (647) 5421080</div>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-[20px]" />
              <div>https://www.linkedin.com/in/i-hamza-tariq/</div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-[20px]" />
              <div>hamzatariq0909@gmail.com</div>
            </div>
          </div>
        </section>

        <div className="flex">
          <div>
            <section className="px-5 py-4">
              <div className="flex justify-between border-b-2 py-2">
                <h1>Experience</h1>
                <Briefcase />
              </div>

              {Experience.map((experience) => {
                return (
                  <ExperienceItem
                    experience={experience}
                    key={experience.time}
                  />
                );
              })}
            </section>

            <section className="px-5 py-4">
              <div className="flex justify-between border-b-2 py-2">
                <h1>Education</h1>
                <School />
              </div>

              <div className="my-2">
                <h3 className="text-sm font-medium">Dec 2023</h3>
                <h1 className="text-lg">
                  <span className="font-bold text-accent-foreground">
                    Master of Applied Science in Computer Engineering
                  </span>{" "}
                  from{" "}
                  <span className="font-bold text-accent-foreground">
                    Memorial University of Newfoundland, St. John&apos;s, NL
                  </span>
                </h1>
              </div>
            </section>
          </div>
          <aside>
            <section className="px-5 py-4">
              <div className="flex justify-between border-b-2 py-2">
                <h1>Skills</h1>
                <Wrench />
              </div>

              {Skills.map((skill) => {
                return <SkillsItem key={skill.title} {...skill} />;
              })}
            </section>
          </aside>
        </div>
      </main>
    </>
  );
};

export default Page;
