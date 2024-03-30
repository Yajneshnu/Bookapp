import React from 'react';
import { useBookContext } from '../contexts/BookContext';
import defaultImage from '../assets/book.jpg';
   // Import CSS file for styling

function Favorate() {
  const { favorites } = useBookContext();
  return (
    <div style={{marginTop:'10%',marginLeft:'5%'}}>
    <div className="favorites-container">
      {favorites.map((book) => (
        <div key={book.id} className="card">
          <img
            src={book.volumeInfo.imageLinks?.smallThumbnail || defaultImage}
            alt={book.volumeInfo.title}
            className="card-image"
          />
          <div className="card-details">
            <h3 className="card-title">{book.volumeInfo.title}</h3>
            <p className="card-authors">Authors: {book.volumeInfo.authors.join(', ')}</p>
            {/* You can display more details about the book here */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Favorate;
