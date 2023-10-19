import  { useState } from 'react';
import { Datepicker } from 'flowbite-react' 
import { Flowbite } from 'flowbite-react';
import ImageRound from '../../assets/icons/round-tip.svg'
import ImageOne from '../../assets/icons/one-way.svg'
import ImageLineRe from '../../assets/icons/Line-retangle.png'
import ImegeLine from '../../assets/icons/LineVerti.svg'
import ImagePasseger from '../../assets/icons/passeger.svg'
import ImageTriangulo from '../../assets/icons/triangulo-invertido.svg'
import ImageTicket from '../../assets/icons/ticket.svg'
import ImageChange from '../../assets/icons/change.svg'
import ImageLineHorizontal from '../../assets/icons/Line horizontal.svg'
import ImageSearch from '../../assets/icons/search.svg'
import ImageGroup1 from '../../assets/icons/Group 1.svg'
import ImageNumero from '../../assets/icons/28-grados.png'
import ImageWorld from '../../assets/images/world-map.svg'
import ImageAirplane from '../../assets/icons/airplane.svg'
import ImageRojoOval from '../../assets/icons/Oval-rojo.svg'
import ImageAzulOval from '../../assets/icons/Oval-azul.svg'
import ImageVerdeOval from '../../assets/icons/Oval-verde.svg'
import ImageCalendarW from '../../assets/icons/calendar-white.svg'
import ImageCalendaryO from '../../assets/icons/calendar-orange.svg'
import './styles.scss'


const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDatepickerChange = (date) => {
        setSelectedDate(date);
    };

    const customTheme = {
        datepicker: {
          color: {
            primary: 'bg-violet-600 hover:bg-violet-600',
          },
        },
      };
  return (
    <section className='DatePicker-page-container'>
        <div className='DatePicker-container-wrapper'>
            <div className='DatePicker-container-page-tittle'>
                <span>Find your flight</span>
            </div>
            <div className='DatePicker-container-header__wrapper'>
                <div className='DatePicker-container-header__informacion'>
                    <div className='round-trip'>
                       <input type="text" className='texto' placeholder='Round trip'/* onChange={handleChange} */ />
                        <img src={ImageRound} alt='doble-flechas' />
                    </div>
                    <div className='one-way'>
                    <input type="text" className='texto' placeholder='One Way'/* onChange={handleChange} */ />
                        <img src={ImageOne} alt='flecha' />
                    </div>
                    <div className='line'><img src={ImegeLine} alt='linea'/>
                    </div>
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
            <div className='DatePicker-container-from-to__container'>
                    <div className='DatePicker-from__to'>
                        <div className='from'>
                            <span>Form</span>
                            <p>
                              <input type="text" className="texto" placeholder='Houston (HOU)' />
                            </p>
                            <img className='horizon-line' src={ImageLineHorizontal} alt='linea-horizontal' />
                        </div>
                        <img className='arrows' src={ImageChange} alt='doble-flecha'/>
                        <div className='to'>
                            <span>To</span>
                            <p>
                              <input type="text" className="texto" placeholder='Where is your destination? ' />
                            </p>
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
                <img className='horizon-line' src={ImageLineRe} alt='linea-horizontal' />
                <h1>Houston</h1>
                <p>Texas, United State</p>
                <img className='group' src={ImageGroup1} alt='circulo-amariilo' />
                <img className='numero'src={ImageNumero} alt='numero' />
                <h2>mostly sunny</h2>         
            </div>
            <div className='DatePicker__world'>
                <div className='airplane'>
                    <div className='plane'><img src={ImageAirplane} alt='avion' /></div>
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
            <div className='DatePicker-container-calendary__global'>
                 <div className='DatePicker__Departure'>
                    <img src={ImageCalendarW} alt='calendario-blanco' />
                    <p>
                    <input type="date" id="Departure" className='departure' placeholder='departure'  name="departure date" />
                    </p>
                </div>
                <div className='DatePicker__Returndate'>
                    <p>
                        <input 
                            type="date" 
                            id="Returndate" 
                            /* value={SelectedDate.toISOString().split('T'[0])}  */
                            className='Returndate' 
                            placeholder='Returndate'  
                            name="Returndate" />
                    </p>
                    <img src={ImageCalendaryO} alt='calendario-naranja' />
                </div>     
                <div className='Calendary'>
                <Flowbite theme={customTheme}>
                   <Datepicker inline selected={selectedDate} onChange={handleDatepickerChange} />
                </Flowbite>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DatePicker
