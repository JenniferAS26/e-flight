import Gallery from '../../components/Gallery'
import GalleryCard from '../../components/GalleryCard'
import Explore from '../../components/Explore'
const Home = () => {
  return (
    <section className='home-container'>
      <Explore />
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
