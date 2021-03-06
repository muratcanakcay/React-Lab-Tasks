import React from "react"
import { useEffect } from "react"
import { AddressDetailsTemplate } from "./Templates"
import { useAddressData } from "./CustomHooks"
import Warning from "./Warning"

const AddressDetails: React.FC<{
    passedAddressData: AddressDetailsTemplate,
    onAddressChanged: (newAddress: AddressDetailsTemplate, warnings: any) => void,
    isReadOnly: boolean
}> = ({ passedAddressData, onAddressChanged, isReadOnly }) => {

    const [addressData = passedAddressData, warnings, setAddressData] = useAddressData(passedAddressData)

    useEffect(() => {
        setAddressData(passedAddressData)
    }, [setAddressData, passedAddressData])

    useEffect(() => {
        onAddressChanged(addressData, warnings)
    }, [onAddressChanged, addressData, warnings])

    const onValueChange = (e: any): void => {
        setAddressData({ ...addressData, [e.target.name]: e.target.value })
    }

    return (
        <div className='row'>
            <div className='col-md-12 mb-3'>
                <label className='form-label'>Street Address</label>
                <input
                    type='text'
                    name='street'
                    className='form-control'
                    onChange={onValueChange}
                    readOnly={isReadOnly}
                    disabled={isReadOnly}
                    value={addressData.street || ""} />

                <Warning warningText={warnings.street} />
            </div>

            <div className='col-md-4 mb-3'>
                <label className='form-label'>Zip Code</label>
                <input
                    type='text'
                    name='zipCode'
                    className='form-control'
                    onChange={onValueChange}
                    readOnly={isReadOnly}
                    placeholder={"12-345"}
                    disabled={isReadOnly}
                    value={addressData.zipCode || ""} />

                <Warning warningText={warnings.zipCode} />
            </div>

            <div className='col-md-8 mb-3'>
                <label className='form-label'>City</label>
                <input
                    type='text'
                    name='city'
                    className='form-control'
                    onChange={onValueChange}
                    readOnly={isReadOnly}
                    disabled={isReadOnly}
                    value={addressData.city || ""} />

                <Warning warningText={warnings.city} />
            </div>
        </div>
    )
}

export default AddressDetails;