import React from "react"
import { useEffect } from "react"
import { AddressDetailsTemplate } from "./Templates"
import { useAddressData } from "./CustomHooks"

const AddressDetails: React.FC<{
    passedAddressData: AddressDetailsTemplate,
    onAddressChanged: (newAddress: AddressDetailsTemplate, warnings: any) => void,
    readOnly: boolean
}> = ({ passedAddressData, onAddressChanged, readOnly }) => {
    const [addressData, warnings, setAddressData] = useAddressData(passedAddressData)

    const onValueChange = (e: any): void => {
        const newAddressData = { ...addressData, [e.target.name]: e.target.value }
        setAddressData(newAddressData)
    }

    useEffect(() => {
        onAddressChanged(passedAddressData, warnings)
    }, [passedAddressData, warnings]) // onAddressChanged required in [] ????

    return (
        <div className='row'>
            <div className='col-md-8 mb-3'>
                <label className='form-label'>Street address</label>
                <input type='text'
                    name='street'
                    className='form-control'
                    onChange={onValueChange}
                    readOnly={readOnly} />

                {warnings.street &&
                    <div style={{ color: "red" }}>
                        {warnings.street}
                    </div>
                }
            </div>

            <div className='col-md-4 mb-3'>
                <label className='form-label'>ZIP code</label>
                <input type='text'
                    name='zipCode'
                    className='form-control'
                    onChange={onValueChange}
                    readOnly={readOnly} />

                {warnings.zipCode &&
                    <div style={{ color: "red" }}>
                        {warnings.zipCode}
                    </div>
                }
            </div>

            <div className='col-md mb-3'>
                <label className='form-label'>City</label>
                <input type='text'
                    name='city'
                    className='form-control'
                    onChange={onValueChange}
                    readOnly={readOnly} />

                {warnings.city &&
                    <div style={{ color: "red" }}>
                        {warnings.city}
                    </div>
                }
            </div>
        </div>
    )
}

export default AddressDetails;