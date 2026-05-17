import { useState } from "react";

interface ProfileInfo {
  name: string;
  age: number;
  email: string;
}
const UserProfile = () => {
  const [profile, setProfile] = useState<ProfileInfo>({
    name: "",
    age: 0,
    email: "",
  });

  const setName = (name: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, name }));
  };
  const setAge = (age: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, age: Number(age) }));
  };
  const setEmail = (email: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, email }));
  };
  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="age"
        value={profile.age > 0 ? profile.age : " "}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        value={profile.email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <h2>User Info Summary</h2>
      <p>Name:{profile.name}</p>
      <p>Age:{profile.age}</p>
      <p>Email:{profile.email}</p>
    </div>
  );
};

export default UserProfile;
