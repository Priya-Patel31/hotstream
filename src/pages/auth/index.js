import React, { useState, useEffect } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { SignupImage ,SigninImage} from "../../assets/images";
import { AuthContainer } from "../auth/component/AuthContainer";
import { useAuth } from "../../context/auth/authContext";

import {
  BsFillEyeFill,
  FaEnvelope,
  AiOutlineArrowRight,
  BsFillEyeSlashFill,
} from "../../assets/icons";
import { changeDocumentTitle } from "../../shared/utils/changeDocumentTitle";
import { toast } from "react-toastify";

export {
  React,
  useState,
  useEffect,
  Link,
  useLocation,
  useNavigate,
  SignupImage,
  SigninImage,
  AuthContainer,
  useAuth,
  BsFillEyeFill,
  BsFillEyeSlashFill,
  AiOutlineArrowRight,
  FaEnvelope,
  changeDocumentTitle,
  toast
};


