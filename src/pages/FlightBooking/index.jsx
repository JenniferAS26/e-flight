import PaymentForm from "../../components/PaymentForm";
import PassengerForm from '../../components/PassengerForm'
import Ticket from '../../components/Ticket'

const FlightBooking = () => {
    return (<>
        <PassengerForm />
        <PaymentForm />
        <Ticket />
    </>);
};

export default FlightBooking;
