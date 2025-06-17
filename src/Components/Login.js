import IMG from "../../images/app_logo.png";
import SIDE_IMG from "../../images/side_img.jpg";
import { useState, } from "react";
import { useNavigate } from "react-router";
// import auth from "../utils/auth"
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link } from "react-router";
// ✅ import initialized app

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
        console.log("Account created and profile updated!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign Up Error:", error.code, error.message);
      });
  } else {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in:", user.email);
        navigate("/");
      })
      .catch((error) => {
        console.error("Login Error:", error.code, error.message);
      });
  }
};

  const handleButtonClick = () =>{
    setSignUp_IN(signUp_IN === "Login" ? "Sign Up" : "Login");
    console.log(setSignUp_IN);

  }

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-16 relative z-10 bg-white">
        <img
          className="w-24 absolute top-4 left-6 md:left-10"
          src={IMG}
          alt="Food app logo"
        />

        <main className="w-full  max-w-md text-center flex flex-col items-center gap-6">
          <div className="w-full bg-white rounded-sm shadow-xs">
            <form className="px-10 py-14 space-y-6 flex flex-col items-center">
              {signUp_IN === "Sign Up" && (
                <div className="flex w-full gap-2"> 
                   <input
                   ref={firstName}
                type="text"
                placeholder="First name"
                className="text-sm border border-black w-full px-2 py-3 rounded-sm focus:outline-secondary"
              />
               <input
                ref={lastName}
                type="text"
                placeholder="Last name"
                className="text-sm border border-black w-full px-2 py-3 rounded-sm focus:outline-secondary"
              />
                </div>
                
              )}
              <input
                ref={email}
                type="email"
                placeholder="Email"
                className="text-sm border border-black w-full px-2 py-3 rounded-sm focus:outline-secondary"
              />
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="text-sm border border-black w-full px-2 py-3 rounded-sm focus:outline-secondary"
              />
              <button
                type="button"
                className="px-10 py-3 rounded-md text-sm text-white bg-black w-fit self-center cursor-pointer hover:opacity-80 mt-4"
                onClick={handleSignUp}
              >
                {signUp_IN}
              </button>
            </form>
          </div>
          {signUp_IN === "Login" && (<p className="px-4 md:px-0">
            Craving something delicious? Log in to explore your favorite meals from top-rated restaurants near you.
          </p>)}

         {signUp_IN === "Login" && (
        <p className="text-black cursor-pointer" > Not signed in?{' '}<span onClick={handleButtonClick} className="text-dark-background font-semibold hover:text-red-400">Sign Up now</span></p>
         )}
        {signUp_IN === "Sign Up" && 
        <p onClick={handleButtonClick} className="">
          Already have an account?{" "}
          <span className="text-dark-background font-semibold hover:text-red-400 cursor-pointer">
            Log in
          </span>
        </p>
}
       
       </main>
      </div>

      

      <div className="hidden md:block w-[450px] 2xl:w-4xl h-full">
        <img
          src={SIDE_IMG}
          alt="Food visual"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
