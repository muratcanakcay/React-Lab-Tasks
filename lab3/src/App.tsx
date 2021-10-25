import React, { useState } from "react";
import CarListComponent from "./components/CarListComponent";
import SearchBar from "./components/SearchBar";
import { Car } from "./data/Car";
import Cars from "./data/cars.json";

const App: React.FC = () => {
  const [carsList, setCarsList] = useState(Cars);
  return (
    <div className="container">
      <SearchBar />
      <CarListComponent carsList={carsList} />
    </div>
  );
};

export default App;
