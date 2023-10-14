    import { useState } from "react";
    import './Payment.scss'
    import paypalIcon from '../../assets/icons/paypal.svg';
    import visaIcon from '../../assets/icons/visa.svg';
    import mastercardIcon from '../../assets/icons/mastercard.svg';
    import amexIcon from '../../assets/icons/amex.svg';

    const PaymentForm = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [sameAddress, setSameAddress] = useState(false);
    const [expiryDate, setExpiryDate] = useState("");
    const [nationality, setNationality] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("paymentData", JSON.stringify({ 
        paymentMethod, sameAddress, expiryDate, nationality, cardName, cardNumber, cvv, postalCode, address 
        }));

        // Restablecer todos los campos a sus valores iniciales
        setPaymentMethod("");
        setSameAddress(false);
        setExpiryDate("");
        setNationality("");
        setCardName("");
        setCardNumber("");
        setCvv("");
        setPostalCode("");
        setAddress("");
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className="payment-method">
            <label className="label">
            <input type="radio" value="Visa" checked={paymentMethod === "Visa"} onChange={() => setPaymentMethod("Visa")} />
            Visa
            <img src={visaIcon} alt="Visa" />
            <img src={mastercardIcon} alt="Mastercard" />
            <img src={amexIcon} alt="Amex" />
            </label>
            <label>
            <input type="radio" value="PayPal" checked={paymentMethod === "PayPal"} onChange={() => setPaymentMethod("PayPal")} />
            PayPal
            <img src={paypalIcon} alt="PayPal" />
            </label>
        </div>
        <div>
            <label>
            Name on Card
            <input type="text" placeholder="Enter name on card" value={cardName} onChange={(e) => setCardName(e.target.value)} />
            </label>
        </div>
        <div>
            <label>
            Card Number
            <input type="text" placeholder="Enter card number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            </label>
        </div>
        <div>
            <label>
            CVV
            <input type="text" placeholder="Enter CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} />
            </label>
        </div>
        <div>
            <label>
            Expiration Date
            <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
            </label>
        </div>
        <div>
            <label>
            Zip/Postal Code
            <input type="text" placeholder="Enter Zip/Postal code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
            </label>
        </div>
        <div>
            <label>
            Address
            <input type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
        </div>
        <div>
            <label>
            Use same address
            <input type="checkbox" checked={sameAddress} onChange={() => setSameAddress(!sameAddress)} />
            </label>
        </div>
        <div>
            <label>
            Nationality
            <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
                <option value="">Select...</option>
                <option value="Colombia">Colombia</option>
                {/* Agrega más opciones de nacionalidad aquí */}
            </select>
            </label>
        </div>
        <button type="submit">Submit</button>
        </form>
    );
    };

    export default PaymentForm;
