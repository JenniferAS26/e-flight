import alert from '../../assets/icons/alert.svg'
import idCard from '../../assets/icons/id.svg'
import contact from '../../assets/icons/user-icon.svg'
import './styles.scss'

const PassengerRegister = () => {
  return (
    <form className='information'>
      <div className='information__details'>
        <div className='information__details--title'>
          <img src={alert} alt='' />
          <h2 className='title'>Passenger details</h2>
        </div>
        <span className='information__details--description'>Name as on ID card/passport without title and punctuation</span>
        <div className='information__details--input-fields'>
          <div className='field-wrapper'>
            <label htmlFor='name-input'>Name</label>
            <input type='text' id='name-input' />
          </div>
          <div className='field-wrapper'>
            <label htmlFor='surname-input'>Surname</label>
            <input type='text' id='surname-input' />
          </div>
          <div className='flex justify-between'>
            <div className='field-wrapper title'>
              <label htmlFor='title-select'>Title</label>
              <select name="title" id="title-select">
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="ms">Ms</option>
              </select>
            </div>
            <div className='field-wrapper birthday'>
              <label htmlFor='birthday-input'>Birthday</label>
              <input type='date' id='birthday-input' />
            </div>
            <div className='field-wrapper nationality'>
              <label htmlFor='nacionality-input'>Nacionality</label>
              <input type='text' id='nacionality-input' />
            </div>
          </div>
        </div>
      </div>
      <div className='information__identity'>
        <div className='information__identity--title'>
          <img src={idCard} alt='' />
          <h2 className='title'>Identity</h2>
        </div>
        <div className='disclaimer'>
          <p>Passport valid for at least 6 months from departure date is required for international travel or transit abroad
            <br />
            Make sure that the passenger's name is exactly as written in the government issued ID/Passport/Driving License. Avoid any mistake, because some airlines don't allow name corrections after booking.</p>
        </div>
        <div className='information__details--input-fields'>
          <div className="field-wrapper">
            <label htmlFor=''>Passport number</label>
            <input type='number' />
          </div>
          <div className="field-wrapper">
            <label htmlFor=''>Country of Issue</label>
            <input type='text' />
          </div>
          <div className="field-wrapper">
            <label htmlFor=''>Passport Expiry Date</label>
            <input type='date' />
          </div>
        </div>
      </div>
      <div className='information__contact'>
        <div className='information__contact--title'>
          <img src={contact} alt='' />
          <h2 className='title'>Contact details</h2>
        </div>
        <div className='information__details--input-fields'>
          <div className='flex justify-between'>
            <div className="field-wrapper contact-name">
              <label htmlFor=''>Name</label>
              <input type='text' />
            </div>
            <div className="field-wrapper contact-surname">
              <label htmlFor=''>Surname</label>
              <input type='text' />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className="field-wrapper">
              <label htmlFor=''>Title</label>
              <input type='text' />
            </div>
            <div className="field-wrapper">
              <label htmlFor=''>Email</label>
              <input type='email' />
            </div>
            <div className="field-wrapper">
              <label htmlFor=''>Phone number</label>
              <input type='number' />
          </div>
          </div>
        </div>
      </div>
      <button className='information__button'>Submit</button>
    </form>
  )
}

export default PassengerRegister
