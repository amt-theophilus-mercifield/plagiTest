import { TableComponent } from "./commons/TableComponent";
import { persons, lecturersHeaders } from "../assets/mock-data-min";

export const DashboardPage = () => {
  return <div>
    <TableComponent tableHeaders={lecturersHeaders} tableData={persons} />
  </div>;
};
