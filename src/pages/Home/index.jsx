import { useCallback, useEffect, useState } from 'react'
import Gallery from '../../components/Gallery'
import GalleryCard from '../../components/GalleryCard'
import Explore from '../../components/Explore'
import { getListOfFlights } from '../../services/flightService'

const Home = () => {
  const [randomImages, setRandomImages] = useState([])
  const [flightList, setFlightList] = useState([])

  useEffect(() => {
    fetch('https://api.unsplash.com/photos/?client_id=FP6o71rtFQqnYRrRXDvf7d07O49T7SH7OI7eUdugG0E')
      .then(response => response.json())
      .then(data => setRandomImages(data))
  }, [])

  const getFlights = useCallback(() => {
    getListOfFlights('BOG', 'MAD', '2023-10-21', '2', true)
      .then((response) => setFlightList(response))
  }, [])
  
  useEffect(() => {
    getFlights()
  }, [getFlights])

  console.log(flightList)
  return (
    <section className='home-container'>
      <Explore />
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
