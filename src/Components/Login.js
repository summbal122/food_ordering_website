import IMG from "../../images/app_logo.png"
import SIDEIMG from "../../images/sideImg.png"
import { useState, } from "react";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link } from "react-router";

const Login = () => {
  const [signUp_IN, setSignUp_IN] = useState("Login");
  const navigate = useNavigate();
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const auth = getAuth();
  
const handleSignUp = (e) => {
  e.preventDefault();

  if (signUp_IN === "Sign Up") {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: `${firstName.current.value} ${lastName.current.value}`,
        });
      })
      .then(() => {
 
        navigate("/");
      })
      .catch((error) => {
     
      });
  } else {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
    
      });
  }
};

  const handleButtonClick = () =>{
    setSignUp_IN(signUp_IN === "Login" ? "Sign Up" : "Login");
  
  }

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      <div className="flex-1 flex flex-col justify-center items-center px-6 lg:px-16 relative z-10 bg-white">
         <img
          className="w-24 2xl:w-44 absolute top-4  left-6 lg:left-10"
          src={IMG}
          alt="Food app logo"
        />
        <h1 className="absolute top-15 2xl:top-20 right-6 2xl:right-10 text-xs lg:text-sm 2xl:text-2xl hover:underline"> <Link to="/">Home</Link></h1>

        <main className="w-full max-w-md text-center flex flex-col items-center gap-6 mt-9">
          <div className="w-full bg-white rounded-sm shadow-xs">
            <form className="lg:px-10 py-3 lg:py-14 space-y-2 lg:space-y-6 2xl:space-y-8 flex flex-col items-center">
              {signUp_IN === "Sign Up" && (
                <div className="flex w-full gap-2"> 
                   <input
                   ref={firstName}
                type="text"
                placeholder="First name"
                className="text-xs lg:text-sm 2xl:text-2xl border border-black w-full px-2 py-3 rounded-sm focus:outline-secondary"
              />
               <input
                ref={lastName}
                type="text"
                placeholder="Last name"
                className="text-xs lg:text-sm 2xl:text-2xl border border-black w-full px-2 py-3 rounded-sm focus:outline-secondary"
              />
                </div>
                
              )}
              <input
                ref={email}
                type="email"
                placeholder="Email"
                className="text-xs lg:text-sm 2xl:text-2xl border border-black w-full px-2 py-3 rounded-sm focus:outline-secondary"
              />
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="text-xs lg:text-sm 2xl:text-2xl border border-black w-full px-2 py-3 rounded-sm focus:outline-secondary "
              />
              <button
                type="button"
                className="px-10 py-3 rounded-md text-xs lg:text-sm text-white bg-black w-fit self-center cursor-pointer hover:opacity-80 mt-4 2xl:text-2xl"
                onClick={handleSignUp}
              >
                {signUp_IN}
              </button>
            </form>
          </div>
          {signUp_IN === "Login" && (<p className="text-xs lg:text-sm 2xl:text-2xl">
            Craving something delicious? Log in to explore your favorite meals from top-rated restaurants near you.
          </p>)}

         {signUp_IN === "Login" && (
        <p className="text-black cursor-pointer text-xs lg:text-sm 2xl:text-2xl" > Not signed in?{' '}<span onClick={handleButtonClick} className="text-dark-background font-semibold hover:text-red-400">Sign Up now</span></p>
         )}
        {signUp_IN === "Sign Up" && 
        <p onClick={handleButtonClick} className="text-xs lg:text-sm 2xl:text-2xl">
          Already have an account?{" "}
          <span className="text-dark-background font-semibold hover:text-red-400 cursor-pointer text-xs lg:text-sm 2xl:text-2xl">
            Log in
          </span>
        </p>
}
       
       </main>
      </div>    

      <div className="hidden md:block w-[350px] lg:w-[450px] 2xl:w-5xl h-full">
        <img
          src={SIDEIMG}
          alt="Food visual"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
