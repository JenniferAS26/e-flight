import Header from "../../components/Header"; // Ruta relativa para llegar al componente Header
import Footer from "../../components/Footer"; // Ruta relativa para llegar al componente Footer
import Gallery from '../../components/Gallery'
import GalleryCard from '../../components/GalleryCard'

const Home = () => {
  return (
    <section className='home-container'>
      <Header />
      <Gallery>
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </Gallery>
      <Footer />
    </section>
  )
}

export default Home
