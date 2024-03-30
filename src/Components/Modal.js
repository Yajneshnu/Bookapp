

import React, { useState } from 'react';
import { useBookContext } from '../contexts/BookContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Modal = ({ show, book, onClose }) => {
  const { addReview, reviews } = useBookContext();
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddReview = () => {
    if (newReview.trim() === '') {
      alert('Please type your review.');
      return;
    }
    if (rating === 0) {
      alert('Please select a rating.');
      return;
    }
    addReview(book.id, `${newReview} (Rating: ${rating}/5)`);
    setNewReview('');
    setRating(0);
  };

  let thumbnail = book?.volumeInfo?.imageLinks?.smallThumbnail;

  return (
    <>
      {show && book && (
        <div className="overlay">
          <div className="overlay-inner">
            <button className="close" onClick={onClose}><i className="fas fa-times"></i></button>
            <div className="inner-box">
              <img src={thumbnail} alt="" />
              <div className="info">
                <h1>{book.volumeInfo.title}</h1>
                <h3>Author: {book.volumeInfo.authors}</h3>
                <h4>Publisher: {book.volumeInfo.publisher}</h4>
                <p>Published Date: {book.volumeInfo.publishedDate}</p>

                <a href={book.volumeInfo.previewLink}><button>More</button></a>
                <div>
                  <label>Rating:</label>
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className={index < rating ? 'star-filled' : 'star-empty'}
                      onClick={() => setRating(index + 1)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="description-scroll">
              <h4 className="description"><p>Description: {book.volumeInfo.description}</p></h4>

            </div>
            <h3>Review:</h3>
            {reviews[book.id] && reviews[book.id].map((review, index) => (
              <p key={index}>- {review}</p>
            ))}
            <div className="review-container">
              <textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder="Add your review"
              ></textarea>
              <button onClick={handleAddReview}>Add Review</button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
