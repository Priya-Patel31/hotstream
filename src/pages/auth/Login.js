import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import { AuthContainer } from "./component/AuthContainer";
import { SigninImage } from "../../assets/images";
import {
  BsFillEyeFill,
  FaEnvelope,
  AiOutlineArrowRight,
} from "../../assets/icons";
import "./auth.css"


const Login = () => {
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();
  return (
    <AuthContainer title="Login" imageUrl={SigninImage}>
      <form className="signup-form-container flex-col">
        <ul>
          <li className="list-style-none text-xs">
            <div className="email-field-container">
              <label className="text-xs text-white" htmlFor="email">
                Email address
              </label>

              <input
                id="email"
                className="input-field form-control text-xs text-white"
                type="email"
                placeholder="priya@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <FaEnvelope className="email-icon text-xs text-white"></FaEnvelope>
            </div>
          </li>
          <li className="list-style-none">
            <div className="password-field-container text-white">
              <label className="text-xs" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="input-field form-control text-xs text-white"
                type="password"
                placeholder="•••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <BsFillEyeFill className="password-eye-icon text-xs text-white"></BsFillEyeFill>
            </div>
          </li>
          <li className="list-style-none">
            <div className="flex-row align-center justify-between mt-1">
              <div className="flex-row align-center my-2 text-white">
                <input  type="checkbox" id="terms" />
                <label className="text-xs ml-1" htmlFor="terms">
                  Remember me
                </label>
              </div>

              <div className="flex-row  align-center">
                <Link to="/forgotPassword" className="text-xs text-white forget-password">
                  Forget Password
                </Link>
              </div>
            </div>
          </li>
        </ul>
        <button
          className="button primary-button-pink my-2 text-xs"
          onClick={async(e) => {
        
          }}
        >
          Login
        </button>
        <div>
          <Link to="/signup" className="text-xs text-white">
            Create New Account
            <span>
              <AiOutlineArrowRight className="ml-2 text-white"></AiOutlineArrowRight>
            </span>
          </Link>
        </div>
      </form>
    </AuthContainer>
  );
};

export { Login };
