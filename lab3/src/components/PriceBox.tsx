import React, { useState } from 'react'
import { Car } from "../data/Car";

const PriceBox: React.FC<{
    passedCar: Car,
    editPriceMode: boolean
    onPriceChange: (newPrice: string) => void
}> = ({ passedCar, editPriceMode, onPriceChange }) => {
    const [newPrice, setNewPrice] = useState(passedCar.pricePerDay.toString());

    const onFormSubmit = (e: any) => {
        e.preventDefault();

        onPriceChange(newPrice)

        console.log("submitted!", newPrice)
    };

    if (editPriceMode) {
        return (
            <div className="row mb-2">
                <p>Enter new price</p>
                <form className="form" onSubmit={onFormSubmit}>
                    <input
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                        type="text" />
                </form>
            </div>)
    }
    else {
        return (
            <div className="row">
                <p>Price per day</p>
                <h4>
                    {passedCar.pricePerDay} PLN
                </h4>
            </div>
        )
    }
}

export default PriceBox