import ImegeAirline from '../../assets/icons/airline3.svg'
import ImegeTime from '../../assets/icons/time.svg'
import ImegeCalendar from '../../assets/icons/calendar.svg'
import ImegeLandingAir from '../../assets/icons/landing-airplane.svg'
import ImegeLogo from '../../assets/icons/airplane-verdeh.svg'
import ImegeLandinAir2 from '../../assets/icons/landing-airplane2.svg'
import ImegeGroup9 from '../../assets/icons/Group 9.svg'
import ImegeLine9 from '../../assets/icons/Line 9.svg'
import ImegePrice from '../../assets/icons/Price.svg'
import './styles.scss'

const DetailsPrice = () => {
  return (
   <section className='Price-Houston-container-major'>
        <div className="Details-Pice-major">
            <div className='Details-header-Price'>
                <div className='Detail-Title'>
                    <img src={ImegePrice} alt="precio" />
                    <h1>Price details</h1>
                </div>
            </div>
            <div className='lineahorizontal'> <img  src={ImegeLine9} alt="linea" /></div>
            <div className="Details-price__wrapper">
                <div className="Details-basic">
                    <div className="Adult"><p >Adult basic fee</p></div>
                    <div className="cien"><p >$150</p></div>
                    <div  className="tax"><p>Tax</p></div>
                    <div className="Regular"><p >Regular total price</p></div>
                    <div className="ciento-cincuenta"><p >$150</p></div>
                    <div className="Save"><p >Save</p></div>
                    <div className="uno-punto"><p>-$1.5</p></div>
                </div>
                <div><img className='lineahorizontal' src={ImegeLine9} alt="linea" /></div>
                <div className="Details-total">
                    <div className="total"><p >Total</p></div>
                    <div className="price"><p >$148.5</p></div>
                </div>
            </div>
        </div>
        <div className="Houston-container-major">
            <div className="houston-header">
                <div className="houston-tittle">
                    <img src={ImegeLogo} alt="logo" />
                    <h1>Houston-Los Angeles</h1>
                </div>
                <div><img className='lineahorizontal' src={ImegeLine9} alt="linea" /></div>
                <div className="houston-container__wrapper">
                    <div className="Houston-cloudy-container-1">
                    <div className="houston-airlines">
                        <img src={ImegeAirline} alt="nube" />
                        <h1>Cloudy Airlines</h1>
                    </div>
                    <div className='HOU'> <span>HOU - LAS</span></div>
                    <div className="economy">
                            <img src={ImegeLandingAir} alt="avion" />
                            <p>economy</p>
                    </div>
                    <div className="container-nueve">
                        <span>9</span>
                        <p>Feb, 2023</p>
                    </div>
                    <div className="houston-hours">
                        <h1>23:15 - 1:25</h1>
                    </div>
                    <div className='hours-circle'>
                        <img src={ImegeTime} alt="ciculo" />
                        <h2>2h10m</h2>
                    </div>   
                    <div className='direct'> <img src={ImegeGroup9} alt="lineapunto" /></div>
                    <div className="direct-airplane">
                        <img src={ImegeLandinAir2 } alt="avion" />
                        <p>Direct</p>
                    </div>
                    </div>
                    <div className='linea-horizontal'><img  src={ImegeLine9} alt="linea" /></div>
                    <div className="houston-Refundable-container-1">
                        <div className="refundable">
                            <img src={ImegePrice} alt="precio" />
                            <p>Refundable</p>
                        </div>
                        <div className="reschedule">
                            <img src={ImegeCalendar} alt="calendario" />
                            <p>Reschedule Available</p>
                        </div>
                    </div>
                    <div className="Houston-cloudy-container-2">
                    <div className="houston-airlines">
                        <img src={ImegeAirline} alt="nube" />
                        <h1>Cloudy Airlines</h1>
                    </div>
                    <div className='HOU'> <span>LAS - LAX</span></div>
                    <div className="economy">
                            <img src={ImegeLandingAir} alt="avion" />
                            <p>economy</p>
                    </div>
                    <div className="container-nueve">
                        <span>10</span>
                        <p>Feb, 2023</p>
                    </div>
                    <div className="houston-hours">
                        <h1>2:25 - 7:40</h1>
                    </div>
                    <div className='hours-circle'>
                        <img src={ImegeTime} alt="ciculo" />
                        <h2>5h15m</h2>
                    </div>   
                    <div className='direct'> <img src={ImegeGroup9} alt="lineapunto" /></div>
                    <div className="direct-airplane">
                        <img src={ImegeLandinAir2 } alt="avion" />
                        <p>Direct</p>
                    </div>
                    </div>
                    <div className='linea-horizontal'><img  src={ImegeLine9} alt="linea" /></div>
                    <div className="houston-Refundable-container-2">
                        <div className="refundable">
                            <img src={ImegePrice} alt="precio" />
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
