import React, { useState } from 'react'
import NameStep from './NameStep'
import AddressStep from './AddressStep'
import SummaryStep from './SummaryStep'


const CustomerForm = () => {
    const [step, setStep] = useState(0)

    const renderedPage = (step: number) => {
        if (step === 0) return (
            <NameStep />
        )
        if (step === 1) return (
            <AddressStep />
        )
        if (step === 2) return (
            <SummaryStep />
        )
    }
    return (
        <div className="container mt-5">
            {renderedPage(step)}
            <div>
                <button className="btn btn-dark" onClick={() => { setStep((step + 1) % 3) }} />
            </div>
        </div>
    )
}

export default CustomerForm