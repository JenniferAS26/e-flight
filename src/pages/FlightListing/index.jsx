import Filters from '../../components/Filters'
import SortBy from '../../components/SortBy'
import FlightResults from '../../components/FlightResults'
import FlightResultsCard from '../../components/FlightResultsCard'
import arrow from '../../assets/icons/one-way-black.svg'
import roundTrip from '../../assets/icons/round-tip.svg'
import passengers from '../../assets/icons/people.svg'
import classFlight from '../../assets/icons/ticket-black.svg'
import pointer from '../../assets/icons/pointer.svg'
import switching from '../../assets/icons/switch.svg'
import calendar from '../../assets/icons/calendar-black.svg'
import glass from '../../assets/icons/glass.svg'
import './styles.scss'

const FlightListing = () => {
  return (
    <section className='flight-listing'>
      <div className='flight-listing__filters'>
        <SortBy />
        <Filters />
      </div>
      <div className='flight-listing__results'>
        <div className='flight-listing__results--types'>
          <button className='options trip'>
            <img src={arrow} alt='arrow icon' />
            <span id='one-way'>One way</span>
          </button>
          <button className='options trip'>
            <img src={roundTrip} alt='arrows icon' />
            <span id='round-trip'>Round trip</span>
          </button>
          <button className='options quantity'>
            <img src={passengers} alt='' />
            <span id='passenger-quantity'>1</span>
          </button>
          <button className='options class'>
            <img src={classFlight} alt='ticket icon' />
            <span>Economy</span>
          </button>
        </div>
        <div className='flight-listing__results--change-flight'>
          <form className='switch-flight'>
            <div className='switch-flight__wrapper flex justify-between items-center'>
              <div className='input-wrapper'>
                <img src={pointer} alt='pointer icon' />
                <input type='text' placeholder='Houston (HOU)' />
              </div>
              <span className='mx-8'>
                <img src={switching} alt='arrows icon' />
              </span>
              <div className='input-wrapper'>
                <img src={pointer} alt='pointer icon' />
                <input type='text' placeholder='Los Angeles (LAX)' />
              </div>
            </div>
            <div className='switch-flight__date-wrapper flex justify-between items-center'>
              <img src={calendar} alt='pointer icon' />
              <input type='date' />
              <div className='separator'></div>
              <input type='date' />
            </div>
            <button className='switch-flight__button' type='submit'>
              <img src={glass} alt='glass icon' />
            </button>
          </form>
        </div>
        <div className='flight-listing__results--filter-date'>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <FlightResults>
          <FlightResultsCard />
          <FlightResultsCard />
          <FlightResultsCard />
          <FlightResultsCard />
        </FlightResults>
      </div>
    </section>
  )
}

export default FlightListing
