import React, { useState, useEffect } from "react";
import CarListItemComponent from "./CarListItemComponent";
import { Car } from "../data/Car";
import Cars from "../data/cars.json";

const CarListComponent: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
    const [carsList, setCarsList] = useState(Cars);

    const onDeleteClicked = (indexNo: number) => {
        setCarsList(carsList.filter((car, index) => index != indexNo))
    }

    const renderedCarsList = carsList.map((car: Car, index: number) => {
        if (car.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return <CarListItemComponent passedCar={car}
                indexNo={index}
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
