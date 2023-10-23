import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
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
import { Pagination } from 'flowbite-react'
import { FlightSearchContext } from '../../context/FlightSearchContext'
import SearchableDropdown from '../../components/SearchableDropdown'
import { Button, Spinner } from 'flowbite-react'
import './styles.scss'



const FlightListing = () => {
  const [departureValue, setDepartureValue] = useState()
  const [arrivalValue, setArrivalValue] = useState()
  const { register, handleSubmit } = useForm()

  const { filter, flightList } = useContext(FlightSearchContext)

  const [currentPage, setCurrentPage] = useState(1)
  const onPageChange = (page) => setCurrentPage(page)

  const searchFlight = JSON.parse(localStorage.getItem('searchDetail'))

  const onSubmit = ( changeFlightDetails ) => {
    const newFlightDetails = {
      ...searchFlight,
      departureDateChange: changeFlightDetails.departureDateChange,
      arrivalDateChange: changeFlightDetails.arrivalDateChange,
      departure: departureValue,
      arrival: arrivalValue
    }
    console.log(newFlightDetails)
  }
  
  

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
          <form className='switch-flight' onSubmit={ handleSubmit(onSubmit) }>
            <div className='switch-flight__wrapper flex justify-between items-center'>
              <div className='input-wrapper'>
                <img src={pointer} alt='pointer icon' />
                {/* <input type='text' placeholder='Houston (HOU)' /> */}
                <SearchableDropdown 
                  options={filter()}
                  label='municipality'
                  id='3'
                  selectedVal={departureValue}
                  handleChange={(val) => {
                    setDepartureValue(val)
                    console.log(val)
                  }}
                />
              </div>
              <span className='mx-8'>
                <img src={switching} alt='arrows icon' />
              </span>
              <div className='input-wrapper'>
                <img src={pointer} alt='pointer icon' />
                {/* <input type='text' placeholder='Los Angeles (LAX)' /> */}
                <SearchableDropdown 
                  options={filter()}
                  label='municipality'
                  id='3'
                  selectedVal={arrivalValue}
                  handleChange={(val) => {
                    setArrivalValue(val)
                    console.log(val)
                  }}
                />
              </div>
            </div>
            <div className='switch-flight__date-wrapper flex justify-between items-center'>
              <img src={calendar} alt='pointer icon' />
              <input 
                className='date-input' 
                type='date' 
                name='departureDateChange'
                { ...register('departureDateChange') }
              />
              <div className='separator'></div>
              <input 
                className='date-input' 
                type='date' 
                name='arrivalDateChange'
                { ...register('arrivalDateChange') }
              />
            </div>
            <button className='switch-flight__button' type='submit'>
              <img src={glass} alt='glass icon' />
            </button>
          </form>
        </div>
        <div className='flight-listing__results--filter-date'>
          <ul className='list-date'>
            <li className='list-date__option'>
              <div className='list-date__option--wrapper active'>
                <span>Fri, 18 Feb</span>
                <span>148 USD</span>
              </div>
            </li>
            <li className='list-date__option'>
              <div className='list-date__option--wrapper'>
                <span>Fri, 18 Feb</span>
                <span>148 USD</span>
              </div>
            </li>
            <li className='list-date__option'>
              <div className='list-date__option--wrapper'>
                <span>Fri, 18 Feb</span>
                <span>148 USD</span>
              </div>
            </li>
            <li className='list-date__option'>
              <div className='list-date__option--wrapper'>
                <span>Fri, 18 Feb</span>
                <span>148 USD</span>
              </div>
            </li>
            <li className='list-date__option'>
              <div className='list-date__option--wrapper'>
                <span>Fri, 18 Feb</span>
                <span>148 USD</span>
              </div>
            </li>
          </ul>
        </div>
        <FlightResults>
          {
            flightList?.length 
            ? flightList.map( (flightSearch, index) => (
              <FlightResultsCard key={index} data={flightSearch} />
            )) 
            : <div className='button-loading-container w-full grid justify-center items-center'>
                <Button color="gray" className='spiner-button'>
                    <Spinner
                      aria-label="Alternate spinner button example"
                      size="xl"
                    />
                    <span className="loading-span pl-3">
                      Loading...
                    </span>
                  </Button>
              </div>
          }
        </FlightResults>
        <div className='flight-listing__results--pagination'>
          <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange}
            showIcons
            totalPages={100}
          />
        </div>
      </div>
    </section>
  )
}

export default FlightListing
