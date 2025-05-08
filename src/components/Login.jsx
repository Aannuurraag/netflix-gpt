import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);

  const ToggleSignInForm = () => {
    setSignInForm(!signInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg"
          alt="background img"
        ></img>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-44 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
        <h1 className="font-bold text-3xl mx-2 py-4">
          {signInForm ? "Sign In" : "Sign up"}
        </h1>
        {signInForm ? (
          ""
        ) : (
          <input
            className="p-2 my-2 bg-gray-800 w-full rounded-sm"
            type="text"
            placeholder="Enter fullname"
          ></input>
        )}
        <input
          className="p-2 my-2 bg-gray-800 w-full rounded-sm"
          type="text"
          placeholder="Enter email"
        ></input>
        <input
          className="p-2 my-2 bg-gray-800 w-full rounded-sm"
          type="password"
          placeholder="Enter password"
        ></input>
        <button className="p-2 my-5 bg-red-600 w-full rounded-sm">
          Sign in
        </button>
        <p className="p-2 my-2 cursor-pointer" onClick={ToggleSignInForm}>
          {signInForm
            ? "New to Netflix?Sign up now."
            : "Already Sign up?Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
