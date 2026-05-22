import { useRef, useState } from "react";

interface FormProps {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  const [submitData, setSubmitData] = useState<FormProps>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmitData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={name} placeholder="Enter your name" /> <br />
      <input type="email" ref={email} placeholder="Enter your email" /> <br />
      <input type="password" ref={password} placeholder="Enter your password" />
      <button type="submit">Submit</button>
      <section>
        <h2>Name: {submitData.name}</h2>
        <h2>Email: {submitData.email}</h2>
        <h2>Password: {submitData.password}</h2>
      </section>
    </form>
  );
};

export default Form;
