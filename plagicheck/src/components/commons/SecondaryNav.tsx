import { SecondaryButton, Button } from "./Button";
import { TfiFilter } from "react-icons/tfi";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { useState } from "react"

const ManageStudents = () => {
  const [activeTab, setActiveTab] = useState("lectures");

  const handleTabClick = (tab: string) => {
    if (tab === "lectures" && activeTab !== "lectures") {
      setActiveTab("lectures");
    } else if (tab === "students" && activeTab !== "students") {
      setActiveTab("students");
    } else if (tab === activeTab) {
      setActiveTab("");
    }
  };

  return (
    <div>
      <div className=" h-[88px] border-b border-gray-300 py-[19px] px-[41px] bg-white">
        <div className="flex justify-between">
          <div className="tabs flex gap-2">
            <div
              className={`cursor-pointer  ${
                activeTab === "lectures"
                  ? "text-blue-500 bg-[#e9e9ea] border-b-2 border-blue-500"
                  : "text-black"
              } px-4 py-2`}
              onClick={() => handleTabClick("lectures")}
            >
              Lectures
            </div>
            <div
              className={`cursor-pointer ${
                activeTab === "students"
                  ? "text-blue-500 bg-[#e9e9ea] border-b-2 border-blue-500"
                  : "text-black"
              } px-4 py-2`}
              onClick={() => handleTabClick("students")}
            >
              Students
            </div>
          </div>
          <div className="flex gap-4">
            <SecondaryButton variant="plain">
              Filter by: All <TfiFilter />
            </SecondaryButton>
            <SecondaryButton variant="plain">
              Bulk upload <IoCloudUploadOutline />
            </SecondaryButton>
            <Button>
              Add Lecturer <MdAdd />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;
