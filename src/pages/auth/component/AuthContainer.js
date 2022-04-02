import React from "react";

const AuthContainer = ({ children,title,imageUrl }) => {
  return (
    <div className="authentication-details-container flex-row mx-2">
      <div className="authentication-image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="form-components-container flex-col">
        <div className="wrapper p-2 my-2 flex-col">
          <h2 className="my-2 form-heading text-sm">{title}</h2>
         {children}
        </div>
      </div>

    </div>
  );
};

export { AuthContainer };
