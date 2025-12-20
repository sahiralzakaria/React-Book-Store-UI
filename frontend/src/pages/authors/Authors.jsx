import './author.css';
import { authors } from '../../data/authors'

const Authors = () => {
    return (
        <section className="authors">
            <div className="authors-search-wrapper">
                <input
                    type="search"
                    placeholder="Search in authors"
                />
            </div>
            <div className="authors-wrapper">
                {authors.map((author) => (
                    <div key={author.id} className="author">
                        <img
                            src={author.image}
                            alt={author.name}
                            className="author-img"
                        />
                        <h2 className="author-name">{author.name}</h2>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Authors