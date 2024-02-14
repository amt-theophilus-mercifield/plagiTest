import BulkUpload from "../commons/BulkUpload";
import ManageUsersNav from "../commons/ManageUsersNav";

const ManageUsers = () => {
  return (
    <div className="content">
      <ManageUsersNav />
      <BulkUpload />
    </div>
  );
};

export default ManageUsers;
