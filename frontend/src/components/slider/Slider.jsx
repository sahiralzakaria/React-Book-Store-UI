import './slider.css'
import { useState } from 'react'
import book1 from '../../images/book1.png'
import book2 from '../../images/book2.png'
import book3 from '../../images/book3.png'

const Slider = () => {

    const books = [
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
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(slideIndex + 1);
        }
    };
    return (
        <div className='slider-container'>
            {slideIndex !== 0 && <i onClick={() => handleClick('left')} className="bi bi-chevron-double-left arrow-left"></i>}
            <div className="slider-wrapper" style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
                {books.map((book, index) => (
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
            {slideIndex !== books.length - 1 && <i onClick={() => handleClick('right')} className="bi bi-chevron-double-right arrow-right"></i>}
        </div>

    )
}

export default Slider