import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import SearchableDropdown from '../SearchableDropdown'
import { FlightSearchContext } from '../../context/FlightSearchContext'
import './styles.scss'

const TransitionComponent = () => {
  const navigate = useNavigate()

  const [departureValue, setDepartureValue] = useState()
  const [arrivalValue, setArrivalValue] = useState()
  const { filter } = useContext(FlightSearchContext)
  const { register, handleSubmit } = useForm()

  const onSubmit = (searchDetail) => {
    const newSearchModified = {
      tripType: searchDetail.tripType,
      passengers: searchDetail.passengers,
      classesType: searchDetail.classesType,
      departureDate: searchDetail.departureDate,
      arrivalDate: searchDetail.arrivalDate,
      departure: departureValue,
      arrival: arrivalValue
    }
    console.log(newSearchModified)
    localStorage.setItem('searchDetail', JSON.stringify(newSearchModified))
    navigate('/flight-listing')
    window.location.reload()
  }

  return (
    <form className="grid" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="round-trip">round trip</label>
      <input 
       className='round-trip'
        type="radio" 
        placeholder="round trip" 
        id="round-trip" 
        name='tripType'
        value='round'
        { ...register('tripType') }
      />
      <br />
      <label htmlFor="one-way">one way</label>
      <input 
      className='one-way'
        type="radio" 
        placeholder="one way" 
        id="one-way" 
        name='tripType'
        value='one'
        { ...register('tripType') }
      />
      <br />
      <label htmlFor="passengers">passengers</label>
      <input 
      className='passenger'
        type="number" 
        placeholder="passengers" 
        id="passengers" 
        name='passengers'
        { ...register('passengers') }
      />
      <br />
      <label htmlFor="classes">classes</label>
      <input 
        className='classes'
        type="text" 
        placeholder="classes" 
        id="classes" 
        name='classesType'
        { ...register('classesType') }
      />
      <br />
      <label htmlFor="departure">departure</label>
      {/* <input 
        type="text" 
        placeholder="departure" 
        id="departure" 
        name='departureCity'
        { ...register('departureCity') }
      /> */}
      <SearchableDropdown 
        options={filter()}
        label='municipality'
        id='3'
        selectedVal={departureValue}
        // name='departureCity'
        // { ...register('departureCity') }
        handleChange={(val) => {
          setDepartureValue(val)
          console.log(val)
        }}
      />
      <br />
      <label htmlFor="arrival">arrival</label>
      {/* <input 
        type="text" 
        placeholder="arrival" 
        id="arrival" 
        name='arrivalCity'
        { ...register('arrivalCity') }
      /> */}
      <SearchableDropdown 
        options={filter()}
        label='municipality'
        id='3'
        selectedVal={arrivalValue}
        // name='arrivalCity'
        // { ...register('arrivalCity') }
        handleChange={(val) => {
          setArrivalValue(val)
          console.log(val)
        }}
      />
      <br />
      <label htmlFor="departure-date">departure-date</label>
      <input 
        className='daparture'
        type="date" 
        placeholder="departure-date" 
        id="departure-date" 
        name='departureDate'
        { ...register('departureDate') }
      />
      <br />
      <label htmlFor="arrival-date">arrival-date</label>
      <input 
       className='date'
        type="date" 
        placeholder="arrival-date" 
        id="arrival-date" 
        name='arrivalDate'
        { ...register('arrivalDate') }
      />

      <input  className='search' type="submit" value='BUSCAR' />
    </form>
  )
}

export default TransitionComponent
