import imgtrayecto from '../../assets/icons/trayecto3.svg'
import imgchulito from '../../assets/icons/check.svg'
import imgnube from '../../assets/icons/airline3.svg'
import imgmaleta from '../../assets/icons/bag.svg'
import imgavion from '../../assets/icons/landing-airplane.svg'
import imgavion2 from '../../assets/icons/logo-white.svg'

import './styles.scss'


const Ticket = () => {
  return (

    <div className="ticket-container">
      <div className='ticket-container__principaltitle--container'>
      <h1>My Booking</h1>
      </div>
      <div className="ticket-container__img--trayecto">
      <img src={imgtrayecto} alt="" />
      <img src={imgtrayecto} alt="" />
      </div>
      <div className='ticket-container__info--trayecto'>
        <span className='booking'>Booking</span>
        <span className='purchase'>Purchase</span>
        <span className='get-your-e-ticket'>Get yout E-ticket</span>
      </div>
      <div className='ticket-container__info--booked-flight'>
        <img src={imgchulito} alt="" />
        Your flight is booked sucessflly!
      </div>
      <div className='ticket-container__info--booked-ticket'>
        <h3>Present E-ticket and valid identification at check-in</h3>
      </div>

      <div className='ticket-container__ticket'>
        <div className='ticket-container__cloudy--airlines'>
          <img src={imgnube} alt="" />
          <h3>Cloudy Airlines</h3>
          <div className='ticket-container__cloudy--booton'>
            <img src={imgmaleta} alt="" />
            <div className='kg'>2x23Kg</div>
            <div className='kg'>1x7Kg</div>
          </div> 
        </div>
          
        <div className='ticket-container__passenger'>
          <span>Passenger: </span>
          <h3>ANNA ANDERSON</h3>      
        </div>
         <div className='ticket-container__economy'>
          <img src={imgavion} alt="" />
          <h2>Economy</h2>
         </div>
        <div className='ticket-container__info--ticket'>
          <div >
            <div className='infovuelos'>
              <div className='detalleinfovuelos'>
                <span className='hora'>23:15</span>
                <span className='ciudad'>Houston</span>
                <span className='fecha'>9 Feb,2023</span>
              </div>
              <div className='detalleinfovuelos'>
                <span className='hora'>23:15</span>
                <span className='ciudad'>Houston</span>
                <span className='fecha'>9 Feb,2023</span>
              </div>
            </div>
            <div className='ticket-container__img--trayecto1'>
              <img src={imgtrayecto} alt="" />
            </div>
            <div className='ticket-container__info--trayecto1'>
                <span>2h10m</span>
            </div>
        </div>
        </div >
              <div className='ticket-container__barcode1'>
              <div class="bargruesa"></div>
              <div class="bardelgada"></div>
              <div class="bardelgada"></div>
              <div class="bardelgada"></div> 
              <div class="bargruesa"></div>
              <div class="bargruesa"></div>
              <div class="bardelgada"></div>
              <div class="bardelgada"></div>
              <div class="bardelgada"></div>
              <div class="bargruesa"></div>
              <div class="bargruesa"></div>
              <div class="bardelgada"></div>
              <div class="bardelgada"></div>
              <div class="bardelgada"></div>
              <div class="bargruesa"></div>
              <div class="bargruesa"></div>
              <div class="bargruesa"></div>
              <div class="bardelgada"></div>
              <div class="bardelgada"></div>
              <div class="bargruesa"></div>
            </div> 



      
        <div className='ticket-container__info--final'>
          <span className='fecha'>check-in: 10th Feb 2023 at 1:40</span>
          <span className='local'>*All time displayed are local</span>
        </div>       
      </div>
      <div className='ticket-container__E--flight'>
          <span><img src={imgavion2} alt="" />
          <h5>E-flight</h5>          
          </span>
          <span>Booking ID</span>
          <span>65980165</span>
          <span>Airline Booking code</span>
          <span>CA-6018</span>
        <div className='barcode'>
          <div class="bargruesa"></div>
          <div class="bardelgada"></div>
          <div class="bardelgada"></div>
          <div class="bardelgada"></div> 
          <div class="bargruesa"></div>
          <div class="bargruesa"></div>
          <div class="bardelgada"></div>
          <div class="bardelgada"></div>
          <div class="bardelgada"></div>
          <div class="bargruesa"></div>
          <div class="bargruesa"></div>
          <div class="bardelgada"></div>
          <div class="bardelgada"></div>
          <div class="bardelgada"></div>
          <div class="bargruesa"></div>
          <div class="bargruesa"></div>
          <div class="bargruesa"></div>
          <div class="bardelgada"></div>
          <div class="bardelgada"></div>
          <div class="bargruesa"></div>
        </div>  
      </div>
        <div className='button'>
          <button>Send to my e-mail</button>
        </div>
    </div>
  )
}

export default Ticket






