import { TbUsers } from "react-icons/tb";
import { LiaUserSolid } from "react-icons/lia";
import { PiUsersThreeLight } from "react-icons/pi";

const Cards = () => {
  return (
    <div className="flex gap-[26px]">
      <div className="w-full h-[129px]  rounded-[8px] border-l-2 border-blue-500 shadow-md bg-gradient-to-r from-white to-white flex gap-4 pl-4 pt-4">
        <div className="bg-[#CCE1FF] w-[40px] h-[40px] flex items-center justify-center rounded-[50%]">
          <PiUsersThreeLight className="w-[24px] h-[24px]  text-[#0267FF]" />
        </div>
        <div>
          <p className="text-[23px] font-semibold text-[#333441] pb-4">
            Number of Lectures
          </p>
          <p className="text-[27px] text-gray-500 font-semibold">1,020</p>
        </div>
      </div>
      <div className="w-full h-[129px]  rounded-[8px] border-l-2 border-blue-500 shadow-md bg-gradient-to-r from-white to-white flex gap-4  pl-4 pt-4">
        <div className="bg-[#CCFACC] w-[40px] h-[40px] flex items-center justify-center rounded-[50%]">
          <TbUsers className="w-[24px] h-[24px] text-[#00E600]" />
        </div>
        <div>
          <p className="text-[23px] font-semibold text-[#333441] pb-4">
            Number of students
          </p>
          <p className="text-[27px]  text-gray-500 font-semibold ">1,020</p>
        </div>
      </div>
      <div className="w-full h-[129px]  rounded-[8px] border-l-2 border-blue-500 shadow-md bg-gradient-to-r from-white to-white flex gap-4 pl-4 pt-4">
        <div className="bg-[#FFEDCC] w-[40px] h-[40px] flex items-center justify-center rounded-[50%]">
          <LiaUserSolid className="w-[24px] h-[24px] text-[#FF0000]" />
        </div>
        <div>
          <p className="text-[23px] font-semibold text-[#333441] pb-4">
            Student submission
          </p>
          <p className="text-[27px]  text-gray-500 font-semibold">1,020</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
