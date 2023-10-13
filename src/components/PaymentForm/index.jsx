    import React, { useState } from "react";
    import './Payment.scss'

    const PaymentForm = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [sameAddress, setSameAddress] = useState(false);
    const [expiryDate, setExpiryDate] = useState("");
    const [nationality, setNationality] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("paymentData", JSON.stringify({ paymentMethod, sameAddress, expiryDate, nationality }));
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>
            <input type="radio" value="Visa" checked={paymentMethod === "Visa"} onChange={() => setPaymentMethod("Visa")} />
            Visa
            </label>
            <label>
            <input type="radio" value="PayPal" checked={paymentMethod === "PayPal"} onChange={() => setPaymentMethod("PayPal")} />
            PayPal
            </label>
        </div>
        <div>
            <label>
            <input type="checkbox" checked={sameAddress} onChange={() => setSameAddress(!sameAddress)} />
            Use same address
            </label>
        </div>
        <div>
            <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
        </div>
        <div>
            <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
            {/* Aquí puedes agregar las opciones de nacionalidad */}
            <option value="">Select...</option>
            <option value="Colombia">Colombia</option>
            {/* ... */}
            </select>
        </div>
        <button type="submit">Submit</button>
        </form>
    );
    };

    export default PaymentForm;
