import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import iconAirline from '../../assets/icons/airline1.svg'
import luggage from '../../assets/icons/luggage.svg'
import clock from '../../assets/icons/time-black.svg'
import line from '../../assets/icons/trayecto.svg'
import departure from '../../assets/icons/departure.svg'
import logoAirline from '../../assets/icons/airline2.svg'
import { Button, Modal, Timeline  } from 'flowbite-react'
import './styles.scss'

const FlightResultsCard = ({ data }) => {
  const [openModal, setOpenModal] = useState();

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

  console.log(data.data)
  return (
    <article className='card cursor-pointer'>
      <section className='card__airline-info'>
        <img className='card__airline-info--icon' src={iconAirline} alt='logo airline' />
        <div className='card__airline-info--name-luggage desktop'>
          <h4 className='name-airline'>{data.validatingAirlineCodes[0]}</h4>
          <div className='info'>
            <img src={luggage} alt='luggage icon' />
            {/* <span>{`${data.travelerPricings[0].fareDetailsBySegment[1].includedCheckedBags.weight}kg`}</span> */}
            <span>{data.travelerPricings[0].fareDetailsBySegment[1]?.includedCheckedBags?.quantity}</span>
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
          <img src={departure} alt='airplane icon' />
          <span>{data.itineraries[0].segments[0].numberOfStops} stop</span>
        </div>
      </section>
      <section className='card__price'>
        <h2 className='card__price--quantity'>{data.price.total} {data.price.currency}<span>/pax</span></h2>
        <Button 
          className='card__price--button desktop'
          onClick={() => setOpenModal('default')}
        >
          <span className='text'>Choose</span>
        </Button>
      </section>
      <Modal show={ openModal === 'default' } size="5xl" onClose={() => setOpenModal(undefined)}>
        <Modal.Header>
          <div className='airline-logo'>
            <img src={logoAirline} alt='' />
            <span>Name airline</span>
          </div>
        </Modal.Header>
        <nav>
          <ul>
            <li>
              <Link>Flight details</Link>
            </li>
            <li>
              <Link>Benefits</Link>
            </li>
            <li>
              <Link>Refound</Link>
            </li>
            <li>
              <Link>Reschedule</Link>
            </li>
          </ul>
        </nav>
        <div className='flight-details'>
          <div className='flight-details__trip departure'>
            <div className="flight-details__trip--time-line px-5">
            <Timeline>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time className='text-purple-600'>
                    {`${formatTimeTravel(data.itineraries[0].segments[0].departure.at)}`}
                  </Timeline.Time>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time className='text-purple-600'>
                  {`${formatTimeTravel(data.itineraries[0].segments[0].arrival.at)}`}
                  </Timeline.Time>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
            </div>
            <div className="flight-details__trip--details">
              <div className="top">
                <h3 className='top__title'>City (IATA)</h3>
                <p className='top__text'>airport name</p>
              </div>
              <div className="middle">
                <div className="middle__ticket-detail">
                  <img src="" alt="" />
                  <span>codigo</span>
                </div>
                <span className='middle__classes'></span>
              </div>
            </div>
          </div>

          <div className='flight-details__trip arrival'>
            <div className="flight-details__trip--time-line px-5">
            <Timeline>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time className='text-purple-600'>
                    {`${formatTimeTravel(data.itineraries[0].segments[0].departure.at)}`}
                  </Timeline.Time>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time className='text-purple-600'>
                  {`${formatTimeTravel(data.itineraries[0].segments[0].arrival.at)}`}
                  </Timeline.Time>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
            </div>
            <div className="flight-details__trip--details"></div>
          </div>
          <div className='flight-details__trip--price-book'>
            <span className='price'>price</span>
            <button>Book now</button>
          </div>

        </div>
        {/* <div className='benefits'>

        </div>
        <div className='refound'>

        </div>
        <div className='reschedule'>

        </div> */}
      </Modal>
    </article>
  )
}

export default FlightResultsCard
