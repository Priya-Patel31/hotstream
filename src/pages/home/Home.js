import React ,{useEffect} from "react";
import "./home.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Outlet } from "react-router";
import { changeDocumentTitle } from "../../shared/utils/changeDocumentTitle";

export const Home = () => {
  useEffect(()=>{
    changeDocumentTitle("Hotstream-Home");
  },[])
  
  return (
    <div className="home-container">
      <Sidebar />
      <Outlet/>
    </div>
  );
};
