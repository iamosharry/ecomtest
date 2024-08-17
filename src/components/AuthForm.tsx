import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import useSignIn from "../services/useSignIn";

const AuthForm = () => {
  const { toggleSignIn } = useSignIn();
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleFormType = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="w-[400px] bg-white rounded-lg px-5 md:px-10 py-10">
      <div className="flex justify-between items-center mb-7">
        <h2 className="text-[25px] font-bold">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        <button onClick={toggleSignIn} aria-label="Close form">
          <IoMdClose className="text-[30px] cursor-pointer" />
        </button>
      </div>
      <form>
        {isSignUp && (
          <div className="mb-5">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              className="border w-full py-2 px-2 rounded-md"
              type="text"
              placeholder="Your name"
              required
            />
          </div>
        )}
        <div className="mb-5">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            className="border w-full py-2 px-2 rounded-md"
            type="email"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-7">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            className="border w-full py-2 px-2 rounded-md"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="mb-5">
          <button
            type="submit"
            className="text-center w-full bg-[#FF4C24] text-white py-2 rounded-md"
          >
            Submit
          </button>
        </div>
        <div className="mb-3 flex items-center">
          <input id="terms" className="mr-2" type="checkbox" required />
          <label htmlFor="terms">
            By continuing, I agree to the terms of use and privacy policy.
          </label>
        </div>
      </form>
      <div>
        <span className="mr-1">
          {isSignUp ? "Already have an account" : "Create a new account"}?
        </span>
        <button
          onClick={toggleFormType}
          className="text-[#FF4C24] font-semibold"
        >
          {isSignUp ? "Login here" : "Click here"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
