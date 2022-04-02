import "./header.css";
import { BsSearch } from "../../../assets/icons";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="header-container">
    
      <div className="logo">
        <span className="logo-text1">HOT</span>
        <span className="logo-text2">STREAM</span>
      </div>
      <form className="searchBar-container">
        <BsSearch className="search-icon" />
        <input
          type="search"
          placeholder="Search Videos"
          className="search-input"
        />
      </form>
      <button className="login-button" onClick={()=>{navigate("/login")}}>Login</button>
    </nav>
  );
};
