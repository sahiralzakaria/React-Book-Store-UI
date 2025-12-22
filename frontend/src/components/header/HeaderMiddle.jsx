import { Link } from 'react-router-dom'
import './header.css'
import { useState, useContext } from 'react'
import CartContext from '../../context/cartContext'
import { allBooks } from '../../data/books'


const HeaderMiddle = () => {


    const { cartItemsLength } = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredBooks, setFilteredBooks] = useState([])


    const handleSearch = (e) => {
        const value = e.target.value
        setSearchTerm(value)

        if (value.trim() === '') {
            setFilteredBooks([])
            return
        }

        const results = allBooks.filter(book =>
            book.title.toLowerCase().includes(value.toLowerCase())
        )

        setFilteredBooks(results.slice(0, 5))
    }

    return (
        <div className="header-middle">
            <Link to={'/'} className="header-middle-logo">
                <b>Book</b>
                <i className='bi bi-book'></i>
                <b>Store</b>
            </Link>
            <div className="header-middle-search-box">
                <input
                    type="text"
                    placeholder="Search in our Book Store ...."
                    className="header-middle-search-input"
                    value={searchTerm}
                    onChange={handleSearch}
                />

                <i className="bi bi-search"></i>

                {filteredBooks.length > 0 && (
                    <ul className="search-suggestions">
                        {filteredBooks.map(book => (
                            <li key={book.id}>
                                <Link
                                    to={`/book/${book.id}`}
                                    onClick={() => {
                                        setSearchTerm('')
                                        setFilteredBooks([])
                                    }}
                                >
                                    {book.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>



            <Link to='/cart' className="header-middle-cart-wrapper">
                {cartItemsLength > 0 && <b className='cart-notification'>{cartItemsLength}</b>}
                <i className="bi bi-cart2" ></i>
            </Link>
        </div>
    )
}

export default HeaderMiddle