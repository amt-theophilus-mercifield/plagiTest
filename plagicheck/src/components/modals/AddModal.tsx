import { useState } from "react";
import SelectComponent from "../commons/SelectComponent";
import { Modal } from "../commons/styledComponents";
import { IoMdClose } from "react-icons/io";

const fields = [
  {
    label: "Name",
    placeholder: "Enter first and last name here",
    key: "name",
  },
  {
    label: "Email address",
    placeholder: "Eg. johndoe@gmail.com",
    key: "email",
  },
  {
    label: "Phone number",
    placeholder: "Enter phone number here",
    key: "phone",
  },
  {
    label: "Department",
    placeholder: "Select department",
    key: "department",
  },
  {
    label: "Qualification",
    placeholder: "Enter qualification here",
    key: "qualification",
  },
];

const AddModal = () => {
  
  return (
    <Modal>
      <form className="w-[461px] bg-white px-6 py-8 rounded-lg flex flex-col gap-4">
        <div className="flex justify-between">
          <h3>Add Lecturer</h3>
          <IoMdClose />
        </div>
        {fields.map((field) => (
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name">{field.label}*</label>
            {field.key === "department" ? (
              <SelectComponent />
            ) : (
              <input
                placeholder={field.placeholder}
                type={field.key === "email" ? "email" : "text"}
                id={field.key}
                name={field.key}
                className="text-[16px] px-4 py-[10px] border-2 rounded-lg focus:outline-[#4D4DFF]"
              />
            )}
          </div>
        ))}
      </form>
    </Modal>
  );
};

export default AddModal;
