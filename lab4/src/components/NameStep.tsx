import React from "react"
import { NameTemplate } from "./Templates"
import { useNameData } from "./CustomHooks"
import NextButton from "./NextButton"

const NameStep: React.FC<{
    passedNameData: NameTemplate
    onNameDataChange: (newNameData: NameTemplate) => void,
    setStep: (step: number) => void
    isReadOnly: boolean
}> = ({ passedNameData, onNameDataChange, setStep, isReadOnly }) => {

    const [nameData, warnings, setNameData] = useNameData(passedNameData)

    const onValueChange = (e: any) => {
        const newNameData = { ...nameData, [e.target.name]: e.target.value }
        setNameData(newNameData)
    }

    const onNextButtonClicked = (): void => onNameDataChange(nameData)

    return (
        <div>

            <div className='row'>
                <div className='col-md-6 mb-3'>
                    <label className="form-label">First Name</label>
                    <input className="form-control"
                        name="firstName"
                        type='text'
                        onChange={onValueChange}
                        readOnly={isReadOnly}
                        value={nameData.firstName || ""} />
                    {warnings.firstName &&
                        <div style={{ color: "red" }}>
                            {warnings.firstName}
                        </div>
                    }
                </div>

                <div className='col-md-6 mb-3'>
                    <label className="form-label">Last Name</label>
                    <input className="form-control"
                        name="lastName"
                        type='text'
                        onChange={onValueChange}
                        readOnly={isReadOnly}
                        value={nameData.lastName || ""} />
                    {warnings.lastName &&
                        <div style={{ color: "red" }}>
                            {warnings.lastName}
                        </div>
                    }
                </div>

                <div className='col-md mb-3'>
                    <label className="form-label">Email Address</label>
                    <input className="form-control"
                        name="email"
                        type='email'
                        onChange={onValueChange}
                        readOnly={isReadOnly}
                        placeholder={"example@domain.com"}
                        value={nameData.email || ""} />
                    {warnings.email &&
                        <div style={{ color: "red" }}>
                            {warnings.email}
                        </div>
                    }
                </div>
            </div>

            {!isReadOnly &&
                <div className='d-flex justify-content-end'>
                    <NextButton warnings={[warnings]} callback={onNextButtonClicked} />
                </div>
            }

        </div>
    )
}

export default NameStep