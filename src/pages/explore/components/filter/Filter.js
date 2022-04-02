import React from "react";
import "./filter.css";
import { useExplore } from "../../../../context/explore/ExploreContext";

export const Filter = () => {
  const { categories, dispatch, selectedCategory } = useExplore();

  return (
    <div className="flex-row explore-list-items list-style-none">
      <button
        className={`explore-list-item ${
          selectedCategory.toLowerCase() === "All".toLowerCase() ? "active" : ""
        }`}
        onClick={() => {
          dispatch({
            type: "UPDATE_CATEGORY",
            payload: { categoryName: "All" },
          });
        }}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          className={`explore-list-item ${
            selectedCategory.toLowerCase() ===
            category.categoryName.toLowerCase()
              ? "active"
              : ""
          }`}
          key={category?._id}
          onClick={() => {
            dispatch({
              type: "UPDATE_CATEGORY",
              payload: { categoryName: category.categoryName },
            });
          }}
        >
          {category?.categoryName}
        </button>
      ))}
    </div>
  );
};
