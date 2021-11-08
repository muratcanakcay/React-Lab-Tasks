import React, { useState } from "react"
import { AddressTemplate, AddressDetailsTemplate } from "./Templates"
import { useAddressData } from "./CustomHooks"
import AddressDetails from "./AddressDetails"
import { read } from "fs"
import { readConfigFile } from "typescript"

const NameStep: React.FC<{ passedAddressData: AddressTemplate }> = ({ passedAddressData }) => {

    const [deliveryAddressData, setDeliveryAddressData] = useState(passedAddressData.deliveryAddress)
    const [invoiceAddressData, setInvoiceAddressData] = useState(passedAddressData.invoiceAddress)
    const [deliveryWarnings, setDeliveryWarnings] = useState({})
    const [invoiceWarnings, setInvoiceWarnings] = useState({})

    const onDeliveryAddressChange = (newAddress: AddressDetailsTemplate, warnings: any) => {
        setDeliveryAddressData(newAddress)
        setDeliveryWarnings(warnings)
    }

    const onInvoiceAddressChange = (newAddress: AddressDetailsTemplate, warnings: any) => {
        setInvoiceAddressData(newAddress)
        setInvoiceWarnings(warnings)
    }

    return (
        <div>
            <h3>Delivery Address</h3>
            <AddressDetails passedAddressData={deliveryAddressData} onAddressChanged={onDeliveryAddressChange} readOnly={false} />
            <hr />
            <h3>Invoice Address</h3>
            <AddressDetails passedAddressData={invoiceAddressData} onAddressChanged={onInvoiceAddressChange} readOnly={false} />


        </div>
    )
}

export default NameStep