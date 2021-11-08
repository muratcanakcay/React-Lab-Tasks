import { NameTemplate, AddressDetailsTemplate } from './Templates'

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

export const addressDataValidator = (data: AddressDetailsTemplate) => {
    let warnings: any = {}

    if (!data.street)
        warnings.street = 'You must enter a street address'

    if (!data.zipCode)
        warnings.zipCode = 'You must enter a zip code'
    else if (!/^\d{2}-\d{3}$/.test(data.zipCode))
        warnings.zipCode = 'Zip code format is incorrect'

    if (!data.city)
        warnings.city = 'You must enter a city name'

    return warnings
}