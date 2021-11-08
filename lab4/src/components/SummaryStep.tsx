import NameStep from "./NameStep"
import { NameTemplate } from "./Templates"
import AddressDetails from "./AddressDetails"
import { AddressTemplate } from "./Templates"
import NavButton from "./NavButton"

const SummaryStep: React.FC<{
    passedNameData: NameTemplate
    passedAddressData: AddressTemplate
    setStep: (step: number) => void
}> = ({ passedNameData, passedAddressData, setStep }) => {
    return (
        <div>
            <div className="row my-2">
                <h2 >Summary</h2 >
                <hr />
            </div>

            <NameStep
                passedNameData={passedNameData}
                onNameDataChange={() => { }}
                isReadOnly={true}
            />

            <div className="row my-2">
                <h3 >Delivery Address</h3 >
                <hr />
            </div>

            <AddressDetails
                passedAddressData={passedAddressData.deliveryAddress}
                onAddressChanged={() => { }}
                isReadOnly={true}
            />

            <div className="row my-2">
                <h3 >Invoice Address</h3 >
                <hr />
            </div>

            <AddressDetails
                passedAddressData={passedAddressData.invoiceAddress}
                onAddressChanged={() => { }}
                isReadOnly={true}
            />
            <hr />

            <div className='d-flex justify-content-start'>
                <NavButton buttonText="Back to Name Step" warnings={[]} callback={() => setStep(0)} />
                <NavButton buttonText="Back to Address Step" warnings={[]} callback={() => setStep(1)} />
            </div>



        </div>
    )
}

export default SummaryStep