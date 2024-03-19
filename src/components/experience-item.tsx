import { TExperience } from "@/constants/Experience";
import React from "react";

type Props = {
  experience: TExperience;
};

const ExperienceItem = ({ experience }: Props) => {
  const { time, position, organization, details } = experience;
  return (
    <div className="my-6">
      <div className="flex justify-between">
        <h1 className="text-lg">
          <span className="font-bold text-accent-foreground">{position}</span>{" "}
          at{" "}
          <span className="font-bold text-accent-foreground">
            {organization}
          </span>
        </h1>
        <h3 className="text-sm font-medium">{time}</h3>
      </div>
      <div className="pl-5">
        <ul className="list-outside list-disc space-y-2">
          {details.map((detail) => {
            return <li>{detail}.</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
