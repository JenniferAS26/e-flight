/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types'
import './styles.scss'

const Gallery = ({ children }) => {
  Gallery.propTypes = {
    children: PropTypes.element.isRequired
  }

  return (
    <section className='gallery-container'>
      <h2>What's new?</h2>
      <div>
        {children}
      </div>
      <button type='button'>Read more articles</button>
    </section>
  )
}

export default Gallery
