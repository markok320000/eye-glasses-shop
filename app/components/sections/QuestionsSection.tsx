import React from "react";

import HowToReadSVG from "@/public/questionsSVGs/howTo.svg";
import PupilaryDistanceSVG from "@/public/questionsSVGs/pupillaryDistance.svg";
import FramesAndFaceShapesSVG from "@/public/questionsSVGs/frames.svg";
import HowToBuySVG from "@/public/questionsSVGs/howTo.svg";

interface Question {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  url: string;
}

const questions: Question[] = [
  {
    icon: HowToReadSVG,
    text: "How to Read a Prescription",
    url: "/",
  },
  {
    icon: PupilaryDistanceSVG,
    text: "Pupillary Distance",
    url: "/",
  },
  {
    icon: FramesAndFaceShapesSVG,
    text: "Frames & Face Shapes",
    url: "/",
  },
  {
    icon: HowToBuySVG,
    text: "How to Buy Glasses Online",
    url: "/",
  },
];

const QuestionsSection = () => {
  return (
    <div className="w-full bg-gray-100 py-10">
      <div className="flex flex-col items-center text-center gap-y-4 md:gap-y-8 ">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Have Glasses Questions?
          </h1>
        </div>
        <div className="w-4/5 md:1/2 text-sm font-semibold">
          <p>
            We’ve got answers. Learn how to find styles for your face sh ape
            while buying prescription glasses, understand you r prescription,
            and even measure your pupillary distance at hom e without an eye
            exam!
          </p>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex   overflow-x-auto overflow-hidden">
            {questions.map((question, index) => (
              <div key={index} className="flex flex-col items-center   ">
                <div className=" flex flex-col items-center gap-2  ">
                  <question.icon />
                  <div className="w-40 text-center text-sm hover:underline hover:text-yellow-800 ">
                    <a href={question.url}>{question.text}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsSection;
