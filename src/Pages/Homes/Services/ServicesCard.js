import React from "react";

const ServicesCard = ({service}) => {
    const {img, price, title } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-4 border-4 ">
      <figure>
        <img className="h-64"
          src={img}
          alt="car-service"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title text-orange-600 ">price: Tk {price}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
