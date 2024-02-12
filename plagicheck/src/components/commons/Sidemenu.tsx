import React, { useState } from "react";
import styled from "styled-components";
import { Button, SecondaryButton } from "./Button";
import { MdOutlineDashboard } from "react-icons/md";
import { LuCopyCheck } from "react-icons/lu";
import { GoDatabase } from "react-icons/go";
import { PiUsersThree } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";
// import { MdSchedule } from "react-icons/md";
// import { LuHistory } from "react-icons/lu";
// import { SlLogout } from "react-icons/sl";

const menuItems = [
  {
    label: "Dashboard",
    icon: <MdOutlineDashboard />,
    key: "dashboard",
  },
  {
    label: "Plaigiarism checker",
    icon: <LuCopyCheck />,
    key: "plagiarism-checker",
  },
  {
    label: "Academic Division",
    icon: <HiOutlineAcademicCap />,
    key: "academic-division",
  },
  {
    label: "Archive",
    icon: <GoDatabase />,
    key: "archive",
  },
  {
    label: "Manage Users",
    icon: <PiUsersThree />,
    key: "manage-users",
  },
  {
    label: "Account Settings",
    icon: <IoSettingsOutline />,
    key: "account-settings",
  },
];

const Sidemenu = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const handleTabSwitch = (itemKey: string) => {
    setActiveTab(itemKey);
    if (itemKey === "dashboard") {
      navigate("/dashboard");
    } else {
      navigate(itemKey);
    }
  };

  return (
    <MenuBar>
      {menuItems.map((menuItem, index) => {
        return (
          <React.Fragment key={index}>
            {menuItem.key === activeTab ? (
              <Button className="w-full !justify-start">
                {menuItem.icon}
                {menuItem.label}
              </Button>
            ) : (
              <SecondaryButton
                variant="plain"
                className="w-full !justify-start"
                onClick={() => handleTabSwitch(menuItem.key)}
              >
                {menuItem.icon}
                {menuItem.label}
              </SecondaryButton>
            )}
          </React.Fragment>
        );
      })}
    </MenuBar>
  );
};

export default Sidemenu;

const MenuBar = styled.div`
  /* background: blue; */
  width: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
