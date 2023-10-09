import Gallery from '../../components/Gallery'
import GalleryCard from '../../components/GalleryCard'

const Home = () => {
  return (
    <section className='home-container'>
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
