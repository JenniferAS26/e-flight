import { useNavigate } from 'react-router-dom'
import iconAirline from '../../assets/icons/airline1.svg'
import luggage from '../../assets/icons/luggage.svg'
import clock from '../../assets/icons/time-black.svg'
import line from '../../assets/icons/trayecto.svg'
import departure from '../../assets/icons/departure.svg'
import './styles.scss'

const FlightResultsCard = ({ data }) => {
  const navigate = useNavigate()

  const formatDuration = (duration) => {
    const reg = /PT([0-9]{1,2}H)?([0-9]{1,2}M)?/
    const parsedDuration = reg.exec(duration)
    const hours = parseInt(parsedDuration[1])
    const minutes = parseInt(parsedDuration[2])
    let displayDuration = ''
    if (hours) {
      displayDuration += `${hours}hr ` 
    } 
    if (minutes) {
      displayDuration += `${minutes}min` 
    }
    return displayDuration
  }

  const formatTimeTravel = (time) => {
    const separateDateToHour = time.split('T')
    const separateHourByColon = separateDateToHour[1].split(':')
    let hours = parseInt(separateHourByColon[0])
    const minutes = parseInt(separateHourByColon[1])
    const amPm = hours >= 12 ? 'PM' : 'AM'
    if (hours > 12) {
      hours -= 12
    } else if (hours === 0) {
      hours = 12
    }
    return `${hours}:${minutes}${amPm}`
  }

  return (
    <article className='card cursor-pointer' onClick={() => navigate('/flight-booking')}>
      <section className='card__airline-info'>
        <img className='card__airline-info--icon' src={iconAirline} alt='logo airline' />
        <div className='card__airline-info--name-luggage desktop'>
          <h4 className='name-airline'>{data.validatingAirlineCodes[0]}</h4>
          <div className='info'>
            <img src={luggage} alt='luggage icon' />
            {/* <span>{`${data.travelerPricings[0].fareDetailsBySegment[1].includedCheckedBags.quantity}kg`}</span> */}
            <span>{data.travelerPricings[0].fareDetailsBySegment[1].includedCheckedBags.quantity}</span>
          </div>
        </div>
      </section>
      <section className='card__time'>
        <h3 className='card__time--hour desktop'>{`${formatTimeTravel(data.itineraries[0].segments[0].departure.at)} - ${formatTimeTravel(data.itineraries[0].segments[0].arrival.at)}`}</h3>
        <div className='card__time--duration'>
            <img src={clock} alt='clock icon' />
            <span>{ formatDuration(data.itineraries[0].duration) }</span>
          </div>
      </section>
      <section className='card__stops'>
        <img className='card__stops--line desktop' src={line} alt='line' />
        <div className='card__stops--info'>
          <img src={departure} alt="airplane icon" />
          <span>{data.itineraries[0].segments[0].numberOfStops} stop</span>
        </div>
      </section>
      <section className='card__price'>
        <h2 className='card__price--quantity'>{data.price.total} {data.price.currency}<span>/pax</span></h2>
        <button 
          className='card__price--button desktop'
          onClick={() => navigate('/flight-booking')}
        >
          Choose
        </button>
      </section>
    </article>
  )
}

export default FlightResultsCard
