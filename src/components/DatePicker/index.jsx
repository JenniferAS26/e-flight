import { Datepicker } from 'flowbite-react' 
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
/* import ImageOval from '../../assets/icons/Oval 1.svg' */
import ImageWorld from '../../assets/images/world-map.svg'
import ImageAirplane from '../../assets/icons/airplane.svg'
import ImageRojoOval from '../../assets/icons/Oval-rojo.svg'
import ImageAzulOval from '../../assets/icons/Oval-azul.svg'
import ImageVerdeOval from '../../assets/icons/Oval-verde.svg'
import ImageCalendarW from '../../assets/icons/calendar-white.svg'
import ImageCalendaryO from '../../assets/icons/calendar-orange.svg'

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
                            <button className='search'>
                              <img src={ImageSearch} alt='buscar'/>
                           </button>
                   </div>
            </div>
           <div className='Datepicker-container__climate-world'>
            <div className='container-date-climate'>
                        <span>today</span>
                        <img className='horizon-line' src={ImageLineHorizontal} alt='linea-horizontal' />
                    {/* <img className='rectangle' src={ImageRectangle} alt='rectangulo' /> */ }
                        <h1>Houston</h1>
                        <p>Texas, United State</p>
                        <img className='group' src={ImageGroup1} alt='circulo-amariilo' />
                        {/* <img className='Oval' src={ImageOval} alt="ovalo" /> */}
                        <p className='numero'>28</p>
                        <h2>mostly sunny</h2>
                    
            </div>
            <div className='DatePicker__world'>
             <div className='airplane'><img src={ImageAirplane} alt='avion' />
             <div className='bestPrice'><h2>#bestpriceforyou</h2></div>
             <div className='eco'><p>#eco-plane</p></div>
             <div className='fly'><h3>#flywitheflight</h3></div>
             <div className='rojo-oval'><img src={ImageRojoOval} alt="" /></div>
             <div className='azul-oval'><img src={ImageAzulOval} alt="" /></div>
             <div className='verde-oval'><img src={ImageVerdeOval} alt="" /></div>
             </div>
             <img src={ImageWorld} alt='mundo' />
            </div>
           </div>
            <div className='DatePicker-calendary__global'>
                 <button className='DatePicker__Departure'>
                    <img src={ImageCalendarW} alt='calendario-blanco' />
                    <p>Departure date</p>
                </button>
                <butoon className='DatePicker__Returndate'>
                    <p>Return date</p>
                    <img src={ImageCalendaryO} alt='calendario-naranja' />
                </butoon>     
                <Datepicker inline /> 
            </div>
        </div>
   
    </section>
  )
}

export default DatePicker
