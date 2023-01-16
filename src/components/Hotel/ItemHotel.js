import React from "react";

function ItemHotel(props) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 my-2">
      <div className="card">
        <img
          className="card-img-top img-fuild"
          src="https://picsum.photos/400"
          alt="hotel img"
        />

        <div className="card-body p-2">
          <div className="row card-title">
            <h5 className="fw-bold fs-3">
              {props.name} - {props.rate}
            </h5>
          </div>

          <div className="card-text">
            <div className="row">
              <p className=" fw-light m-0">{props.location}</p>
            </div>
            <div className="row">
              <p className="m-0">{props.days}</p>
            </div>
            <div className="row">
              <p className="">
                {props.oceanview == true ? "oceanview" : ""} {props.roomtype}{" "}
                {props.mealtype}
              </p>
            </div>
            <div className="row text-end ">
              <h6 className=" fw-bold fs-3">{props.price}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemHotel;
