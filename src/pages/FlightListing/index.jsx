// import { Tabs } from 'flowbite-react'
import Filters from '../../components/Filters'
import SortBy from '../../components/SortBy'
// import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi'
// import { MdDashboard } from 'react-icons/md'
import FlightResults from '../../components/FlightResults'
import FlightResultsCard from '../../components/FlightResultsCard'
import './styles.scss'

const FlightListing = () => {
  return (
    <section className='flight-listing'>
      <div className="flight-listing__filters">
        <SortBy />
        <Filters />
      </div>
      <div className='flight-listing__results'>
        {/* <Tabs.Group
          aria-label="Default tabs"
          style="default"
        >
          <Tabs.Item
            active
            icon={HiUserCircle}
            title="Profile"
          >
            <p>
              fecha 1
            </p>
          </Tabs.Item>
          <Tabs.Item
            icon={MdDashboard}
            title="Dashboard"
          >
            <p>
              fecha 2
            </p>
          </Tabs.Item>
          <Tabs.Item
            icon={HiAdjustments}
            title="Settings"
          >
            <p>
              fecha 3
            </p>
          </Tabs.Item>
          <Tabs.Item
            icon={HiClipboardList}
            title="Contacts"
          >
            <p>
              fecha 4
            </p>
          </Tabs.Item>
        </Tabs.Group> */}
        <FlightResults>
          <FlightResultsCard />
          <FlightResultsCard />
        </FlightResults>
      </div>
    </section>
  )
}

export default FlightListing
