import React, { useState } from "react";
import CarListComponent from "./components/CarListComponent";
import SearchBar from "./components/SearchBar";

const App: React.FC = () => {
    //TODO: move search state to CarListComponent
    const [term, setTerm] = useState("");

    const onTermSubmit = (term: string) => {
        setTerm(term);
        console.log("app says:", term);
    };

    return (
        <div className="container">
            <SearchBar onSubmit={onTermSubmit} />
            <hr />
            <CarListComponent searchTerm={term} />
        </div>
    );
};

export default App;
