import type { Info } from "../types";

type UserProps = {
  user: Info;
};

const UserInfo = ({ user }: UserProps) => {
  return (
    <div>
      <h1>User Information</h1>
      <p>Id:{user.id}</p>
      <p>name:{user.name}</p>
      <p>Email:{user.email}</p>
    </div>
  );
};

export default UserInfo;
