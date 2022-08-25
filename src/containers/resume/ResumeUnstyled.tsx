import { observer } from "mobx-react";
import * as React from "react";
import resume_data from "./resume_data.json";
// Standard ISO A4 paper dimensions are: 210mm x 297mm. 8.27" x 11.69"
// Create an pdf convertable version of the resume.
function hexToString(str: string) {
  if (!/^(-0x|0x)?[0-9a-f]*$/i.test(str)) {
    return str;
  } else {
    const stringSplit = [];
    for (let i = 0; i < str.length; i += 2) {
      const char = str.substring(i, i + 2);
      const letter = String.fromCharCode(parseInt(char, 16));
      stringSplit.push(letter);
    }
    return stringSplit.join("");
  }
}

function SkillsSection({ data, title }: { data: string[]; title: string }) {
  return (
    <div className="w-max flex flex-col mt-3 min-w-[270px] sm:min-w-fit">
      <h2 className="font-normal text-base">{title}</h2>
      {data.map((skill: string, i: number) => (
        <div key={`skillx_${i}`} className="flex flex-row justify-between">
          <div className="text-sm pr-2">{skill[0]}</div>
          <div className="text-sm">{skill[1]} yrs </div>
        </div>
      ))}
    </div>
  );
}

type CareerSumProps = {
  role: string;
  duration: string;
  company: string;
  role_description: string[];
  skills: string[];
};
function CareerSummary({ data }: { data: CareerSumProps }) {
  return (
    <section className="col-start-1 col-end-3 grid grid-cols-2 mb-5">
      <div className="col-start-1 col-end-3 sm:col-end-3 row-start-1 row-end-2 font-semibold">
        {data.role}
      </div>
      <div className="col-start-1 col-end-3 row-start-1 row-end-2 text-base md:justify-self-end justify-self-start mt-5 md:mt-0">
        {data.duration}
      </div>
      <div className="col-start-1 col-end-3 text-lg tracking-wider">
        {data.company}
      </div>
      <div className="col-start-1 col-end-3  text-base mb-2">
        {data.role_description.join(". ")}
      </div>
      <div className="col-start-1 col-end-3 text-sm font-normal break-words">
        {data.skills.join(" 🔹️ ")}
      </div>
    </section>
  );
}

function ContactSection({
  data,
  title,
}: {
  data: {
    name: string;
    phone: string;
    email: string[];
    github_profile: string;
    location: string;
  };
  title: string;
}) {
  return (
    <section className="flex flex-col col-start-1 col-end-3 mb-2">
      <h1 className="font-normal text-base mb-2 sm:mb-0">{title}</h1>
      <div className="flex flex-col self-stretch sm:self-center print:self-center sm:-mt-6 print:-mt-6">
        <span className="">{data.phone}</span>
        {data.email.map((email: string, i: number) => (
          <span className="" key={`email_${i}`}>
            {email}
          </span>
        ))}
        <span className="">{data.github_profile}</span>
        <span className="">{data.location}</span>
      </div>
    </section>
  );
}

const ResumeUnstyled = observer(function ResumeUnstyled() {
  const stringified_resume = JSON.parse(JSON.stringify(resume_data));
  const title_one = hexToString(stringified_resume[0].key);
  const title_two = hexToString(stringified_resume[1].key);
  // const title_three = hexToString(stringified_resume[2].key);
  const title_four = hexToString(stringified_resume[3].key);
  const title_five = hexToString(stringified_resume[4].key);
  const title_six = hexToString(stringified_resume[5].key);
  // print:px-2 print:col-start-1 print:col-end-5
  // max-w-[21cm] max-h-[29.7cm]
  return (
    <main className="relative flex flex-col bg-slate-100 print:bg-transparent print:-mt-5">
      <div
        className="relative self-center grid grid-cols-[0.5fr_1fr] gap-0 tracking-wide 
                                  print:bg-transparent bg-white text-slate-900 border-slate-200 border-2 
                                  print:border-0  max-w-[21cm] pb-10 pt-5 px-7"
      >
        <div className="font-normal text-lg pb-2 col-start-1 col-end-3 grid grid-cols-[0.6fr_1fr]">
          <div className="font-normal text-lg">Resume</div>
          <div>{stringified_resume[0].name}</div>
        </div>
        <ContactSection data={stringified_resume[0]} title={title_one} />
        <h1 className="font-normal text-lg col-start-1 col-end-3 mb-1">
          {title_two}
        </h1>
        <div className="font-normal text-base col-start-1 col-end-3">
          {stringified_resume[1].content}
        </div>
        <section className="col-start-1 col-end-3 flex flex-row content-center justify-between flex-wrap">
          <SkillsSection
            title="Languages"
            data={stringified_resume[2].current}
          />
          <SkillsSection
            title="Frameworks"
            data={stringified_resume[2].frameworks}
          />
          <SkillsSection
            title="Operating Systems"
            data={stringified_resume[2].operating_systems}
          />
          <SkillsSection
            title="Virtualization"
            data={stringified_resume[2].virtualization}
          />
        </section>
        <h1 className="font-normal text-lg  col-start-1 col-end-3 mt-7 mb-3">
          {title_four}
        </h1>
        {stringified_resume[3].content.map((data: CareerSumProps) => (
          <CareerSummary data={data} />
        ))}
        <h1 className="uppercase tracking-widest font-normal  text-sm col-start-1 col-end-3 pb-1">
          {title_five}
        </h1>
        <div className="col-start-1 col-end-3 pb-3 flex flex-col flex-1">
          {stringified_resume[4].content.map((content: string, i: number) => (
            <div key={`content_${i}`} className="pb-1 sm:pb-0">
              {content}
            </div>
          ))}
        </div>
        <h1 className="uppercase tracking-widest font-normal  text-sm col-start-1 col-end-3 pb-1">
          {title_six}
        </h1>
        <div className="col-start-1 col-end-3 text-base">
          {stringified_resume[5].content.map((sparetime: string, i: number) => (
            <span key={`res${i}`}>{sparetime}</span>
          ))}
        </div>
      </div>
    </main>
  );
});

export default ResumeUnstyled;
