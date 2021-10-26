import React, { useState } from "react";
import CarListItemComponent from "./CarsListItemComponent";
import { Car } from "../data/Car";

const CarListComponent: React.FC<{ carsList: Car[]; searchTerm: string }> = ({
  carsList,
  searchTerm,
}) => {
  const renderedCarsList = carsList.map((car) => {
    if (car.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return <CarListItemComponent passedCar={car} />;
    } else return <div></div>;
  });

  return <div className="container">{renderedCarsList}</div>;
};

export default CarListComponent;
