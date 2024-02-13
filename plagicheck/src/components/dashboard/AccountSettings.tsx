import React, { useState } from "react";
import styled from "styled-components";
import { CiUser } from "react-icons/ci";
import { MdPassword } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";
import profile from "./../../assets/profile.png";
import { Button } from "../commons/Button";
import { SecondaryButton } from "../commons/Button";

// interface accountMenuItemsProps {
//   index: number;

// }

const accountMenuItems = [
  {
    label: "My Profile",
    icon: <CiUser />,
    key: "my-profile",
  },
  {
    label: "Password",
    icon: <MdPassword />,
    key: "password",
  },
  {
    label: "Delete account",
    icon: <MdOutlineDeleteSweep />,
    key: "delete-account",
  },
];

const personalInformation = [
  {
    label: "First Name",
    placeholder: "Enter your first name here",
    key: "first-name",
  },
  {
    label: "Last Name",
    placeholder: "Enter your last name here",
    key: "last-name",
  },
  {
    label: "Email Address",
    placeholder: "Eg. estherhoward@gmail.com",
    key: "email",
  },
  {
    label: "Phone",
    placeholder: "(603) 555-0123",
    key: "telephone",
  },
];

// const [activeIndex, setActiveIndex] = useState('')

// const handleActiveIndex = (index:number) =>{
//   setActiveIndex(index)
// }


const AccountSettings = () => {
  return (
    <Container>
      <div className="settings-menu">
        <div className="menu flex flex-col gap-6">
          {accountMenuItems.map((accountMenuItems, index) => (
            <React.Fragment key={index}>
              <div
                key={index}
                className={`flex items-center gap-2 ${
                  index === 2 ? "text-[#FF0000]" : ""
                
                }`}
                onClick={() => handleActiveIndex}
              >
                {accountMenuItems.icon}
                {accountMenuItems.label}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="settings-wrapper border-l pt-[41px] pl-[50px]">
        <div className="grid gap-[41px] ">
          <div className="flex flex-col gap-[36px]">
            <h2 className="text-[19.2px] text-[#1A1A2A] ">
              Personal Information
            </h2>
            <div className="flex items-center gap-[24px] ">
              <img
                src={profile}
                alt=""
                className="rounded-full w-[114px] h-[114px] object-cover"
              />
              <div className="gap-[8px]">
                <p className="text-[19.2px] text-[#1A1A2A] ">Esther Howard</p>
                <p className="text-[16px]">Staff ID: 1245</p>
              </div>
            </div>
          </div>

          <div className="flex gap-[116px]">
            {personalInformation.slice(0, 2).map((personalInformation) => (
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="name">{personalInformation.label}</label>
                <input
                  style={{ width: "368px", height: "44px" }}
                  placeholder={personalInformation.placeholder}
                  className="text-[16px] px-4 py-[10px] border-2 rounded-lg focus:outline-[#4D4DFF]"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-[116px]">
            {personalInformation.slice(2, 4).map((personalInformation) => (
              <div className=" flex flex-col gap-[6px]">
                <label htmlFor="name">{personalInformation.label}</label>
                <input
                  style={{ width: "368px", height: "44px" }}
                  placeholder={personalInformation.placeholder}
                  className="text-[16px] px-4 py-[10px] border-2 rounded-lg focus:outline-[#4D4DFF]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-8 py-8">
          <SecondaryButton className="w-[169px]">Cancel</SecondaryButton>
          <Button className="w-[169px]">Save Changes</Button>
        </div>
      </div>
    </Container>
  );
};

export default AccountSettings;

const Container = styled.div`
  width: 100%;
  height: 100%;
  grid-template-columns: 226px 1fr;
  display: grid;
  grid-template
`;
