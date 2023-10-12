/* import React from 'react' */
/* import { Datepicker } from 'flowbite-react' */ 
import './styles.scss'

const DatePicker = () => {
  return (
    <section className="DatePicker-page-container">
        <div className="DatePicker-container-wrapper">
            <div className="DataPicker-page-tittle">
                <span>Find your flight</span>
            </div>
            <div className="DataPicker-header__wrapper">
                <div className="DatePocker__informacion">
                <div className="round-trip">
                    <p>Round trip</p>
                    <img src="../../assets/icons/round-tip.svg" alt="doble-flechas" />
                </div>
                <div className="one way">
                    <p>One Way</p>
                    <img src="../../assets/icons/one-way.svg" alt="flecha" />
                </div>
                <div className="line"><img src="../../assets/icons/Line 1.svg" alt="linea"/></div>
                <div className="passager">
                    <span>1</span>
                    <img src="../../assets/icons/passeger.svg" alt="pasajero" /></div>
                </div>
                <div className="DatePicker-from-to__container">
                <div className="DatePicker__from-to">
                <h1>Form</h1>
                <p>To</p>
                <img src="../../assets/icons/change.svg" alt="doble-flecha"/>
                <img src="../../assets/icons/Line 2.svg" alt="linea-horizontal" />
                </div>
                <div className="search">
                <img src="../../assets/icons/search.svg" alt="buscar"/>
                </div>
                <div className="DataPicker__Today">
            <span>today</span>
                <h1>houston</h1>
                    <p>Texas, United State</p>
                    <img src="../../assets/icons/Group 1.svg" alt="" />
                </div>
                </div>
            <div className="DatePicker-calendary__global">
                <div className="DatePicker__Departure">
                    <p>Departure date</p>
                    <img src="../../assets/icons/calendar-white.svg" alt="calendario-blanco" />
                </div>
                <div className="DatePicker__Returndate">
                    <p>Return date</p>
                    <img src="../../assets/icons/calendar-orange.svg" alt="calendario-naranja" />
                </div>
                <div className='DatePicker__world'>
                    <img src="../../assets/images/world-map.svg" alt="mundo" />
                </div>
                <div><img src="../../assets/icons/airplane.svg" alt="avion" /></div>
            </div>
            </div>
        </div>
   
        {/*  <Datepicker />  */}
  </section>
  )
}

export default DatePicker
