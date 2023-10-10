import Filters from '../../components/Filters'
import SortBy from '../../components/SortBy'
import './styles.scss'

const FlightListing = () => {
  return (
    <section className='flight-listing'>
      <SortBy />
      <Filters />
    </section>
  )
}

export default FlightListing
