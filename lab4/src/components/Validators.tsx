import React from 'react'
import { NameTemplate } from './Templates'

export const nameDataValidator = (data: NameTemplate) => {
    let warnings: any = {}

    if (!data.firstName)
        warnings.firstName = 'You must enter a first name'

    if (!data.lastName)
        warnings.lastName = 'You must enter a last name'

    if (!data.email)
        warnings.email = 'You must enter an email address'
    else if (!/^\S+@\S+\.\S+$/.test(data.email))
        warnings.email = 'Email address format is incorrect'

    return warnings
}

