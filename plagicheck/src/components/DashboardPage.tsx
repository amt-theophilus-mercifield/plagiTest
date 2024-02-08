import {SecondaryButton} from "./commons/Button.tsx";
import {FaArrowLeftLong} from "react-icons/fa6";

export const DashboardPage = () => {
  return <div>DashboardPage

  <SecondaryButton>SecondaryButton</SecondaryButton>
  <SecondaryButton variant={"plain"}><FaArrowLeftLong />Back to login</SecondaryButton>
  </div>;
};
