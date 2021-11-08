import React, { useState } from 'react'
import NameStep from './NameStep'
import AddressStep from './AddressStep'
import SummaryStep from './SummaryStep'
import { AddressTemplate, NameTemplate } from "./Templates"


const CustomerForm = () => {
    const [step, setStep] = useState(0)
    const [nameData, setNameData] = useState({} as NameTemplate)
    const [addressData, setAddressData] = useState({ deliveryAddress: {}, invoiceAddress: {} } as AddressTemplate)
    const [deliveryAsInvoice, setDeliveryAsInvoice] = useState(false)

    const renderedPage = (step: number) => {
        if (step === 0) return (
            <NameStep
                passedNameData={nameData}
                onNameDataChange={onNameDataChange}
                setStep={setStep}
                isReadOnly={false}
            />
        )
        if (step === 1) return (
            <AddressStep
                passedAddressData={addressData}
                onAddressDataChange={onAddressDataChange}
                useDeliveryAsInvoice={deliveryAsInvoice}
                setStep={setStep}
                isReadOnly={false} />
        )
        if (step === 2) return (
            <SummaryStep />
        )
    }

    const onNameDataChange = (newNameData: NameTemplate) => {
        setNameData(newNameData)
        setStep(1)
    }

    const onAddressDataChange = (newAddressData: AddressTemplate, deliveryAsInvoice: boolean) => {
        setAddressData(newAddressData)
        console.log("CustomerForm:")
        console.log(newAddressData.deliveryAddress)
        console.log(newAddressData.invoiceAddress)
        setDeliveryAsInvoice(deliveryAsInvoice)
        setStep(2)
    }

    return (
        <div className="container mt-5">
            {renderedPage(step)}
            <div>
                <button className="btn btn-dark" onClick={() => { setStep((step + 1) % 3) }}>Next</button>
            </div>
        </div>
    )
}

export default CustomerForm