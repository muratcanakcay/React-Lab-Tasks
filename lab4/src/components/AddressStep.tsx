import React, { useState } from "react"
import { AddressTemplate, AddressDetailsTemplate } from "./Templates"
import AddressDetails from "./AddressDetails"
import NavButton from "./NavButton"

const AddressStep: React.FC<{
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

    const onNextButtonClicked = (): void => {
        onAddressDataChange({
            ...passedAddressData,
            deliveryAddress: deliveryAddressData,
            invoiceAddress: invoiceAddressData,
        },
            deliveryAsInvoice
        )
    }

    return (
        <div>
            <div className="row my-4">
                <h3 >Delivery Address</h3 >
                <hr />
            </div>

            <AddressDetails passedAddressData={deliveryAddressData} onAddressChanged={onDeliveryAddressChange} isReadOnly={isReadOnly} />
            <hr />

            <div className="row my-4">
                <h3 >Invoice Address</h3 >
                <hr />
            </div>

            {!isReadOnly &&
                <div className="mb-3 form-check">
                    <input id="delivery_as_invoice"
                        type="checkbox"
                        checked={deliveryAsInvoice}
                        className="form-check-input"
                        onChange={(e) => setDeliveryAsInvoice(e.target.checked)} />
                    <label htmlFor="delivery_as_invoice" className="form-check-label">
                        Use the delivery address for invoice
                    </label>
                </div>
            }

            <AddressDetails
                passedAddressData={deliveryAsInvoice ? deliveryAddressData : invoiceAddressData}
                onAddressChanged={onInvoiceAddressChange}
                isReadOnly={deliveryAsInvoice ? true : isReadOnly} />

            {!isReadOnly &&
                <div className='d-flex justify-content-between'>
                    <NavButton buttonText="Back to Name Step" warnings={[]} callback={() => setStep(0)} />
                    <NavButton buttonText="Next" warnings={[deliveryWarnings, invoiceWarnings]} callback={onNextButtonClicked} />
                </div>
            }


        </div>
    )
}

export default AddressStep