import React from 'react'

const Rating = ({ rating, reviews }) => {

    const getStarClass = (rating, star) => {
        if (rating >= star) return "bi bi-star-fill";
        if (rating >= star - 0.5) return "bi bi-star-half";
        return "bi bi-star";
    };

    return (
        <div className='rating'>
            {[1, 2, 3, 4, 5].map((star) => (
                <i key={star} className={getStarClass(rating, star)}></i>
            ))}

            <span>{rating}</span>
            <span>{`( ${reviews} reviews )`}</span>
        </div>

    )
}

export default Rating