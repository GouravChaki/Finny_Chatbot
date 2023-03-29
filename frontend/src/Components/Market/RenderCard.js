import React from "react";
import { Link } from "react-router-dom";
import pic from "./cloth.png";
export default function (props) {
  return (
    <div className="col">
      <div className="card mx-2 shadow" style={{borderRadius:"10%"}}>
        <img
          src={props.item.images[0].url}
          style={{
            width: "100%",
            height: "5%",
            objectFit: "cover",
            objectPosition: "bottom",
            borderTopRightRadius:"10%"
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <p>{props.item.articleColorNames.brandName}</p>
          <p></p>
        </div>
        <div className="d-flex">
          <div>
            <button class="btn btn-outline-success my-2" type="submit">
              Buy &nbsp {props.item.price.formattedValue}
            </button>
          </div>
          <div className="mx-2">
            <button class="btn btn-outline-success my-2" type="submit">
              Rent
            </button>
          </div>
          <div>
            <button class="btn btn-primary my-2" type="submit">
              Try on
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
