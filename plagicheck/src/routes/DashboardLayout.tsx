import styled from "styled-components";
import { NavBar } from "../components/commons/NavBar";
import { Sidebar } from "../components/commons/SideBar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <Main>
      <Sidebar />
      <div className="Content">
        <NavBar />
        <div className="dashboard-content bulkDataWrapper px-[41px] py-[20px] mb-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </Main>
  );
};

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 270px 1fr;
  overflow: hidden;
`;
