import ImegeAirline from '../../assets/icons/airline3.svg'
import ImegeTime from '../../assets/icons/time.svg'
import ImegeCalendar from '../../assets/icons/calendar.svg'
import ImegeLandingAir from '../../assets/icons/landing-airplane.svg'
import ImegeLogo from '../../assets/icons/logo.svg'
import ImegeLandinAir2 from '../../assets/icons/landing-airplane2.svg'
import ImegeGroup9 from '../../assets/icons/Group 9.svg'
import ImegeLine9 from '../../assets/icons/Line 9.svg'
import ImegePrice from '../../assets/icons/Price.svg'
const DetailsPrice = () => {
  return (
   <section className='Price-Houston-container-major'>
    <div className="Details-Pice-major">
        <div className='deatail-container-box'>
            <div className='Deatails-header-Price'>
                <div className='Deatail-Title'>
                    <img src={ImegePrice} alt="precio" />
                    <h1>Price details</h1>
                    <img className='lineahorizontal' src={ImegeLine9} alt="linea" />
                </div>
            </div>
            <div className="Details-price__wrapper">
                <div className="Datails-basic">
                    <p className="Adult">adult basic fee</p>
                    <p className="cien">$150</p>
                    <p className="tax">Tax</p>
                    <p className="Regulaqr">Regular total price</p>
                    <p className="ciento-cincuenta">$150</p>
                    <p className="Save">Save</p>
                    <p className="uno-punto">$1.5</p>
                    <img className='lineahorizontal' src={ImegeLine9} alt="linea" />
                </div>
                <div className="Details-total">
                    <p className="total">Total</p>
                    <p className="price">$148.5</p>
                </div>
            </div>
        </div>
    </div>
    <div className="Huoston-container-major">
        <div className="houston-header">
            <div className="houston-tittle">
                <h1>Houston-Los Ageles</h1>
                <img src={ImegeLogo} alt="logo" />
                <img className='lineahorizontal' src={ImegeLine9} alt="linea" />
            </div>
            <div className="houston-container__wrapper">
                <div className="Houston-cloudy-container-1">
                   <div className="houston-airlines">
                    <h1>Coludy Airlines</h1>
                    <span>HOU - LAS</span>
                    <div className="economy">
                        <p>economy</p>
                        <img src={ImegeAirline} alt="avion" />
                    </div>
                   </div>
                    <div className="container-nueve">
                        <span>9</span>
                        <p>Feb, 2023</p>
                    </div>
                    <div className="houston-hours">
                        <h1>23:15 - 1:25</h1>
                        <img src={ImegeTime} alt="ciculo" />
                        <h2>2h10m</h2>
                    </div>
                    <div className="direct">
                        <img src={ImegeGroup9} alt="lineapunto" />
                        <p>Direct</p>
                        <img src={ImegeLandinAir2 } alt="avion" />
                    </div>
                </div>
                <div className='linea-horizontal'><img  src={ImegeLine9} alt="linea" /></div>
                <div className="houston-Refundable-container-1">
                    <div className="refundable">
                        <span>$</span>
                        <p>Refundable</p>
                    </div>
                    <div className="reschedule">
                        <img src={ImegeCalendar} alt="calendario" />
                        <p>Reschedule Available</p>
                    </div>
                </div>
                <div className="Houston-cloudy-container-2">
                   <div className="houston-airlines">
                    <h1>Coludy Airlines</h1>
                    <span>LAS -LAX</span>
                    <div className="economy">
                        <p>economy</p>
                        <img src={ImegeLandingAir} alt="avion" />
                    </div>
                   </div>
                    <div className="container-nueve">
                        <span>10</span>
                        <p>Feb, 2023</p>
                    </div>
                    <div className="houston-hours">
                        <h1>2:25 - 7:40</h1>
                        <img src={ImegeTime} alt="ciculo" />
                        <h2>5h15m</h2>
                    </div>
                    <div className="direct">
                        <img src={ImegeGroup9} alt="lineapunto" />
                        <p>Direct</p>
                        <img src={ImegeLandinAir2 } alt="avion" />
                    </div>
                </div>
                <div className='linea-horizontal'><img  src={ImegeLine9} alt="linea" /></div>
                <div className="houston-Refundable-container-2">
                    <div className="refundable">
                        <span>$</span>
                        <p>Refundable</p>
                    </div>
                    <div className="reschedule">
                        <img src={ImegeCalendar} alt="calendario" />
                        <p>Reschedule Available</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

   </section>

  )
}

export default DetailsPrice
