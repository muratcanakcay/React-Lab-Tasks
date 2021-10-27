import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CarListItemComponent from "./CarListItemComponent";
import { Car } from "../data/Car";
import Cars from "../data/cars.json";

const CarListComponent: React.FC = () => {
    const [carsList, setCarsList] = useState(Cars);
    const [searchTerm, setSearchTerm] = useState("");

    const onTermSubmit = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    };

    const onDeleteClicked = (passedCar: Car) => {
        setCarsList(carsList.filter((car) => car !== passedCar))
    }

    const onEditSubmitted = (passedCar: Car, newPrice: number) => {


    }

    const renderedCarsList = carsList.map((car: Car) => {
        if (car.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return <CarListItemComponent passedCar={car} deleteCallback={onDeleteClicked} editCallback={onEditSubmitted} />;
        }
        else return "";
    });

    return (
        <div>
            <div className="container mb-4 border">
                <SearchBar onSubmit={onTermSubmit} />
            </div>
            {renderedCarsList}
        </div>
    )
};

export default CarListComponent;
