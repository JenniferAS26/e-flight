/* import Datepicker from 'flowbite-datepicker/Datepicker'; */
import './DatePicker.scss'
const index = () => {
  return (
    <section className="DatePicker-page-container">
      <div className="DatePicker-container-wrapper">
        <div className="DataPicker-page-tittle">
          <h1>Find your flight</h1>
        </div>
        <div className="DataPicker-header__wrapper">
          <div className="DatePocker__informacion">
            <div className="round-trip">
              <p>Round trip</p>
              <img src="../../assets/icons/round-tip.svg" alt="doble-flechas" />
            </div>
            <div className="one way">
              <p>One Way</p>
              <img src="../../assets/icons/one-way.svg" alt="flecha" />
            </div>
            <div className="line"><img src="../../assets/icons/Line 1.svg" alt="linea"/></div>
            <div className="passager">
              <span>1</span>
              <img src="../../assets/icons/passeger.svg" alt="pasajero" /></div>
            </div>
          <div className="DatePicker-from-to__container">
           <div className="DatePicker__from-to">
            <h1>Form</h1>
            <p>To</p>
            <img src="../../assets/icons/change.svg" alt="doble-flecha"/>
            <img src="../../assets/icons/Line 2.svg" alt="linea-horizontal" />
           </div>
           <div className="search">
            <img src="../../assets/icons/search.svg" alt="buscar"/>
           </div>
           <div className="DataPicker__Today">
            <span>today</span>
            <h1>houston</h1>
            <p>Texas, United State</p>
            <img src="../../assets/icons/Group 1.svg" alt="" />
           </div>
          </div>
          <div className="DatePicker-calendary__global">
            <div className="DatePicker__Departure">
              <p>Departure date</p>
              <img src="../../assets/icons/calendar-white.svg" alt="calendario-blanco" />
            </div>
            <div className="DatePicker__Returndate">
              <p>Return date</p>
              <img src="../../assets/icons/calendar-orange.svg" alt="calendario-naranja" />
            </div>
            <div className='DatePicker__world'>
              <img src="../../assets/images/world-map.svg" alt="mundo" />
            </div>

            {/* <div class=" relative max-w-sm">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
              </div>
              <input datepicker datepicker-title="Flowbite datepicker" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
            </div>  */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
