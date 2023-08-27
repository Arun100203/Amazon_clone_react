import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    //if (user) navigate("/home");
    if(error) {
      alert('provide correct usename and password');
    }
  }, [user, loading, error]);

  const fun = () =>{
    if(signInWithGoogle){
      navigate("/home");
    }
  }

  const fun2 = async () => {
    try
    {
      await signInWithEmailAndPassword(auth,email, password)
     navigate('/home');
    }
    catch{
      alert("id not found")
    }
  }
  return (
    
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <a href="https://amazon-clone-react-lovat.vercel.app/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                <img
                src='./images/amazon-ar21.svg'
                className='h-20 mx-auto w-auto'
                />
            </a>
          </div>
  
          <div className="mt-10 border-2 p-6  sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
            
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    autoComplete="email"
                    value={email}
                    placeholder='  enter your name'
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
                    value={password}
                    placeholder='  enter your password'
                    autoComplete="current-password"
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  onClick={fun2}
                  className="flex w-full justify-center rounded-md transition-all duration-500 bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Login 
                </button>
                <button 
                className="flex w-full mt-4 justify-center rounded-md transition-all duration-500 bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={fun}>
                  Login with Google
                </button>
              </div>
           
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link to="/register" className="text-yellow-400  transition-all duration-500 hover:text-orange-400 hover:font-semibold">
                 Register now
              </Link>
            </p>
          </div>
        </div>
  );
}
export default Login;