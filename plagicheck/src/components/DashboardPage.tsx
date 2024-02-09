// import { TableComponent } from "./commons/TableComponent";
// import { persons, lecturersHeaders } from "../assets/mock-data-min";

import BulkUpload from "./commons/BulkUpload";

export const DashboardPage = () => {
  return (
    <div>
      {/* <TableComponent tableHeaders={lecturersHeaders} tableData={persons} /> */}
      <BulkUpload />
    </div>
  );
};
