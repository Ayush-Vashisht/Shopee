import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(false);
  const [password, setPassword] = useState("");
  async function userRegister(ev) {
    ev.preventDefault();
    try {
      await axios.post("/api/v1/user/signup", {
        firstName,
        lastName,
        username:email,
        password,
      });
      setUser(true);
      alert("Registration succesful. Now you can log in");
    } catch (err) {
      alert(err);
    }
  }
  return (
    <>
      <div className="w-screen h-screen flex  grow items-center justify-around p-2 ">
        <div className="w-2/4 h-screen flex items-center">
          <form
            onSubmit={userRegister}
            className="mx-auto w-2/4 h-3/4 border border-solid-black px-2 py-5 flex flex-col justify-evenly "
          >
            <div className="text-4xl text-center font-semibold text-slate-700">
              Register
            </div>
            <div className=" px-6  md:text-sm ">
              <span className="text-xs">firstName</span>
              <div className="border border-slate-300 px-1">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={firstName}
                  className="px-1"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <span className="text-xs">lastname</span>
              <div className="border border-slate-300 px-1">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <span className="text-xs">email</span>
              <div className="border border-slate-300 px-1">
                <input
                  type="email"
                  placeholder="yourname@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <span className="text-xs">password</span>
              <div className="border border-slate-300 px-1">
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-end mt-4">
                <button className="border border-black px-2 py-1 font-semibold ">
                  Sign up
                </button>
              </div>
            </div>
            <div className="text-xs text-center">
              <span>Already a member? </span>
              <Link to={"/signin"} className="">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
