import React, { useState } from "react";
import styled from "styled-components";
import { Button, SecondaryButton } from "./Button";
import { MdOutlineDashboard } from "react-icons/md";
// import { CiSearch } from "react-icons/ci";
// import { MdSchedule } from "react-icons/md";
import { LuCopyCheck } from "react-icons/lu";
import { GoDatabase } from "react-icons/go";
import { PiUsersThree } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi2";
// import { LuHistory } from "react-icons/lu";
// import { SlLogout } from "react-icons/sl";

const menuItems = [
  {
    label: "Dashboard",
    icon: <MdOutlineDashboard />,
    isActive: true,
    onClick: "handleClick",
  },
  {
    label: "Plaigiarism checker",
    icon: <LuCopyCheck />,
    isActive: false,
    onClick: "handleClick",
  },
  {
    label: "Academic Division",
    icon: <HiOutlineAcademicCap />,
    isActive: false,
    onClick: "handleClick",
  },
  {
    label: "Archive",
    icon: <GoDatabase />,
    isActive: false,
    onClick: "handleClick",
  },
  {
    label: "Manage Users",
    icon: <PiUsersThree />,
    isActive: false,
    onClick: "handleClick",
  },
  {
    label: "Account Settings",
    icon: <IoSettingsOutline />,
    isActive: false,
    onClick: "handleClick",
  },
];

interface SidemenuProps {
  label: string;
  icon: JSX.Element;
  active: boolean;
  onClick: (event: MouseEvent) => void;
}

// const handleTabSwitch = () => {
//     setActiveTab
// }

const Sidemenu = ({ label, icon, isActive, onClick }: SidemenuProps) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  return (
    <MenuBar>
      {menuItems.map((menuItem, id) => {
        return (
          <React.Fragment key={id}>
            {menuItem.isActive ? (
              <Button className="w-full !justify-start">
                {menuItem.icon}
                {menuItem.label}
              </Button>
            ) : (
              <SecondaryButton
                variant="plain"
                className="w-full !justify-start"
                onClick={() => {
                  setActiveTab(menuItem.label);
                }}
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
