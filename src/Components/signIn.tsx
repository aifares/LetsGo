import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../FIrebase/config";
import { useAuth } from "../Context/authContext";
import NavBar from "./navBar";

const SignIn = () => {
  const { currentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
      <NavBar />
      <h1 className="font-bold text-2xl">Log In to your Account</h1>
      <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" onSubmit={signIn}>
		    <label className="font-semibold text-xs">Username or Email</label>
		    <input 
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" 
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
		    <label className="font-semibold text-xs mt-3" >Password</label>
		    <input 
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" 
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
		    <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button>
		    <div className="flex mt-6 justify-center text-xs">
			    <a className="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
			    <span className="mx-2 text-gray-300">/</span>
			    <a className="text-blue-400 hover:text-blue-500" href="#">Sign Up</a>
		    </div>
	    </form>
    </div>
  );
};

export default SignIn;
