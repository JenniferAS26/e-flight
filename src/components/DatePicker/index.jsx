
/* import { Datepicker } from 'flowbite-react' */ 
import ImageRound from '../../assets/icons/round-tip.svg'
import ImageOne from '../../assets/icons/one-way.svg'
import ImageLine from '../../assets/icons/Line 1.svg'
import ImagePasseger from '../../assets/icons/passeger.svg'
import ImageTriangulo from '../../assets/icons/triangulo-invertido.svg'
import ImageTicket from '../../assets/icons/ticket.svg'
import ImageChange from '../../assets/icons/change.svg'
import ImageLineHorizontal from '../../assets/icons/Line horizontal.svg'
import ImageSearch from '../../assets/icons/search.svg'
import ImageGroup1 from '../../assets/icons/Group 1.svg'
/* import ImageRectangle from '../../assets/icons/Rectangle 1svg.svg' */
import ImageOval from '../../assets/icons/Oval 1.svg'
import ImageCalendarW from '../../assets/icons/calendar-white.svg'
import ImageCalendaryO from '../../assets/icons/calendar-orange.svg'
import ImageWorld from '../../assets/images/world-map.svg'
import ImageAirplane from '../../assets/icons/airplane.svg'

import './styles.scss'

const DatePicker = () => {
  return (
    <section className='DatePicker-page-container'>
        <div className='DatePicker-container-wrapper'>
            <div className='DataPicker-page-tittle'>
                <span>Find your flight</span>
            </div>
            <div className='DataPicker-header__wrapper'>
                <div className='DatePicker__informacion'>
                <div className='round-trip'>
                    <span>Round Trip</span>
                    <img src={ImageRound} alt='doble-flechas' />
                </div>
                <div className='one-way'>
                    <span>One Way</span>
                    <img src={ImageOne} alt='flecha' />
                </div>
                <div className='line'><img src={ImageLine} alt='linea'/></div>
                <div className='passager'>
                    <img src={ImagePasseger} alt='pasajero' />
                    <span>1</span>
                    <img src={ImageTriangulo} alt='triangulo' />
                </div>
                <div className='economy'>
                    <img className='ticket' src={ImageTicket} alt="tiquete" />
                    <span>Economy</span>
                   <img className='triangulo' src={ ImageTriangulo} alt='triangulo' />
                </div>
                </div>
            </div>
            <div className='DatePicker-from-to__container'>
                    <div className='DatePicker-from__to'>
                        <div className='from'>
                            <span>Form</span>
                            <p>Houston (HOU)</p>
                            <img className='horizon-line' src={ImageLineHorizontal} alt='linea-horizontal' />
                        </div>
                        <img className='arrows' src={ImageChange} alt='doble-flecha'/>
                        <div className='to'>
                            <span>To</span>
                            <p>Where is your destination?</p>
                            <img className='horizon-line' src={ImageLineHorizontal} alt='linea-horizontal' />
                        </div>
                    </div>
                    <div className='container-search'>
                            <div className='search'>
                              <img src={ImageSearch} alt='buscar'/>
                           </div>
                   </div>
            </div>
            <div className='container-date-climate'>
                    <span>today</span>
                    <img className='horizon-line' src={ImageLineHorizontal} alt='linea-horizontal' />
                  {/* <img className='rectangle' src={ImageRectangle} alt='rectangulo' /> */ }
                    <h1>Houston</h1>
                    <p>Texas, United State</p>
                    <img className='group' src={ImageGroup1} alt='circulo-amariilo' />
                    <img className='Oval' src={ImageOval} alt="ovalo" />
                    <p className='numero'>28</p>
                    <h2>mostly sunny</h2>
                
            </div>
            <div className='DatePicker__world'>
                <img src={ImageWorld} alt='mundo' />
                <div className='airplane'><img src={ImageAirplane} alt='avion' /></div>
                <h2>#bestpriceforyou</h2>
                <p>#eco-plane</p>
                <h3>#flywitheflight</h3>
            </div>
            <div className='DatePicker-calendary__global'>
                 <div className='DatePicker__Departure'>
                    <p>Departure date</p>
                    <img src={ImageCalendarW} alt='calendario-blanco' />
                </div>
                <div className='DatePicker__Returndate'>
                    <p>Return date</p>
                    <img src={ImageCalendaryO} alt='calendario-naranja' />
                </div>     
            </div>
        </div>
   
        {/*  <Datepicker />  */}
    </section>
  )
}

export default DatePicker
