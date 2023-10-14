import iconmap from '../../assets/icons/maps.svg'
import sol from '../../assets/icons/sun.svg'
import mapworld from '../../assets/images/world-map2.svg'
import NY from '../../assets/images/new-york.svg'
import holly from '../../assets/images/hollywood.svg'
import './styles.scss'



const Explore = () => {
  return (

    <div className='explore-container'> 
      <div className='explore-container__top--container'>

        <div className='explore-container__title'>
          <div className='explore-container__img-title'>
          <img src={iconmap} alt="" />
          <h1>Trip from <span>Houston</span></h1>
          </div>

          <div className='explore-container__boton'><button>Explore destination</button>
          </div>
        </div>     
        <div className='explore-container__img--map'>
          <img src={mapworld} alt="" /> 
        </div>
        <div className='explore-container__cards'>
          <div className='explore-container__new-york'>
            <div className='explore-container__img-new-york'>
            <img src={NY} alt="" />
            </div>
            <div className='explore-container__info-new-york'>
              <h2>NEW YORK</h2>
              <div> 9 - 10 Feb, 2023</div>
              <div className='flex items-center'>
                <img src={sol} alt=""/>
                <h3>7hr 15m</h3>
              </div>
              <span className='valor'>$294</span>
            </div>
          </div>
          <div className='explore-container__los-angeles'>
            <div className='explore-container__img-los-angeles'>
              <img src={holly} alt="" />
            </div>
            <div className='explore-container__info-los-angeles'>
              <h2>LOS ANGELES</h2>
              <div> 9 - 10 Feb, 2023</div>
              <div>
                <img src={sol} alt=""/>
                <h3>6hr 18m</h3>
              </div>

              <span className='valor'>$399</span>
            </div>
          </div>
        </div>
      </div>
    </div>   
  )
}


export default Explore