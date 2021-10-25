import React, { useState } from "react";
import { Car } from "../data/Car";

const CarListItemComponent: React.FC<{ passedCar: Car }> = ({ passedCar }) => {
  const [editState, setEditState] = useState(false);

  return <div className="carListItemComponent">{passedCar.name}</div>;
};

export default CarListItemComponent;
