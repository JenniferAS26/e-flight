
/* import { Datepicker } from 'flowbite-react' */ 
import ImageRound from '../../assets/icons/round-tip.svg'
import ImageOne from '../../assets/icons/one-way.svg'
import ImageLine from '../../assets/icons/Line 1.svg'
import ImagePasseger from '../../assets/icons/passeger.svg'
import ImageChange from '../../assets/icons/change.svg'
import ImageLineHorizontal from '../../assets/icons/Line horizontal.svg'
import ImageSearch from '../../assets/icons/search.svg'
import ImageGroup from '../../assets/icons/Group 1.svg'
import ImageCalendarW from '../../assets/icons/calendar-white.svg'
import ImageCalendaryO from '../../assets/icons/calendar-orange.svg'
import ImageWorld from '../../assets/images/world-map.svg'
import ImageAirplane from '../../assets/icons/airplane.svg'

import './styles.scss'

const DatePicker = () => {
  return (
    <section className="DatePicker-page-container">
        <div className="DatePicker-container-wrapper">
            <div className="DataPicker-page-tittle">
                <h1>Find your flight</h1>
            </div>
            <div className="DataPicker-header__wrapper">
                <div className="DatePocker__informacion">
                <div className="round-trip">
                    <span>Round trip</span>
                    <img src={ImageRound} alt="doble-flechas" />
                </div>
                <div className="one way">
                    <span>One Way</span>
                    <img src={ImageOne} alt="flecha" />
                </div>
                <div className="line"><img src={ImageLine} alt="linea"/></div>
                <div className="passager">
                    <span>1</span>
                    <img src={ImagePasseger} alt="pasajero" /></div>
                </div>
            <div className="DatePicker-from-to__container">
                <div className="DatePicker__from-to">
                <span>Form</span>
                <psan>To</psan>
                <img src={ImageChange} alt="doble-flecha"/>
                <img src={ImageLineHorizontal} alt="linea-horizontal" />
                </div>
                <div className="search">
                <img src={ImageSearch} alt="buscar"/>
                </div>
                <div className="DataPicker__Today">
                   <span>today</span>
                   <h1>houston</h1>
                   <p>Texas, United State</p>
                   <img src={ImageGroup} alt="circulo-amariilo" />
                </div>
            </div>
            <div className="DatePicker-calendary__global">
                <div className="DatePicker__Departure">
                    <p>Departure date</p>
                    <img src={ImageCalendarW} alt="calendario-blanco" />
                </div>
                <div className="DatePicker__Returndate">
                    <p>Return date</p>
                    <img src={ImageCalendaryO} alt="calendario-naranja" />
                </div>
                <div className='DatePicker__world'>
                    <img src={ImageWorld} alt="mundo" />
                </div>
                <div><img src={ImageAirplane} alt="avion" /></div>
            </div>
            </div>
        </div>
   
        {/*  <Datepicker />  */}
  </section>
  )
}

export default DatePicker
