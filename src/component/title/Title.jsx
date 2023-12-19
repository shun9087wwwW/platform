import React from "react";
import titleImg from "../../images/title.jpg";

export default function Title() {
  return (
    <div className="titleImgText vstack gap-0 position-relative d-flex justify-content-center align-items-center">
      <picture className="title container-fluid w-100 p-0">
        <img
          src={titleImg}
          alt=""
          className="titleImg img-fluid h-auto w-100"
          style={{ maxHeight: "500px" }}
        />
      </picture>
      <p
        className="text-white fs-1 fw-bolder position-absolute mt-5"
        style={{ fontFamily: "Roboto Slab" }}
      >
        Welcome to My Page
      </p>
    </div>
  );
}
