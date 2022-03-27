import "./header.css";
import { BsSearch } from "../../../assets/icons";

export const Header = () => {
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
      <button className="login-button">Login</button>
    </nav>
  );
};
