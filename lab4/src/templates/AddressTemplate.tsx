export interface AddressTemplate {
    deliveryAddress: AddressDetailsTemplate
    invoiceAddress: AddressDetailsTemplate
}

export interface AddressDetailsTemplate {
    street: string,
    zipCode: string,
    city: string
}