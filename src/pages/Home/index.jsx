import { useEffect, useState } from 'react'
import Gallery from '../../components/Gallery'
import GalleryCard from '../../components/GalleryCard'
import DatePicker from '../../components/DatePicker'
import Explore from '../../components/Explore'
import TransitionComponent from '../../components/TransitionComponent'

const Home = () => {
  const [randomImages, setRandomImages] = useState([])
  
  useEffect(() => {
    fetch('https://api.unsplash.com/photos/?client_id=FP6o71rtFQqnYRrRXDvf7d07O49T7SH7OI7eUdugG0E')
      .then(response => response.json())
      .then(data => setRandomImages(data))
  }, [])

  return (
    <section className='home-container'>
      <TransitionComponent />
      <Explore />
      <Gallery>
        {
          randomImages.map((image, index) => (
            <GalleryCard key={index} imageUrl={image?.urls.regular} />
            ))
          }
      </Gallery>
      {/* <DatePicker /> */}
    </section>
  )
}

export default Home
