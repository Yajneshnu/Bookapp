import React, { useState } from 'react';
import Modal from './Modal';
import { useBookContext } from '../contexts/BookContext';
import defaultImage from '../assets/book.jpg';
import { FaHeart } from 'react-icons/fa';

const Card = () => {
  const { filteredData, addFavorite, removeFavorite, favorites } = useBookContext();
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isHeartClicked, setIsHeartClicked] = useState({}); // Store IDs of clicked books

  const openModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const toggleFavorite = (book) => {
    if (favorites.some((favBook) => favBook.id === book.id)) {
      removeFavorite(book.id);
    } else {
      addFavorite(book);
    }
  };

  const handleHeartClick = (book) => {
    const bookId = book.id;
    setIsHeartClicked((prevClicked) => ({
      ...prevClicked,
      [bookId]: !prevClicked[bookId], // Toggle clicked state for the book ID
    }));
    toggleFavorite(book); // Toggle favorite for the clicked book
  };

  return (
    <>
      {filteredData.map((book) => (
        <div key={book.id} className="card">
          <img
            src={book.volumeInfo.imageLinks?.smallThumbnail || defaultImage}
            alt={book.volumeInfo.title}
            onClick={() => openModal(book)}
          />
          <div className="info">
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors}</p>
          </div>
          <div className="buttons">
            <button onClick={() => handleHeartClick(book)}>
              {favorites.some((favBook) => favBook.id === book.id)
                ? 'Remove from Favorites'
                : 'Add to Favorites'}
              <FaHeart color={isHeartClicked[book.id] ? 'red' : 'black'} />
            </button>
          </div>
        </div>
      ))}
      <Modal show={showModal} onClose={() => setShowModal(false)} book={selectedBook} />
    </>
  );
};

export default Card;
