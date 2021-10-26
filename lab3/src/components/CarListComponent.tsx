import React, { useState } from "react";
import CarListItemComponent from "./CarListItemComponent";
import { Car } from "../data/Car";
import Cars from "../data/cars.json";

const CarListComponent: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
  const [carsList, setCarsList] = useState(Cars);

  const renderedCarsList = carsList.map((car) => {
    if (car.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return <CarListItemComponent passedCar={car} />;
    } else return <div></div>;
  });

  return <div className="container">{renderedCarsList}</div>;
};

export default CarListComponent;
