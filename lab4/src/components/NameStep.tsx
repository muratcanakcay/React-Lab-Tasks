import React from "react"
import { NameTemplate } from "./Templates"
import { useNameData } from "./CustomHooks"
import NavButton from "./NavButton"
import Warning from "./Warning"


const NameStep: React.FC<{
    passedNameData: NameTemplate
    onNameDataChange: (newNameData: NameTemplate) => void,
    isReadOnly: boolean
}> = ({ passedNameData, onNameDataChange, isReadOnly }) => {

    const [nameData, warnings, setNameData] = useNameData(passedNameData)

    const onValueChange = (e: any) => {
        const newNameData = { ...nameData, [e.target.name]: e.target.value }
        setNameData(newNameData)
    }

    const onNextButtonClicked = (): void => onNameDataChange(nameData)

    return (
        <div>
            <div className="row my-4">
                <h3 >Name and E-mail</h3 >
                <hr />
            </div>

            <div className='row'>
                <div className='col-md-6 mb-3'>
                    <label className="form-label">First Name</label>
                    <input className="form-control"
                        name="firstName"
                        type='text'
                        onChange={onValueChange}
                        readOnly={isReadOnly}
                        value={nameData.firstName || ""} />

                    <Warning warningText={warnings.firstName} />
                </div>

                <div className='col-md-6 mb-3'>
                    <label className="form-label">Last Name</label>
                    <input className="form-control"
                        name="lastName"
                        type='text'
                        onChange={onValueChange}
                        readOnly={isReadOnly}
                        value={nameData.lastName || ""} />

                    <Warning warningText={warnings.lastName} />
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

                    <Warning warningText={warnings.email} />
                </div>
            </div>

            {!isReadOnly &&
                <div className='d-flex justify-content-end'>
                    <NavButton buttonText="Next" warnings={[warnings]} callback={onNextButtonClicked} />
                </div>
            }

        </div>
    )
}

export default NameStep