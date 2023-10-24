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
                        <div className="input-container">
                            <label>Name</label>
                            <input className="name" type="text" />
                        </div>
                        <div className="input-container">
                            <label>Surname</label>
                            <input type="text" />
                        </div>
                        <div className="input-container">
                            <label>Title</label>
                            <input type="text" />
                        </div>
                        <div className="input-container">
                            <label>Birthday</label>
                            <input type="date" />
                        </div>
                        <div className="input-container">
                            <label>Nationality</label>
                            <input type="text" />
                        </div>
                    </form>
                </div>

                <div className="section">
                    <img src={idIcon} alt="ID Icon" />
                    <h2>Identity</h2>
                    <p>Passport valid for at least 6 months from departure date is required for international travel or transit abroad</p>
                    <form>
                        <div className="input-container">
                            <label>Passport number</label>
                            <input type="text" />
                        </div>
                        <div className="input-container">
                            <label>Country of Issue</label>
                            <input type="text" />
                        </div>
                        <div className="input-container">
                            <label>Passport Expiry Date</label>
                            <input type="date" />
                        </div>
                    </form>
                </div>

                <div className="section">
                    <img src={userIcon} alt="User Icon" />
                    <h2>Contact details</h2>
                    <form>
                        <div className="input-container">
                            <label>Name</label>
                            <input type="text" />
                        </div>
                        <div className="input-container">
                            <label>Surname</label>
                            <input type="text" />
                        </div>
                        <div className="input-container">
                            <label>Title</label>
                            <input type="text" />
                        </div>
                        <div className="input-container">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className="input-container">
                            <label>Phone number</label>
                            <input type="tel" />
                        </div>
                    </form>
                </div>

                <button>Submit</button>
            </div>
        );
    }
}

export default PassengerForm;
