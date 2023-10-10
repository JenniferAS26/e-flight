import './styles.scss'
import iconmap from '../../assets/icons/maps.svg'
import sol from '../../assets/icons/sun.svg'
import mapworld from '../../assets/images/world-map2.svg'
import NY from '../../assets/images/new-york.svg'



const Explore = () => {
  return (
    <div className='explore-conteiner'>
      
      <div className='explore-conteiner__img-icon--map'>
        <img src={iconmap} alt="" />
      </div>

      <h4 className='explore-conteiner__title'>Trip from <span>Houston</span></h4>
      <div className='explore-conteiner__button'><button>Explore destination</button></div>

      <div className='explore-conteiner__img-map'>
        <img src={mapworld} alt="" /> 
      </div>

        <div className='explore-conteiner__img-new-york'>
        <img src={NY} alt="" />
        </div>

        <div className='explore-conteiner__new--york'>
        <h3>NEW YORK</h3>
        <p>9 - 10 Feb,2023</p>
        <img src= {sol}alt="" />
        <p>7hr 15m</p>
        <span>$294</span>
        </div>

        <div className='explore-conteiner__Los--Angeles'>
        <h3>LOS ANGELES</h3>
        <p>9 - 10 Feb,2023</p>
        <img src= {sol}alt="" />
        <p>6hr 18m</p>
        <span>$399</span>
        </div>

      </div>
  )
}


export default Explore