import React, { useState } from 'react'
import NameStep from './NameStep'
import AddressStep from './AddressStep'
import SummaryStep from './SummaryStep'
import { AddressTemplate, NameTemplate } from "./Templates"


const CustomerForm = () => {
    const [step, setStep] = useState(0)
    const [nameData, setNameData] = useState({} as NameTemplate)
    const [addressData, setAddressData] = useState({ deliveryAddress: {}, invoiceAddress: {} } as AddressTemplate)

    const renderedPage = (step: number) => {
        if (step === 0) return (
            <NameStep passedNameData={nameData} />
        )
        if (step === 1) return (
            <AddressStep passedAddressData={addressData} />
        )
        if (step === 2) return (
            <SummaryStep />
        )
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