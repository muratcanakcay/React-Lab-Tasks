import React, { useState } from 'react'
import { NameTemplate } from "./Templates"
import { useNameData } from "./CustomHooks"

const NameStep: React.FC<{ passedNameData: NameTemplate }> = ({ passedNameData }) => {

    const [nameData, warnings, setNameData] = useNameData(passedNameData)

    const onValueChange = (e: any) => {
        const newNameData = { ...nameData, [e.target.name]: e.target.value }
        setNameData(newNameData)
    }

    return (
        <div>

            <div className='row'>
                <div className='col-md-6 mb-3'>
                    <label className="form-label">First Name</label>
                    <input className="form-control"
                        name="firstName"
                        type='text'
                        onChange={onValueChange} />
                    {warnings.firstName &&
                        <div style={{ color: "red" }}>
                            {warnings.firstName}
                        </div>
                    }
                </div>

                <div className='col-md-6 mb-3'>
                    <label className="form-label">Last Name</label>
                    <input className="form-control"
                        name="lastName"
                        type='text'
                        onChange={onValueChange} />
                    {warnings.lastName &&
                        <div style={{ color: "red" }}>
                            {warnings.lastName}
                        </div>
                    }
                </div>

                <div className='col-md mb-3'>
                    <label className="form-label">Email Address</label>
                    <input className="form-control"
                        name="email"
                        type='email'
                        onChange={onValueChange} />
                    {warnings.email &&
                        <div style={{ color: "red" }}>
                            {warnings.email}
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default NameStep