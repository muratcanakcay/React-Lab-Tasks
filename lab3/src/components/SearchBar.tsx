import React, { useState } from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="container mt-4">
      <form className="form">
        <div className="row align-items-start">
          <div className="col-auto">
            <label>Car search</label>
          </div>
          <div className="col">
            <input type="text" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
