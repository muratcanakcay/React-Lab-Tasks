import React, { useState } from "react";
import PriceBox from "./PriceBox";
import { Car } from "../data/Car";

const CarListItemComponent: React.FC<{
    passedCar: Car,
    deleteCallback: (passedCar: Car) => void,
    editCallback: (passedCar: Car, newPrice: number) => void
}> = ({ passedCar, deleteCallback }) => {

    const [editPriceMode, setEditPriceMode] = useState(false)

    const onDelete = () => {
        deleteCallback(passedCar);
    }

    const onPriceChange = (newPriceString: string) => {
        const newPrice = parseInt(newPriceString, 10)

        if (!isNaN(newPrice) && newPrice > 0) {
            console.log("updating price!")
        }

        setEditPriceMode(!editPriceMode)
    }

    return (
        <div className="carListItemComponent row border p-3">

            {/* TODO: align pics vertically in border */}
            <div className="col-6 col-md-3 col-lg-2 border ">
                <div>
                    <img
                        className="car-image img-fluid"
                        alt={passedCar.name}
                        src={passedCar.image}
                    />
                </div>
            </div>

            <div className="col">
                <div className="row">

                    <div className="col-12 col-md-3">
                        <h4>{passedCar.name}</h4>
                    </div>

                    <div className="col">
                        <ul>
                            <li>{passedCar.seats} seats</li>
                            <li>{passedCar.doors} doors</li>
                            {passedCar.AC && <li>air conditioning</li>}
                        </ul>
                    </div>

                    <div className="col-12 col-md-3 d-flex justify-content-end">
                        <div>
                            <PriceBox passedCar={passedCar} editPriceMode={editPriceMode} onPriceChange={onPriceChange} />
                            <div className="btn-group">
                                <button className="btn-dark w-100" onClick={() => setEditPriceMode(!editPriceMode)}>Edit</button>
                                <button className="btn-danger w-100 ms-3" onClick={onDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarListItemComponent;
