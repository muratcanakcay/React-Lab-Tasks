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
    };

    if (editPriceMode) {
        return (
            <div className="row mb-2">
                <h5>Enter new price</h5>
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
                <h5>Price per day</h5>
                <h4>
                    {passedCar.pricePerDay} PLN
                </h4>
            </div>
        )
    }
}

export default PriceBox