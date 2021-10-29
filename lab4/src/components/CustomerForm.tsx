import React, { useState } from 'react'
import NameStep from './NameStep'
import AddressStep from './AddressStep'
import SummaryStep from './SummaryStep'


const CustomerForm = () => {
    const [step, setStep] = useState(1)

    const renderedPage = (step: number) => {
        if (step === 1) return (
            <NameStep />
        )
        if (step === 2) return (
            <AddressStep />
        )
        if (step === 3) return (
            <SummaryStep />
        )
    }
    return (
        <div onClick={() => { setStep((step + 1) % 3 + 1) }}>
            {renderedPage(step)}
        </div>
    )
}

export default CustomerForm