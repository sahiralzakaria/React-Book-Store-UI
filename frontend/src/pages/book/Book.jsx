import { useParams } from "react-router-dom";
import { bestSellerBooks, mostGiftedBooks, mostWishedForBooks } from "../../data/books";
import Rating from "../../components/book-slider/Rating";
import './book.css';
import { useContext, useState } from "react";
import CartContext from "../../context/cartContext";

const Book = () => {
    const { addToCart } = useContext(CartContext);


    const { id } = useParams();

    const allBooks = [...bestSellerBooks, ...mostGiftedBooks, ...mostWishedForBooks,];
    const book = allBooks.find((book) => book.id === parseInt(id));

    const [quantity, setQuantity] = useState(1)
    return (
        <div className="book">
            <div className="book-content">
                <img
                    src={`/books/${book.image}`}
                    alt={book.title}
                    className="book-content-img"
                />
                <div className="book-content-info">
                    <h1 className="book-title">{book.title}</h1>
                    <div className="book-author">
                        by <span>{book.author}</span> (Author)
                    </div>
                    <Rating rating={book.rating} reviews={book.reviews} />
                    <div className="book-add-to-cart">
                        <input
                            className="book-add-to-cart-input"
                            type="number"
                            min="1"
                            max="100"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                        <button
                            onClick={() => addToCart({ ...book, quantity })}
                            className="book-add-to-cart-btn">
                            <i className="bi bi-cart-plus"></i>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <p className="book-description">
                This book provides a comprehensive and engaging overview of its subject,
                combining clear explanations with practical examples. It is written in a
                simple and accessible style, making it suitable for both beginners and
                experienced readers who want to deepen their understanding. Throughout the
                book, the author focuses on real-world applications and useful insights that
                help readers apply what they learn effectively.
            </p>

            <div className="book-icons">
                <div className="book-icon">
                    <small>Print Length</small>
                    <i className="bi bi-file-earmark-break"></i>
                    <b>{book.printLength} pages</b>
                </div>

                <div className="book-icon">
                    <small>Language</small>
                    <i className="bi bi-globe"></i>
                    <b>{book.language}</b>
                </div>

                <div className="book-icon">
                    <small>Publication Date</small>
                    <i className="bi bi-calendar3"></i>
                    <b>{book.PublicationDate}</b>
                </div>
            </div>
        </div>
    )
}

export default Book