import { AiOutlineArrowRight } from 'react-icons/ai'
import './styles.scss'

const GalleryCard = ({ imageUrl }) => {
  return (
    <div className='card-home'>
      <div className='card-home__image-container'>
        <img className='card-home__image-container--image' src={imageUrl} alt='image card' />
      </div>
      <div className='card-home__details'>
        <span className='card-home__details--date'>Dec 24, 2022</span>
        <div className="info-wrapper">
          <h3 className='card-home__details--city'>City</h3>
          <div className='card-home__details--labels'>
            <span className='label one-way'>One way</span>
            <span className='label category'>Category</span>
          </div>
          <div className='bottom'>
            <div className='card-home__details--price-info'>
              <span className='from'>from</span>
              <h3 className='price'>COP 281.840,00</h3>
              <span className='type'>Non stop flight</span>
            </div>
            <button className='card-home__details--button'>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryCard
