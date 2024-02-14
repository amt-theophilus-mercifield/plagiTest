import { TbUsers } from "react-icons/tb";
import { LiaUserSolid } from "react-icons/lia";
import { PiUsersThreeLight } from "react-icons/pi";

const cardLabels = [
  {
    icon: <PiUsersThreeLight />,
    title: "Number of Lectures",
    number: "1020",
    key: "lecturer",
    background: "#CCE1FF",
    text: "#0267FF",
  },
  {
    icon: <TbUsers />,
    title: "Number of Students",
    number: "1020",
    key: "student",
    background: "#CCFACC",
    text: "#00E600",
  },
  {
    icon: <LiaUserSolid />,
    title: "Student submission",
    number: "1020",
    key: "student-submission",
    background: "#FFEDCC",
    text: "#FF0000",
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-3 gap-[5%]">
      {cardLabels.map((cardLabels) => (
        <div className="w-[100%] h-[129px] rounded-[8px] border-l-2 border-blue-500 shadow-md bg-white flex gap-4 p-4">
          <div
            className={`min-w-[40px] min-h-[40px] w-10 h-10 flex items-center justify-center rounded-[50%] bg-[${cardLabels.background}] text-[${cardLabels.text}]`}
          >
            <div className={`!text-${cardLabels.background}`}>
              {cardLabels.icon}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-xl font-semibold text-[#333441]">
              {cardLabels.title}
            </div>
            <div className="text-2xl text-gray-500 font-semibold">
              {cardLabels.number}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
