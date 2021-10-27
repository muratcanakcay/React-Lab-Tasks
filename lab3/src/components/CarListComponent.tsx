import React, { useState } from "react"
import SearchBar from "./SearchBar"
import CarListItemComponent from "./CarListItemComponent"
import { Car } from "../data/Car"
import Cars from "../data/cars.json"

const CarListComponent: React.FC = () => {

    const [carsList, setCarsList] = useState(Cars)
    const [searchTerm, setSearchTerm] = useState("")

    const onTermSubmit = (searchTerm: string) => {
        setSearchTerm(searchTerm)
    };

    const onDeleteClicked = (passedCar: Car) => {
        setCarsList(carsList.filter((currentCar) =>
            currentCar !== passedCar))
    }

    const onEditSubmitted = (passedCar: Car, newPrice: number) => {
        setCarsList(carsList.map((currentCar) =>
            currentCar !== passedCar ? currentCar : { ...passedCar, pricePerDay: newPrice }))
    }

    const renderedCarsList = carsList.map((car: Car) => {
        if (car.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return <div key={car.name}>
                < CarListItemComponent
                    passedCar={car}
                    deleteCallback={onDeleteClicked}
                    editCallback={onEditSubmitted} />
            </div >
        }
        else return ""
    });

    return (
        <div>
            <div className="container my-4 pb-3 border">
                <SearchBar onTermSubmit={onTermSubmit} />
            </div>
            <div className="container">
                {renderedCarsList}
            </div>
        </div>
    )
}

export default CarListComponent
