import { useEffect, useState } from 'react'
import Gallery from '../../components/Gallery'
import GalleryCard from '../../components/GalleryCard'

const Home = () => {
  const [randomImages, setRandomImages] = useState([])
  useEffect(() => {
    fetch('https://api.unsplash.com/photos/?client_id=FP6o71rtFQqnYRrRXDvf7d07O49T7SH7OI7eUdugG0E')
      .then(response => response.json())
      .then(data => setRandomImages(data))
  }, [])

  return (
    <section className='home-container'>
      <Gallery>
        {
          randomImages.map((image, index) => (
            <GalleryCard key={index} imageUrl={image?.urls.regular} />
          ))
        }
      </Gallery>
    </section>
  )
}

export default Home
