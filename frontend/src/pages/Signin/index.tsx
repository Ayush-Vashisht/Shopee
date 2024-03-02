import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);
  async function userLogin(ev) {
    ev.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/user/signin",
        {
          username:email,
          password,
        },
        { withCredentials: true }
      );
      setUser(true);
      alert("login successful");
    } catch (err) {
      alert(err);
    }
  }
  return (
    <>
      <div className="w-screen h-screen flex grow items-center justify-around p-2">
        <div className="w-2/4 h-screen flex items-center">
          <form
            onSubmit={userLogin}
            className="mx-auto w-2/4 h-3/4 border border-solid-white px-2 py-5 bg-white flex flex-col justify-evenly "
          >
            <div className="text-4xl text-center font-semibold text-slate-700">
              Login
            </div>
            <div className=" px-6  md:text-sm">
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
                <button className="border  px-2 py-1 font-semibold ">
                  Sign in
                </button>
              </div>
            </div>
            <div className="text-xs text-center">
              <span>Dont have an account yet? </span>
              <Link to={"/register"} className="x">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
