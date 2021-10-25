import React, { useState } from "react";
import CarListItemComponent from "./CarsListItemComponent";
import { Car } from "../data/Car";

const CarListComponent: React.FC<{ carsList: Car[] }> = ({ carsList }) => {
  const renderedCarsList = carsList.map((car) => {
    return <CarListItemComponent passedCar={car} />;
  });

  return <div>{renderedCarsList}</div>;
};

export default CarListComponent;
