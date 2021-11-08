import React from "react"
import { useEffect } from "react"
import { AddressDetailsTemplate } from "./Templates"
import { useAddressData } from "./CustomHooks"

const AddressDetails: React.FC<{
    passedAddressData: AddressDetailsTemplate,
    onAddressChanged: (newAddress: AddressDetailsTemplate, warnings: any) => void,
    isReadOnly: boolean
}> = ({ passedAddressData, onAddressChanged, isReadOnly }) => {
    const [addressData, warnings, setAddressData] = useAddressData(passedAddressData)

    const onValueChange = (e: any): void => {
        console.log("value changed")
        setAddressData({ ...addressData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (!isReadOnly) {
            onAddressChanged(addressData, warnings)
            console.log(addressData)
        }
    }, [onAddressChanged, addressData, warnings, isReadOnly])

    return (
        <div className='row'>
            <div className='col-md-8 mb-3'>
                <label className='form-label'>Street Address</label>
                <input type='text'
                    name='street'
                    className='form-control'
                    onChange={onValueChange}
                    readOnly={isReadOnly}
                    disabled={isReadOnly}
                    value={addressData.street || ""} />

                {warnings.street &&
                    <div style={{ color: "red" }}>
                        {warnings.street}
                    </div>
                }
            </div>

            <div className='col-md-4 mb-3'>
                <label className='form-label'>Zip Code</label>
                <input type='text'
                    name='zipCode'
                    className='form-control'
                    onChange={onValueChange}
                    readOnly={isReadOnly}
                    placeholder={"12-345"}
                    disabled={isReadOnly}
                    value={addressData.zipCode || ""} />

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
                    readOnly={isReadOnly}
                    disabled={isReadOnly}
                    value={addressData.city || ""} />

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