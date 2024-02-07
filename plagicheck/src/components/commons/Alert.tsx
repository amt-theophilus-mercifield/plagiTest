import { IoMdClose } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { GrStatusGood } from "react-icons/gr";
import { atom, useAtom } from "jotai";

export const errorAtom = atom({ msg: "", error: false, show: false });

// type Props = {};

const Alert = () => {
  const [isError, setIsError] = useAtom(errorAtom);
  return (
    <div
      className={`${isError.error ? "border-red-600" : "border-green-600"} ${
        isError.show
          ? "translate-y-12 opacity-100"
          : "-translate-y-10 opacity-0"
      } transform origin-top transition-all duration-700 absolute w-[60%] p-2 self-baseline flex justify-between border rounded bg-white shadow `}
    >
      {isError.error ? (
        <IoMdCloseCircleOutline className="text-red-600 w-8 self-center" />
      ) : (
        <GrStatusGood className="text-green-600 w-8 self-center" />
      )}
      <span
        className={`${
          isError.error ? "text-red-600" : "text-green-600"
        } w-full pl-2 justify-start`}
      >
        {isError.msg}
      </span>
      <IoMdClose className="w-8 self-center" />
    </div>
  );
};

export default Alert;
