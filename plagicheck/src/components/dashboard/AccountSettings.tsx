import React, { useState } from "react";
import styled from "styled-components";
import { CiUser } from "react-icons/ci";
import { MdPassword } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";
import profile from "./../../assets/profile.png";
import { Button } from "../commons/Button";
import { SecondaryButton } from "../commons/Button";
import { BsFillCameraFill } from "react-icons/bs";

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

const passwordDetails = [
  {
    label: "Current Password",
    placeholder: "Enter your current password",
    key: "current-password",
  },
  {
    label: "New Passsword",
    placeholder: "Enter your new password",
    current: "new-password",
  },
  {
    label: "Confirm Password",
    placeholder: "Confirm your new password",
    current: "confirm-password",
  },
];

const AccountSettings = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toogleActiveIndex = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <Container>
      <div className="settings-menu">
        <div className="menu flex flex-col gap-6">
          {accountMenuItems.map((accountMenuItems, index) => (
            <React.Fragment key={index}>
              <div
                key={index}
                onClick={() => index !== 2 && toogleActiveIndex(index)}
                className={`flex items-center gap-2 text-[16px] ${
                  index === activeIndex ? "" : ""
                } ${index === 2 ? "text-[#FF0000]" : ""}`}
                style={{
                  backgroundColor:
                    index === activeIndex ? "#CCE1FF" : "transparent",
                  color: index === activeIndex ? "#0267FF" : "",
                  padding: "10px ",
                  width: "172px",
                  borderRadius: "8px",
                }}
              >
                {accountMenuItems.icon}
                {accountMenuItems.label}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="settings-wrapper border-l pt-[41px] pl-[50px]">
        {activeIndex === 0 && (
          <div className="grid gap-[41px] ">
            <div className="flex flex-col gap-[36px]">
              <h2 className="text-[19.2px] text-[#1A1A2A] font-semibold ">
                Personal Information
              </h2>
              <div className="flex items-center gap-[24px] ">
                <div className="relative">
                  <img
                    src={profile}
                    alt=""
                    className="rounded-full w-[114px] h-[114px] object-cover shadow"
                  />
                  <div className="container bg-white flex items-center justify-center w-[40px] h-[40px] rounded-[50%] absolute bottom-0 right-0">
                    <div className="bg-[#CCD3E0] flex items-center justify-center w-[35px] h-[35px] rounded-[50%]">
                      <BsFillCameraFill
                        className="w-[20px] h-[20px]"
                        color="#0267FF"
                      />
                    </div>
                  </div>
                </div>
                <div className="gap-[8px]">
                  <p className="text-[19.2px] text-[#000000] ">Esther Howard</p>
                  <p className="text-[16px] text-[#1A1A2A]">Staff ID: 1245</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[116px]">
              {personalInformation.slice(0, 2).map((personalInformation) => (
                <div className="flex flex-col gap-[6px] text-[14px] text-[#000112]">
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
                <div className=" flex flex-col gap-[6px] text-[14px] text-[#000112]">
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
        )}

        {activeIndex == 1 && (
          <div className="flex flex-col gap-[54px]">
            <div className="flex flex-col gap-[6px]">
              <h2 className="text-[#1A1A2A] font-semibold text-[19.2px]">
                Password
              </h2>
              <p className="text-[16px]">
                Please enter your current password to change your password
              </p>
              <hr className="w-[447px]  mt-3" />
            </div>
            {passwordDetails.map((passwordDetails, index) => (
              <div className="flex flex-col gap-[8px] ">
                <label htmlFor="name" className="text-[14px] font-bold">
                  {passwordDetails.label}
                </label>
                <input
                  style={{ width: "392px", height: "44px" }}
                  placeholder={passwordDetails.placeholder}
                  className="text-[16px] px-4 py-[10px] border-2 rounded-lg focus:outline-[#4D4DFF]"
                />
                {index === 1 && (
                  <span className="text-[14px] text-gray-500 ">
                    Must be alpha-numeric and must be more than 8 characters
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

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
