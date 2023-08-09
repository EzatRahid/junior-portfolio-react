import React from "react";

const Skills = () => {
  return (
    <div className="p-[100px] mt-[150px]">
      <h1 className="text-center text-[32px] font-semibold">Skills</h1>
      <div className="gap-10 flex items-center justify-center my-10 hide">
        <div className="bg-[#f7f7f7ff] p-8 text-center">
          <h1 className="font-semibold text-[30px] mb-[16px]">Technical Skills</h1>
          <ul className="text-[18px]">
            <li className="pb-4">HTML</li>
            <li className="pb-4">CSS</li>
            <li className="pb-4">TAILWIND</li>
            <li className="pb-4">JAVASCRIPT</li>
            <li className="pb-4">REACT</li>
          </ul>
        </div>
        <div className="bg-[#f7f7f7ff] p-8 text-center h-[340px] w-[294px] hide">
          <h1 className="font-semibold text-[30px] mb-[16px]">Other Skills</h1>
          <ul className="text-[18px]">
            <li className="pb-4">Figma</li>
            <li className="pb-4">Git</li>
            <li className="pb-4">Vs Code</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
