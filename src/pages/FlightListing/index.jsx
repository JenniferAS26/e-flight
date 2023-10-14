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
<<<<<<< HEAD
      <div>
        <Tabs.Group
          aria-label="Default tabs"
          style="default"
        >
          <Tabs.Item
            active
            icon={HiUserCircle}
            title="Profile"
          >
            <p>
              This is
              <span className="font-medium text-gray-800 dark:text-white">
             Profile tabs associated content
              </span>
              .
              Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
              control the content visibility and styling.
            </p>
          </Tabs.Item>
          <Tabs.Item
            icon={MdDashboard}
            title="Dashboard"
          >
            <p>
              This is
              <span className="font-medium text-gray-800 dark:text-white">
                Dashboard tabs associated content
              </span>
              .
              Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
              control the content visibility and styling.
            </p>
          </Tabs.Item>
          <Tabs.Item
            icon={HiAdjustments}
            title="Settings"
          >
            <p>
              This is
              <span className="font-medium text-gray-800 dark:text-white">
                Settings tabs associated content
              </span>
              .
              Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
              control the content visibility and styling.
            </p>
          </Tabs.Item>
          <Tabs.Item
            icon={HiClipboardList}
            title="Contacts"
          >
            <p>
              This is
              <span className="font-medium text-gray-800 dark:text-white">
                Contacts tabs associated content
              </span>
              .
              Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
              control the content visibility and styling.
            </p>
          </Tabs.Item>
        </Tabs.Group>
=======
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
            <div className='input-wrapper'>
              <img src={pointer} alt='pointer icon' />
              <input type='text' placeholder='Houston (HOU)' />
            </div>
            <span>
              <img src={switching} alt='arrows icon' />
            </span>
            <div className='input-wrapper'>
              <img src={pointer} alt='pointer icon' />
              <input type='text' placeholder='Los Angeles (LAX)' />
            </div>
            <div className='input-wrapper'>
              <img src={calendar} alt='pointer icon' />
              <input type='date' />
            </div>
            <span>-</span>
            <div className='input-wrapper'>
              <img src={calendar} alt='pointer icon' />
              <input type='date' />
            </div>
            <button type='submit'>
              <img src={glass} alt='glass icon' />
            </button>
          </form>
        </div>
        <div className='flight-listing__results--filter-date'>hola</div>
        <FlightResults>
          <FlightResultsCard />
          <FlightResultsCard />
          <FlightResultsCard />
          <FlightResultsCard />
        </FlightResults>
>>>>>>> 6c878a97cb2b6a178d4b6cadf9c9660da75006ba
      </div>
    </section>
  )
}

export default FlightListing
