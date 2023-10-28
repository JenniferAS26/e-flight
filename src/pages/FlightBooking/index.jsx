import PaymentForm from '../../components/PaymentForm'
import Ticket from '../../components/Ticket'
import PassengerRegister from '../../components/PassengerRegister'

const FlightBooking = () => {
    return (<>
        <PassengerRegister />
        {/* <PassengerForm /> */}
        <PaymentForm />
        <Ticket />
    </>);
};

export default FlightBooking;
