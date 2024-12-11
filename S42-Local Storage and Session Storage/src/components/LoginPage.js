import React, { useEffect, useRef } from "react";

function LoginPage() {
  let emailInputRef = useRef();
  let passwordInputRef = useRef();

  useEffect(() => {
    if(localStorage.getItem("email") && localStorage.getItem("password")){
      emailInputRef.current.value = localStorage.getItem("email");
      passwordInputRef.current.value = localStorage.getItem("password");
    
    onloginClick();

    }
  }, []);

  let onloginClick = async () => {
    let typedemail = emailInputRef.current.value;
    let typedpassword = passwordInputRef.current.value;

    localStorage.setItem("email", emailInputRef.current.value);
    localStorage.setItem("password", passwordInputRef.current.value);

    sessionStorage.setItem("email", emailInputRef.current.value);
    sessionStorage.setItem("password", passwordInputRef.current.value);
    if (typedemail == "sravya@gmail.com" && typedpassword == "sravya") {
      alert("valid email and password");
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div>
      <form>
        <h1 className="loginH">Login</h1>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Your Email address"
            ref={emailInputRef}
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            ref={passwordInputRef}
          ></input>
        </div>
        <div>
          <input type="checkbox"></input>
          <label className="checkbox">Show Password</label>
        </div>
        <h1 className="head">Forgot Username/ Password?</h1>
        <h2 className="head">Don't have an account? Sign Up</h2>
        <div>
          <button
            type="button"
            onClick={() => {
              onloginClick();
            }}
          >
            SIGN IN
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
