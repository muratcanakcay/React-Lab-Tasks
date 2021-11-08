import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { NameTemplate, AddressDetailsTemplate } from "./Templates"
import { nameDataValidator, addressDataValidator } from "./Validators";

export const useNameData = (
    passedNameData: NameTemplate
): [NameTemplate, any, Dispatch<SetStateAction<NameTemplate>>] => {
    const [warnings, setWarnings] = useState({})
    const [nameData, setNameData] = useState(passedNameData)

    useEffect(() => {
        setWarnings(nameDataValidator(nameData))
    }, [nameData])

    return [nameData, warnings, setNameData]
}

export const useAddressData = (
    passedAddressData: AddressDetailsTemplate
): [AddressDetailsTemplate, any, Dispatch<SetStateAction<AddressDetailsTemplate>>] => {
    const [warnings, setWarnings] = useState({})
    const [addressData, setAddressData] = useState<AddressDetailsTemplate>(passedAddressData)

    useEffect(() => {
        setWarnings(addressDataValidator(addressData))
    }, [addressData])

    return [addressData, warnings, setAddressData]
}
