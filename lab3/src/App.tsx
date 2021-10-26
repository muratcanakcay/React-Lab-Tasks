import React, { useState } from "react";
import CarListComponent from "./components/CarListComponent";
import SearchBar from "./components/SearchBar";
import { Car } from "./data/Car";
import Cars from "./data/cars.json";

const App: React.FC = () => {
  const [carsList, setCarsList] = useState(Cars);
  const [term, setTerm] = useState("");

  const onTermSubmit = (term: string) => {
    setTerm(term);
    console.log("app says:", term);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={onTermSubmit} />
      <CarListComponent carsList={carsList} searchTerm={term} />
    </div>
  );
};

export default App;
