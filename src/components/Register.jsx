import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import "./register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    if (!email) alert("Please enter email");
    if (!password) alert("Please enter password");

    if(registerWithEmailAndPassword(name, email, password))
    navigate('/home');
    else
    navigate('/');
  };
  useEffect(() => {
    if (loading) return;
  }, [user, loading]);
  return (
    <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <a href="https://amazon-clone-react-lovat.vercel.app/" className="font-semibold text-indigo-600 hover:text-indigo-500">
          <img
          src='./images/amazon-ar21.svg'
          className='h-20 mx-auto w-auto'
          />
      </a>
    </div>

    <div className="mt-10 border-2 p-6 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Username
          </label>
      <div className="mt-2">
            <input
              id="Username"
              name="Username"
              type="Username"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='  Enter your Username'
              autoComplete="current-Username"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
            />
          </div>
          </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder='  Enter your name'
              value={email}
              onChange={(e) => setEmail(e.target.value)}       
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              placeholder='  Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            onClick={register}
            className="flex w-full justify-center transition-all duration-500 rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register now
          </button>
          <button
          className="flex w-full mt-4 justify-center transition-all duration-500 rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Already a member? {' '}
        <Link to="/" className="text-yellow-400  transition-all duration-500 hover:text-orange-400 hover:font-semibold">
          Login 
        </Link>
      </p>
    </div>
  </div>
  );
}
export default Register;