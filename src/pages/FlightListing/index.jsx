import { Tabs } from 'flowbite-react'
import Filters from '../../components/Filters'
import SortBy from '../../components/SortBy'
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi'
import { MdDashboard } from 'react-icons/md'
import './styles.scss'

const FlightListing = () => {
  return (
    <section className='flight-listing'>
      <div className="flight-listing__filters">
        <SortBy />
        <Filters />
      </div>
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
      </div>
    </section>
  )
}

export default FlightListing
