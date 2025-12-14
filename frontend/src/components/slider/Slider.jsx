import './slider.css'
import book1 from '../../images/book1.png'
import book2 from '../../images/book2.png'
import book3 from '../../images/book3.png'

const Slider = () => {
    return (
        <div className='slider-container'>
            <div className="slider-wrapper">
                <div className="slide first-slide">
                    <div className="slide-image-wrapper">
                        <img src={book1} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">Book Store</h1>
                        <p className="slide-info-desc">
                            It's not just reading. it's living the adventure
                        </p>
                    </div>
                </div>
                <div className="slide second-slide">
                    <div className="slide-image-wrapper">
                        <img src={book2} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">The Books For Everyone</h1>
                        <p className="slide-info-desc">
                            You can read at the bookstore or at home
                        </p>
                    </div>
                </div>
                <div className="slide third-slide">
                    <div className="slide-image-wrapper">
                        <img src={book3} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">Check Out The New Titles</h1>
                        <p className="slide-info-desc">
                            We send you the book you want at home
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Slider