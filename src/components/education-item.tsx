import { TEducation } from "@/constants/Education";
import React from "react";

type Props = {
  education: TEducation;
};

const EducationItem = ({ education }: Props) => {
  const { date, subject, univeristy } = education;
  return (
    <div className="my-2">
      <h3 className="text-sm font-medium">{date}</h3>
      <h1 className="text-lg">
        <span className="font-bold text-accent-foreground">{subject}</span> from{" "}
        <span className="font-bold text-accent-foreground">{univeristy}</span>
      </h1>
    </div>
  );
};

export default EducationItem;
