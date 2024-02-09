import styled from "styled-components";
// import { TableComponent } from "./commons/TableComponent";
import { persons, lecturersHeaders } from "../assets/mock-data-min";

import BulkUpload from "./commons/BulkUpload";
import { NavBar } from "./commons/NavBar";
import { Sidebar } from "./commons/SideBar";

export const DashboardPage = () => {
  return (
    <Main>
      <Sidebar />
      <div className="Content">
        <NavBar />
        <div className="bulkDataWrapper px-[41px] py-[20px]">
          <BulkUpload />
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
`;
