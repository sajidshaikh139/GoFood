import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="d-flex justify-content-center align-items-center py-3 my-4 border-top text-white bg-success">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          ></Link>
          <span className=" fs-5"> © 2023 GoFood , Inc . </span>
        </div>
      </footer>
    </div>
  );
}
