import { useEffect, useState, useCallback } from 'react'
import Gallery from '../../components/Gallery'
import GalleryCard from '../../components/GalleryCard'
import DatePicker from '../../components/DatePicker'
import Explore from '../../components/Explore'
import Ticket from '../../components/Ticket'
const Home = () => {
  const [randomImages, setRandomImages] = useState([])
  
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
 /* console.log(flightList)  */

  return (
    <section className='home-container'>
      <DatePicker />
      <Explore />
      <Gallery>
        {
          randomImages.map((image, index) => (
            <GalleryCard key={index} imageUrl={image?.urls.regular} />
          ))
        }
      </Gallery>
      <Ticket/>
    </section>
  )
}

export default Home
