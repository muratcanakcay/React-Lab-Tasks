import React, { useState } from "react";
import { Car } from "../data/Car";

const CarListItemComponent: React.FC<{ passedCar: Car }> = ({ passedCar }) => {
  const [editState, setEditState] = useState(false);

  const isAirConditioned = (car: Car) => {
    return car.AC ? "" : "no " + "air conditioner";
  };

  return (
    <div className="carListItemComponent container">
      <div className="row">
        <div className="col car-image"></div>
        <div className="col car-name">{passedCar.name}</div>
        <div className="col car-info">
          <div className="row">{passedCar.seats} seats</div>
          <div className="row">{passedCar.doors} doors</div>
          <div className="row">{isAirConditioned(passedCar)}</div>
        </div>
        <div className="col-2 car-price">
          <div className="text-center">{passedCar.pricePerDay}</div>
          <div className="row g-0">
            <div className="col">
              <button className="btn-dark w-100">Edit</button>
            </div>
            <div className="col">
              <button className="btn-danger w-100">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarListItemComponent;
