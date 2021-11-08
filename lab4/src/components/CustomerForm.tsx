import React, { useState } from 'react'
import NameStep from './NameStep'
import AddressStep from './AddressStep'
import SummaryStep from './SummaryStep'
import { AddressTemplate, NameTemplate } from "./Templates"
import "./CustomerForm.css"

const CustomerForm = () => {
    const [step, setStep] = useState(0)
    const [nameData, setNameData] = useState({} as NameTemplate)
    const [addressData, setAddressData] = useState({ deliveryAddress: {}, invoiceAddress: {} } as AddressTemplate)
    const [deliveryAsInvoice, setDeliveryAsInvoice] = useState(false)

    const renderedPage = (step: number) => {
        if (step === 0) return (
            <NameStep
                passedNameData={nameData}
                onNameDataChange={onNameDataAccepted}
                isReadOnly={false}
            />
        )
        if (step === 1) return (
            <AddressStep
                passedAddressData={addressData}
                onAddressDataChange={onAddressDataAccepted}
                useDeliveryAsInvoice={deliveryAsInvoice}
                setStep={setStep}
                isReadOnly={false}
            />
        )
        if (step === 2) return (
            <SummaryStep
                passedNameData={nameData}
                passedAddressData={addressData}
                setStep={setStep}
                deliveryAsInvoice={deliveryAsInvoice}
            />
        )
    }

    const onNameDataAccepted = (newNameData: NameTemplate) => {
        setNameData(newNameData)
        setStep(1)
    }

    const onAddressDataAccepted = (newAddressData: AddressTemplate, deliveryAsInvoice: boolean) => {
        setAddressData(newAddressData)
        setDeliveryAsInvoice(deliveryAsInvoice)
        setStep(2)
    }

    return (
        <div className="container mt-10">
            {renderedPage(step)}
        </div>
    )
}

export default CustomerForm