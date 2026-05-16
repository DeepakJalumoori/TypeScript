import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";
import { type Info, type AdminInfoList } from "./types";

const App = () => {
  const user: Info = {
    id: 1,
    name: "Sameer",
    email: "sameer2@gmail.com",
  };

  const admin: AdminInfoList = {
    id: 2,
    name: "Deepak",
    email: "deepak@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };
  return (
    <div>
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  );
};

export default App;
