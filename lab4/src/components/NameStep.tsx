import React from 'react'

const NameStep = () => {
    return (
        <div>

            <div className='row'>
                <div className='col-md-6 mb-3'>
                    <label className="form-label">First Name</label>
                    <input className="form-control"
                        type='text' />
                    <div>
                        errorMessage
                    </div>
                </div>

                <div className='col-md-6 mb-3'>
                    <label className="form-label">Last Name</label>
                    <input className="form-control"
                        type='text' />
                    errorMessage
                </div>

                <div className='col-md mb-3'>
                    <label className="form-label">Email Address</label>
                    <input className="form-control"
                        type='email' />
                    errorMessage
                </div>
            </div>

        </div>
    )
}

export default NameStep