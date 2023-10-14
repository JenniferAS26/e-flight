import location from '../../assets/icons/maps.svg'
import map from '../../assets/images/world-map2.svg'
import sunIcon from '../../assets/icons/sun.svg'
import NY from '../../assets/images/new-york.svg'
import holly from '../../assets/images/hollywood.svg'
import './styles.scss'

const Explore = () => {
  return (
    <section className='explore-container'>
      <div className='explore-container__top-container'>
        <div className='explore-container__top-container--title-container'>
          <img className='map-image' src={location} alt='location icon' />
          <h2 className='title'>Trip from <span>Houston</span></h2>
        </div>
        <button className='explore-container__top-container--button'>Explore destination</button>
      </div>
      <div className='explore-container__image-container'>
        <img src={map} alt="map picture" />
      </div>
      <div className='explore-container__cards-container'>
        <article className='explore-container__cards-container--card'>
          <div className='image-container'>
            <img src={NY} alt="" />
          </div>
          <div className='details-container'>
            <h3 className='details-container__title'>New York</h3>
            <span className='details-container__date'>9 - 10 Feb, 2023</span>
            <div className='details-container__icon-time'>
              <img src={sunIcon} alt='sun icon' />
              <span>7hr 15m</span>
            </div>
            <span className='details-container__price'>$294</span>
          </div>
        </article>
        <article className='explore-container__cards-container--card'>
          <div className='image-container'>
            <img src={holly} alt="" />
          </div>
          <div className='details-container'>
            <h3 className='details-container__title'>Los Angeles</h3>
            <span className='details-container__date'>9 - 10 Feb, 2023</span>
            <div className='details-container__icon-time'>
              <img src={sunIcon} alt='sun icon' />
              <span>6hr 18m</span>
            </div>
            <span className='details-container__price'>$399</span>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Explore
