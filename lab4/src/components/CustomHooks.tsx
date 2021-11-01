import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { NameTemplate, AddressTemplate } from "./Templates"
import { nameDataValidator } from "./Validators";

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