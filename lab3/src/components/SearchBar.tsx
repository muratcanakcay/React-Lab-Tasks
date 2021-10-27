import React, { useState } from "react"

const SearchBar: React.FC<{
    onTermSubmit: (term: string) => void
}> = ({ onTermSubmit }) => {

    const [term, setTerm] = useState("")

    const onFormSubmit = (e: any) => {
        e.preventDefault()
        onTermSubmit(term)
    }

    return (
        <div className="container mt-4">
            <form className="form" onSubmit={onFormSubmit}>
                <div className="row align-items-start g-0">

                    <div className="col-sm-5 col-md-3 col-lg-2">
                        <label><h5>Search for car:</h5></label>
                    </div>

                    <div className="col-sm-4 pe-3">
                        <input
                            className="w-100"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            type="text"
                        />
                    </div>

                    <div className="col-sm-3">
                        <button className="btn-dark">Submit</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default SearchBar
