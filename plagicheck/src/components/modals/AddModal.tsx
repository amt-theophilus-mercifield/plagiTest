import { useState } from "react";
import SelectComponent from "../commons/SelectComponent";
import { Modal } from "../commons/styledComponents";
import { IoMdClose } from "react-icons/io";
import { Button, SecondaryButton } from "../commons/Button";

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
  const [department, setDepartment] = useState("");
  const [showModal, setShowModal] = useState(true);

  const handleAdd = (event) => {
    event.preventDefault();
    console.log("data will be added..");
  };

  return (
    <>
      {showModal && (
        <Modal className="hidden">
          <form className="w-[461px] bg-white px-6 py-8 rounded-lg flex flex-col gap-4">
            <div className="flex justify-between">
              <h3>Add Lecturer</h3>
              <div className="" onClick={() => setShowModal(false)}>
                <IoMdClose />
              </div>
            </div>
            {fields.map((field, index) => (
              <div key={index} className="flex flex-col gap-2 w-full">
                <label htmlFor="name">{field.label}*</label>
                {field.key === "department" ? (
                  <SelectComponent
                    setSelected={setDepartment}
                    selected={department}
                  />
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
            <div className="flex gap-[19px]">
              <SecondaryButton
                className="w-full"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </SecondaryButton>
              <Button className="w-full" onClick={handleAdd}>
                Add
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddModal;
