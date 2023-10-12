import Gallery from '../../components/Gallery'
import GalleryCard from '../../components/GalleryCard'
import DatePicker from '../../components/DatePicker/index'

const Home = () => {
  return (
    <section className='home-container'>
      <DatePicker />
      <Gallery>
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </Gallery>
    </section>
  )
}

export default Home
