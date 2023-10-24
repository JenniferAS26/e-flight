import PaymentForm from "../../components/PaymentForm";
import PassengerForm from '../../components/PassengerForm'
import Ticket from '../../components/Ticket'

const FlightBooking = () => {
    return (<>
        <PaymentForm />
        <PassengerForm />
        <Ticket />
    </>);
};

export default FlightBooking;
