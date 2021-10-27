import React, { useState, useEffect } from "react";
import CarListItemComponent from "./CarListItemComponent";
import { Car } from "../data/Car";
import Cars from "../data/cars.json";

const CarListComponent: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
    const [carsList, setCarsList] = useState(Cars);

    const onDeleteClicked = (passedCar: Car) => {
        setCarsList(carsList.filter((car) => car != passedCar))
    }

    const renderedCarsList = carsList.map((car: Car) => {
        if (car.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return <CarListItemComponent passedCar={car}
                deleteCallback={onDeleteClicked} />;
        } else return "";
    });

    return (
        <div>
            {renderedCarsList}
        </div>
    )
};

export default CarListComponent;
