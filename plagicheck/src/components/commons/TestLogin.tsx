import { useState } from "react";
import Logo from "../../assets/plagicheck-logo.png";
import { Button } from "./Button";
import axios from "axios";

const TestLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const url = "https://4208-102-176-94-124.ngrok-free.app";
    const axiosInstance = axios.create({
      baseURL: url,
      headers: {
        "Content-Type": "application/json",
      },
    });
    axiosInstance
      .post("/api/login", {
        userName: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4 bg-white px-8 py-4 rounded-lg shadow">
          <img
            src={Logo}
            alt=""
            className={`object-contain h-[50px] self-baseline`}
          />
          <h3 className="text-2xl font-bold">Login</h3>
          <span>
            Please enter your login details below to access your account.
          </span>
          <div className="">
            <label htmlFor="">Email / Staff ID</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full relative text-[16px] px-4 py-[10px] border-2 rounded-lg focus:outline-[#4D4DFF]"
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full relative text-[16px] px-4 py-[10px] border-2 rounded-lg focus:outline-[#4D4DFF]"
            />
          </div>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default TestLogin;
