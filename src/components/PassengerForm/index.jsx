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
                    <img className="img" src={alertIcon} alt="Alert Icon" />
                    <h2 className="h2">Passenger details</h2>
                    <p className='parrafo'>Name as on ID card/passport without title and punctuation</p>
                    <form className='form'>
                        <div className="input-container">
                            <label className='labael'>Name</label >
                            <input  className="name" type="text" />
                        </div>
                        <div className="input-container">
                            <label className='labael'>Surname</label >
                            <input className='input' type="text" />
                        </div>
                        <div className="input-container">
                            <label className='labael'>Title</label >
                            <input className='input' type="text" />
                        </div>
                        <div className="input-container">
                            <label className='labael'>Birthday</label >
                            <input className='input' type="date" />
                        </div>
                        <div className="input-container">
                            <label className='labael'>Nationality</label >
                            <input className='input' type="text" />
                        </div>
                    </form>
                </div>

                <div className="section">
                    <img className="img" src={idIcon} alt="ID Icon" />
                    <h2 className="h2">Identity</h2>
                    <p className='parrafo'> Passport valid for at least 6 months from departure date is required for international travel or transit abroad</p>
                    <form>
                        <div className="input-container">
                            <label className='labael'>Passport number</label >
                            <input className='input' type="text" />
                        </div>
                        <div className="input-container">
                            <label className='labael'>Country of Issue</label >
                            <input className='input' type="text" />
                        </div>
                        <div className="input-container">
                            <label className='labael'>Passport Expiry Date</label >
                            <input className='input' type="date" />
                        </div>
                    </form>
                </div>

                <div className="section">
                    <img className="img" src={userIcon} alt="User Icon" />
                    <h2 className="h2">Contact details</h2>
                    <form>
                        <div className="input-container">
                            <label className='labael'>Name</label >
                            <input className='input' type="text" />
                        </div>
                        <div className="input-container">
                            <label className='labael'>Surname</label >
                            <input className='input' type="text" />
                        </div>
                        <div className="input-container">
                            <label className='labael'>Title</label >
                            <input className='input' type="text" />
                        </div>
                        <div className="input-container">
                            <label className='labael'>Email</label >
                            <input className='input' type="email" />
                        </div>
                        <div className="input-container">
                            <label className='labael'>Phone number</label >
                            <input className='input' type="tel" />
                        </div>
                    </form>
                </div>

                <button className='boton'>Submit</button>
            </div>
        );
    }
}

export default PassengerForm;
