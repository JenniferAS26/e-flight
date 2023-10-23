import React from 'react';
import './PassengerForm.scss';
import alertIcon from '../../assets/icons/alert.svg';
import idIcon from '../../assets/icons/id.svg';
import userIcon from '../../assets/icons/user-icon.svg';

class PassengerForm extends React.Component {
    render() {
        return (
        <div className="App">
            <div className="section">
            <img src={alertIcon} alt="Alert Icon" />
            <h2>Passenger details</h2>
            <p>Name as on ID card/passport without title and punctuation</p>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Surname" />
                <input type="text" placeholder="Title" />
                <input type="date" placeholder="Birthday" />
                <input type="text" placeholder="Nationality" />
            </form>
            </div>

            <div className="section">
            <img src={idIcon} alt="ID Icon" />
            <h2>Identity</h2>
            <p>Passport valid for at least 6 months from departure date is required for international travel or transit abroad</p>
            <form>
                <input type="text" placeholder="Passport number" />
                <input type="text" placeholder="Country of Issue" />
                <input type="date" placeholder="Passport Expiry Date" />
            </form>
            </div>

            <div className="section">
            <img src={userIcon} alt="User Icon" />
            <h2>Contact details</h2>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Surname" />
                <input type="text" placeholder="Title" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone number" />
            </form>
            </div>

            <button>Submit</button>
        </div>
        );
    }
}

export default PassengerForm;