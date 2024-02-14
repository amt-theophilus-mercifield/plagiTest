import { useEffect, useState } from "react";

const departments = [
  {
    name: "Computer Science department",
    key: "computer-science",
    designation: "department",
  },
  {
    name: "Maths and stats department",
    key: "maths-and-science",
    designation: "department",
  },
  {
    name: "Graphics department",
    key: "graphics",
    designation: "department",
  },
  {
    name: "Business department",
    key: "business",
    designation: "department",
  },
];

interface PropTypes {
  setSelected: React.Dispatch<React.SetStateAction<string>>,
  selected: string,
}

const SelectComponent = ({ setSelected, selected }: PropTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDepartment = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("click", (event: Event) => {
      const id = event.target?.id;
      const parentId = event.target?.parentNode?.id;

      if (id === "selectParent" || parentId === "selectParent") {
        toggleDepartment();
      } else {
        setIsOpen(false);
      }
     
    });
  }, []);

  return (
    <div className="">
      <div
        id="selectParent"
        className="w-full relative text-[16px] px-4 py-[10px] border-2 rounded-lg focus:outline-[#4D4DFF]"
      >
        <h3 className={`${selected ? "text-black" : "text-[#A6A6AB]"}`}>
          {selected
            ? departments.find((el) => el.key === selected).name
            : "Select department"}
        </h3>
      </div>
      {isOpen && (
        <div className="drop-down w-[413px] h absolute bg-white px-6 py-8 rounded-lg flex flex-col gap-4 shadow-md ">
          {departments.map((department, index) => (
            <div
              key={index}
              className="radio flex gap-2"
              onClick={() => {
                setSelected(department.key);
              }}
            >
              <input
                type="radio"
                name={department.designation}
                id={department.key}
                checked={department.key === selected}
              />
              <label htmlFor={department.key}>{department.name}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectComponent;
