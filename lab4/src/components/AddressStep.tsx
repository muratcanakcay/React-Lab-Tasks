import React, { useState } from "react"
import { AddressTemplate, AddressDetailsTemplate } from "./Templates"
import AddressDetails from "./AddressDetails"
import NextButton from "./NextButton"
const NameStep: React.FC<{
    passedAddressData: AddressTemplate,
    onAddressDataChange: (newAddressData: AddressTemplate, deliveryAsInvoice: boolean) => void,
    setStep: (step: number) => void
    isReadOnly: boolean
    useDeliveryAsInvoice: boolean

}> = ({ passedAddressData, onAddressDataChange, setStep, isReadOnly, useDeliveryAsInvoice }) => {

    const [deliveryAddressData, setDeliveryAddressData] = useState(passedAddressData.deliveryAddress)
    const [invoiceAddressData, setInvoiceAddressData] = useState(passedAddressData.invoiceAddress)
    const [deliveryWarnings, setDeliveryWarnings] = useState({})
    const [invoiceWarnings, setInvoiceWarnings] = useState({})
    const [deliveryAsInvoice, setDeliveryAsInvoice] = useState(useDeliveryAsInvoice)


    const onDeliveryAddressChange = (newAddress: AddressDetailsTemplate, warnings: any) => {
        setDeliveryAddressData(newAddress)
        setDeliveryWarnings(warnings)
    }

    const onInvoiceAddressChange = (newAddress: AddressDetailsTemplate, warnings: any) => {
        setInvoiceAddressData(newAddress)
        setInvoiceWarnings(warnings)
    }

    const onCheckboxClicked = (e: any): void => {
        setDeliveryAsInvoice(e.target.checked)

        if (e.target.checked) {
            console.log("ifchecked")
            onInvoiceAddressChange(deliveryAddressData, deliveryWarnings)
        }
    }

    const onNextButtonClicked = (): void => {
        if (deliveryAsInvoice)
            onAddressDataChange({
                ...passedAddressData,
                deliveryAddress: deliveryAddressData,
                invoiceAddress: deliveryAddressData,

            },
                deliveryAsInvoice
            )

        else
            onAddressDataChange({
                ...passedAddressData,
                deliveryAddress: deliveryAddressData,
                invoiceAddress: invoiceAddressData
            },
                deliveryAsInvoice
            )
    }

    return (
        <div>
            <h3>Delivery Address</h3>
            <AddressDetails passedAddressData={deliveryAddressData} onAddressChanged={onDeliveryAddressChange} isReadOnly={isReadOnly} />
            <hr />

            <h3>Invoice Address</h3>

            {!isReadOnly &&
                <div className="mb-3 form-check">
                    <input id="delivery_as_invoice"
                        type="checkbox"
                        checked={deliveryAsInvoice}
                        className="form-check-input"
                        onChange={onCheckboxClicked} />
                    <label htmlFor="delivery_as_invoice" className="form-check-label">
                        Use the delivery address for invoice
                    </label>
                </div>
            }

            {deliveryAsInvoice
                ? <AddressDetails passedAddressData={deliveryAddressData} onAddressChanged={onInvoiceAddressChange} isReadOnly={true} />
                : <AddressDetails passedAddressData={invoiceAddressData} onAddressChanged={onInvoiceAddressChange} isReadOnly={isReadOnly} />
            }

            {!isReadOnly &&
                <div className='d-flex justify-content-end'>
                    <NextButton warnings={[deliveryWarnings, invoiceWarnings]} callback={onNextButtonClicked} />
                </div>
            }


        </div>
    )
}

export default NameStep