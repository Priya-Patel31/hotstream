import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupImage } from "../../assets/images";
import { AuthContainer } from "./component/AuthContainer";
import "./auth.css"
import {
  BsFillEyeFill,
  FaEnvelope,
  AiOutlineArrowRight,
} from "../../assets/icons";


const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

 
  return (
    <AuthContainer title="Signup" imageUrl={SignupImage}>
      <form className="signup-form-container flex-col">
        <ul>
          <li className="list-style-none text-xs">
            <div className="email-field-container">
              <label className="text-xs text-white" htmlFor="firstName">
                First name
              </label>
              <input
                id="firstName"
                className="input-field form-control text-xs text-white"
                type="text"
                placeholder="priya"
                value={formData.firstName}
                onChange={{}}
                required
              />
            </div>
          </li>
          <li className="list-style-none text-xs">
            <div className="email-field-container">
              <label className="text-xs text-white" htmlFor="lastName">
                Last name
              </label>
              <input
                id="lastName"
                className="input-field form-control text-xs text-white"
                type="text"
                placeholder="patel"
                value={formData.lastName}
                onChange={{}}
                required
              />
            </div>
          </li>
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
                value={formData.email}
                onChange={{}}
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
                value={formData.password}
                onChange={{}}
                required
              />
              <BsFillEyeFill className="password-eye-icon text-xs text-white"></BsFillEyeFill>
            </div>
          </li>
        </ul>
        <button
          className="button primary-button-pink my-2 text-xs"
          onClick={{}}
        >
          Create New Account
        </button>
        <div>
          <Link to="/login" className="text-xs text-white">
            Already have an account
            <span>
              <AiOutlineArrowRight className="ml-2"></AiOutlineArrowRight>
            </span>
          </Link>
        </div>
      </form>
    </AuthContainer>
  );
};

export { Signup };
