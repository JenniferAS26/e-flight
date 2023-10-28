import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import SearchableDropdown from '../SearchableDropdown'
import { FlightSearchContext } from '../../context/FlightSearchContext'
import banner from '../../assets/images/banner.svg'
import sun from '../../assets/images/sun.svg'
import round from '../../assets/icons/round-tip.svg'
import oneWay from '../../assets/icons/one-way.svg'
import passenger from '../../assets/icons/passeger.svg'
import ticket from '../../assets/icons/ticket.svg'
import switchIcon from '../../assets/icons/switch-green.svg'
import search from '../../assets/icons/search.svg'
import Datepicker from "react-tailwindcss-datepicker"
import './styles.scss'

const TransitionComponent = () => {

  const { dispatch } = useContext(FlightSearchContext)
  const navigate = useNavigate()
  const [value, setValue] = useState({ 
    startDate: new Date(), 
    endDate: new Date().setMonth(11) 
  }); 
  
  const handleValueChange = (newValue) => {
    setValue(newValue); 
  } 

  const [departureValue, setDepartureValue] = useState()
  const [arrivalValue, setArrivalValue] = useState()
  const { filter } = useContext(FlightSearchContext)
  const { register, handleSubmit } = useForm()

  const onSubmit = (searchDetail) => {
    const newSearchModified = {
      tripType: searchDetail.tripType,
      passengers: searchDetail.passengers,
      classesType: searchDetail.classesType,
      departureDate: value.startDate,
      arrivalDate: value.endDate,
      departure: departureValue,
      arrival: arrivalValue,
    }
    dispatch(
      {
        type: 'Serch_Flight',
        payload: newSearchModified
      }
    )
    navigate('/flight-listing')
  }

  return (
    <section className='hero'>
      <div className={`hero__image-container`}>
        <img className='banner' src={banner} alt='map world' />
        <div className='hero__image-container--weather weather'>
          <span className='weather__today'>current day</span>
          <div className='weather__bar'></div>
          <div className='weather__description'>
            <h3 className='weather__description--city'>City</h3>
            <span className='weather__description--country'>city, country</span>
            <div className='weather__description--image'>
              <img className='image' src={sun} alt="" />
            </div>
            <h3 className='weather__description--degrees'>28°</h3>
            <span className='weather__description--span'>mostly sunny</span>
          </div>
        </div>
      </div>
      <form 
        className='hero__form' 
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='hero__form--top-container'>
          <div className='radio-wrapper'>
            <input 
              className='input-radio' 
              type="radio" 
              name='tripType'
              value='round'
              { ...register('tripType') } 
              id='round' 
              checked 
            />
            <input 
              className='input-radio' 
              type="radio" 
              name='tripType'
              value='one'
              { ...register('tripType') }
              id='one' 
            />
            <div className='switch flex items-center'>
              <label className='round-trip flex' htmlFor="round">
                <img src={round} alt="" />
                <span>Round trip</span>
              </label>
              <label className='one-way flex' htmlFor="one">
                <img src={oneWay} alt="" />
                <span>One way</span>
              </label>
            </div>
          </div>
          <div className='flex'>
            <div className='label-wrapper passenger mr-6'>
              <label htmlFor='passengers'>
                <img src={passenger} alt="" />
              </label>
              <input
                className='passenger'
                type='number'
                placeholder='0'
                id='passengers'
                name='passengers'
                { ...register('passengers') }
              />
            </div>
            <div className='label-wrapper classes ml-6'>
              <label htmlFor='classes'>
                <img src={ticket} alt="" />
              </label>
              <select
                className='classes'
                name='classesType'
                { ...register('classesType') }
                id="classes"
              >
                <option value="ECONOMY">Economy</option>
                <option value="PREMUM_ECONOMY">Premium Economy</option>
                <option value="BUSINESS">Business</option>
                <option value="FIRST">First Class</option>
              </select>
            </div>
          </div>
        </div>
        <div className="travel-wrapper">
          <div className='search-wrapper'>
            <div
              className='travel-wrapper__way'
            >
              <label className='travel-wrapper__way--label' htmlFor='departure'>From</label>
              <SearchableDropdown
                options={filter()}
                label='municipality'
                id='3'
                selectedVal={departureValue}
                handleChange={(val) => {
                  setDepartureValue(val)
                }}
              />
            </div>
            <img
              className='travel-wrapper__image ml-6'
              src={switchIcon}
              alt=""
            />
            <div
              className='travel-wrapper__way  ml-6'
            >
              <label className='travel-wrapper__way--label' htmlFor="">To</label>
              <SearchableDropdown
                options={filter()}
                label='municipality'
                id='3'
                selectedVal={arrivalValue}
                handleChange={(val) => {
                  setArrivalValue(val)
                }}
              />
            </div>
          </div>
          <button className='submit-button' type='submit'>
            <img src={search} alt="" />
          </button>
        </div>
        {/* <div className='travel-date departure'>
          <label htmlFor='departure-date'
          >
            <img src={calendarWhite} alt="" />
          </label>
          <input
            className='trip-date'
            type='date'
            placeholder='departure-date'
            id='departure-date'
            name='departureDate'
            { ...register('departureDate') }
          />
        </div>
        
        <div className='travel-date arrival'>
          <label htmlFor='arrival-date'
          >
            <img src={calendarOrange} alt="" />
          </label>
          <input
            className='trip-date'
            type='date'
            placeholder='arrival-date'
            id='arrival-date'
            name='arrivalDate'
            { ...register('arrivalDate') }
          />
        </div> */}
        <div className='datepicker-wrapper'>
          <Datepicker
            className='datepicker-component'
            primaryColor={"violet"}
            value={value}
            onChange={handleValueChange}
          />
        </div>
      </form>
    </section>
  )
}

export default TransitionComponent
