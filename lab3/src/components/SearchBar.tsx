import React, { useState } from "react";

const SearchBar: React.FC<{ onSubmit: (term: string) => void }> = ({
  onSubmit,
}) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(term);
    console.log("searchbox says:", term);
  };

  return (
    <div className="container mt-4">
      <form className="form" onSubmit={onFormSubmit}>
        <div className="row align-items-start g-0">
          <div className="col-sm-2">
            <label>Car search</label>
          </div>
          <div className="col-sm-4">
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              type="text"
            />
          </div>
          <div className="col-sm-4">
            <button className="btn-dark">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
