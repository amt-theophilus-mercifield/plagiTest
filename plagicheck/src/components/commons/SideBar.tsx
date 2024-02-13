import logo from "./../../assets/plagicheck-logo.png";
import { MdOutlineDashboard } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdSchedule } from "react-icons/md";
import { LuCopyCheck } from "react-icons/lu";
import { GoDatabase } from "react-icons/go";
import { PiUsersThree } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { LuHistory } from "react-icons/lu";
import { SlLogout } from "react-icons/sl";
import Sidemenu from "./Sidemenu";

export const Sidebar = () => {
  return (
    <div className="bg-[#E9E9EA] h-screen border-r border-[#BCBCC0]">
      <div className="flex flex-col items-center">
        <div>
          <img src={logo} alt="" className="mt-10 mb-9 w-[220px] " />
        </div>
        <div>
          <Sidemenu />
        </div>
        {/* <div>
          <ul>
            <div className="flex items-center pb-4">
              <MdOutlineDashboard style={{ width: "24px", height: "24px" }} />
              <li className="px-2 ">Dashboard</li>
            </div>
            <div className="flex items-center pb-2">
              <LuCopyCheck style={{ width: "24px", height: "24px" }} />
              <li className="px-2"> Plagarism Checker</li>
            </div>
            <div className="pl-7">
              <div className="flex items-center pb-0.5">
                <CiSearch style={{ width: "16px", height: "16px" }} />
                <li className="text-[14px] px-1">Checker</li>
              </div>
              <div className="flex items-center pb-0.5">
                <MdSchedule style={{ width: "16px", height: "16px" }} />
                <li className="text-[14px] px-1">Schedules</li>
              </div>
              <div className="flex items-center pb-5">
                <LuHistory style={{ width: "16px", height: "16px" }} />
                <li className="text-[14px] px-1">History</li>{" "}
              </div>
            </div>
            <div className="flex items-center pb-5">
              <HiOutlineAcademicCap style={{ width: "24px", height: "24px" }} />
              <li className="px-2">Academic Divisions</li>
            </div>
            <div className="flex items-center pb-5">
              <GoDatabase style={{ width: "24px", height: "24px" }} />
              <li className="px-2">Archive</li>
            </div>
            <div className="flex items-center pb-5">
              <PiUsersThree style={{ width: "24px", height: "24px" }} />
              <li className="px-2">Manage Users</li>
            </div>
            <div className="flex items-center pb-[70px]">
              <IoSettingsOutline style={{ width: "24px", height: "24px" }} />
              <li className="px-2">Account settings</li>
            </div>
            <div className="flex items-center">
              <SlLogout />
              <li className="px-2  ">Log out</li>
            </div>
          </ul>
        </div> */}
      </div>
    </div>
  );
};
