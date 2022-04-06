import { pageNotFound } from "../../../assets/images";
import { useNavigate } from "react-router";
import "./pageNotFound.css";
export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={pageNotFound}
        className="page-not-found-image"
        alt="page-not-found"
      />
      <div className="buttons-container">
        <button
          className="button primary-button-pink"
          onClick={() => navigate(-1)}
        >
          Previous
        </button>
        <button
          className="button primary-button-pink"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>
    </div>
  );
};
