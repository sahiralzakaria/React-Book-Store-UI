import './slider.css'
import { useState } from 'react'
import book1 from '../../images/book1.png'
import book2 from '../../images/book2.png'
import book3 from '../../images/book3.png'

const Slider = () => {

    const slides = [
        {
            img: book1,
            title: "Book Store",
            desc: "It's not just reading. it's living the adventure"
        },
        {
            img: book2,
            title: "The Books For Everyone",
            desc: "You can read at the bookstore or at home"
        },
        {
            img: book3,
            title: "Check Out The New Titles",
            desc: "We send you the book you want at home"
        }
    ];


    const [slideIndex, setSlideIndex] = useState(0);

    // Handle Click
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slides.length - 1);
        } else {
            setSlideIndex(slideIndex < slides.length - 1 ? slideIndex + 1 : 0);
        }
    };
    return (
        <div className='slider-container'>
            <i onClick={() => handleClick('left')} className="bi bi-chevron-double-left arrow-left"></i>
            <div className="slider-wrapper" style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
                {slides.map((book, index) => (
                    <div className={`slide slide-${index + 1}`} key={index}>
                        <div className="slide-image-wrapper">
                            <img src={book.img} alt="" />
                        </div>
                        <div className="slide-info-wrapper">
                            <h1 className="slide-info-title">{book.title}</h1>
                            <p className="slide-info-desc">
                                {book.desc}
                            </p>
                        </div>
                    </div>

                ))


                }
            </div>
            <i onClick={() => handleClick('right')} className="bi bi-chevron-double-right arrow-right"></i>
        </div>

    )
}

export default Slider