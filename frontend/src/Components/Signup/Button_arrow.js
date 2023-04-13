import React from 'react'
import { Link } from 'react-router-dom'
export default function button() {
    return (
      <div
      className="m-5 d-flex justify-content-center "
      style={{ width: "1%", height: "9%",paddingLeft: '1px',paddingTop: '5px' }}
    >
       <Link to="/"
        className="btn -primary shadow-lg mb-1 w-100 h-100"
        style={{marginTop: '75px',marginLeft: '58px' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginLeft: "-12px"}}
          width="25"
          height="25"
          fill="white"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </Link>
    </div>
      )
}
