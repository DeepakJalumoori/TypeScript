import type { AdminInfoList } from "../types";

type AdminProps = {
  admin: AdminInfoList;
};

const AdminInfo = ({ admin }: AdminProps) => {
  return (
    <div>
      <h1>Admin Information</h1>
      <p>Id:{admin.id}</p>
      <p>name:{admin.name}</p>
      <p>Email:{admin.email}</p>
      <p>Role:{admin.role}</p>
      <p>Last Login:{admin.lastLogin.toLocaleString()}</p>
    </div>
  );
};

export default AdminInfo;
