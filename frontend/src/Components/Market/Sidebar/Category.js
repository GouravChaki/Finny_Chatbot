import React from "react";
import style from "./Category.css";
export default function Category() {
  return (
    <div>
      <div className="sidebar card sticky-top" style={style}>
        <div className="d-flex form-inline">
          <div>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
