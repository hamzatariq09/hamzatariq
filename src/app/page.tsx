import ThemeSwitchButton from "@/components/buttons/theme-switch";
import {
  Briefcase,
  Linkedin,
  LucideLocate,
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
          <p className="text-justify text-base">
            Welcome to my portfolio website! I am a dynamic professional with a
            Master&apos;s in Computer Engineering and a diverse background
            spanning business development, data analytics, and software
            development. With expertise in designing and implementing innovative
            data solutions, I have a proven track record of driving impactful
            results across various industries. From streamlining data pipelines
            to developing interactive dashboards, I excel in solving complex
            challenges and delivering actionable insights. Through my projects,
            including real-time data analysis and machine learning applications,
            I showcase my passion for innovation and commitment to excellence.
            Explore my portfolio to learn more about my skills, experiences, and
            achievements, and feel free to reach out for collaboration
            opportunities.
          </p>

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

              <div className="my-2">
                <h3 className="text-sm font-medium">Jul 2023 - Mar 2023</h3>
                <h1 className="text-lg">
                  <span className="font-bold text-accent-foreground">
                    Business Analyst
                  </span>{" "}
                  at{" "}
                  <span className="font-bold text-accent-foreground">
                    Interlink Engineering
                  </span>
                </h1>
                <div className="pl-5">
                  <ul className="list-outside list-disc space-y-2">
                    <li className="">
                      Designed a sales performance dashboard using Power BI,
                      reducing report development time by 45%.
                    </li>
                    <li className="">
                      Collaborated with the senior data analyst to develop
                      internal data warehouses for customer data analysis,
                      identified potential clients, and uncovered valuable
                      patterns and trends for strategic decision-making.
                    </li>
                    <li className="">
                      Conducted in-depth data analysis to analyze sales
                      forecasting, identifying trends pivotal for strategic
                      decision-making, resulting in a 6% increase in sales.
                    </li>
                    <li className="">
                      Conducted in-depth customer meetings and developed a root
                      cause report to address problems with customer
                      conversions, successfully revealing insights that boosted
                      conversions by 7%.
                    </li>
                    <li className="">
                      Developed a self-service dashboard for the sales team,
                      resulting in a 32% increase in data-driven
                      decision-making.
                    </li>
                    <li className="">
                      Collaborated with cross-functional teams to identify data
                      sources and streamline data collection, ensuring data
                      quality, integrity, and accuracy, resulting in a 28%
                      reduction in report development time.
                    </li>
                  </ul>
                </div>
              </div>
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

              <div className="my-2">
                <h3 className="text-sm font-semibold ">Coding Language</h3>
                <div className="flex flex-wrap gap-2 py-2">
                  <div className="rounded-lg bg-secondary px-4 py-1  text-xs font-semibold text-secondary-foreground">
                    Python
                  </div>
                  <div className="rounded-lg bg-secondary px-4 py-1  text-xs font-semibold text-secondary-foreground">
                    SQL
                  </div>
                  <div className="rounded-lg bg-secondary px-4 py-1  text-xs font-semibold text-secondary-foreground">
                    R
                  </div>
                  <div className="rounded-lg bg-secondary px-4 py-1 text-xs font-semibold  text-secondary-foreground">
                    MATLAB
                  </div>
                  <div className="rounded-lg bg-secondary px-4 py-1 text-xs font-semibold  text-secondary-foreground">
                    C++
                  </div>
                  <div className="rounded-lg bg-secondary px-4 py-1 text-xs font-semibold  text-secondary-foreground">
                    C
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
};

export default Page;