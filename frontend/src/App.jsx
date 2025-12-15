
import './App.css'
import BookSlider from './components/book-slider/BookSlider'
import { Header } from './components/header/Header'
import HeadingTitle from './components/heading-title/HeadingTitle'
import Services from './components/services/Services'
import Slider from './components/slider/Slider'
import { bestSellerBooks, mostGiftedBooks, mostWishedForBooks } from './data/books'

function App() {
  return (

    <div>
      <Header />
      <Slider />
      <Services />
      <HeadingTitle title="Best Seller" />
      <BookSlider data={bestSellerBooks} />

      <HeadingTitle title="Most gifted" />
      <BookSlider data={mostGiftedBooks} />

      <HeadingTitle title="Most wished for" />
      <BookSlider data={mostWishedForBooks} />

    </div>
  )
}

export default App
