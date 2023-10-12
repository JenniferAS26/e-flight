import React from 'react'
import PropTypes from 'prop-types'
// import { Carousel } from 'flowbite-react'
import './styles.scss'

const Gallery = ({ children }) => {
  Gallery.propTypes = {
    children: PropTypes.element.isRequired
  }

  return (
    <section className='gallery-container'>
      <h2 className='gallery-container__title'>What's new?</h2>
      <div className='gallery-container__cards-container'>
          {children}
        
      </div>
      <button className='gallery-container__button'>Read more articles</button>
      {/* <div className='w-screen'>
        <Carousel slide={false}>
          {children}
        </Carousel>
      </div> */}
    </section>
  )
}

export default Gallery
