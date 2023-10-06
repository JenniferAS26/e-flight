import image from '../../assets/images/gallery-1.svg'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './styles.scss'

const GalleryCard = () => {
  return (
    <div className='card'>
      <div className='card__image-container'>
        <img className='card__image-container--image' src={image} alt='image card' />
      </div>
      <div className='card__details'>
        <span className='card__details--date'>Dec 24, 2022</span>
        <div className="info-wrapper">
          <h3 className='card__details--city'>City</h3>
          <div className='card__details--labels'>
            <span className='label one-way'>One way</span>
            <span className='label category'>Category</span>
          </div>
          <div className='bottom'>
            <div className='card__details--price-info'>
              <span className='from'>from</span>
              <h3 className='price'>COP 281.840,00</h3>
              <span className='type'>Non stop flight</span>
            </div>
            <button className='card__details--button'>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryCard
