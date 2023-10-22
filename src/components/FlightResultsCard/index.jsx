import iconAirline from '../../assets/icons/airline1.svg'
import luggage from '../../assets/icons/luggage.svg'
import clock from '../../assets/icons/time-black.svg'
import line from '../../assets/icons/trayecto.svg'
import departure from '../../assets/icons/departure.svg'
import './styles.scss'

const FlightResultsCard = ({ data }) => {
  return (
    <article className='card cursor-pointer'>
      <section className='card__airline-info'>
        <img className='card__airline-info--icon' src={iconAirline} alt='logo airline' />
        <div className='card__airline-info--name-luggage desktop'>
          <h4 className='name-airline'>{data.validatingAirlineCodes[0]}</h4>
          <div className='info'>
            <img src={luggage} alt='luggage icon' />
            <span>23kg</span>
          </div>
        </div>
      </section>
      <section className='card__time'>
        <h3 className='card__time--hour desktop'>10:25PM - 7:06AM</h3>
        <div className='card__time--duration'>
            <img src={clock} alt='clock icon' />
            <span>{data.itineraries[0].duration}</span>
          </div>
      </section>
      <section className='card__stops'>
        <img className='card__stops--line desktop' src={line} alt='line' />
        <div className='card__stops--info'>
          <img src={departure} alt="airplane icon" />
          <span>1 stop</span>
        </div>
      </section>
      <section className='card__price'>
        <h2 className='card__price--quantity'>{data.price.total} {data.price.currency}<span>/pax</span></h2>
        <button className='card__price--button desktop'>Choose</button>
      </section>
    </article>
  )
}

export default FlightResultsCard
