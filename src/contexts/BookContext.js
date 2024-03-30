

import React, { createContext, useContext, useState } from 'react';

const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [reviews, setReviews] = useState({});
  const [ratings, setRatings] = useState({});
  const [recommendations, setRecommendations] = useState([]); 
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const removeBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  const addFavorite = (book) => {
    setFavorites([...favorites, book]);
  };

  const removeFavorite = (bookId) => {
    setFavorites(favorites.filter((book) => book.id !== bookId));
  };
  const addReview = (bookId, review) => {
    setReviews(prevReviews => ({
      ...prevReviews,
      [bookId]: [...(prevReviews[bookId] || []), review]
    }));
  };

  const addRating = (bookId, rating) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [bookId]: rating
    }));
  };

  // Function to add a new recommendation
  const addRecommendation = (recommendation) => {
    setRecommendations(prevRecommendations => [...prevRecommendations, recommendation]);
  };

  return (
    <BookContext.Provider value={{ 
      bookData, 
      setBookData, 
      filteredData, 
      setFilteredData, 
      reviews, 
      addReview, 
      ratings, 
      addRating, 
      recommendations, 
      addRecommendation,
      favorites,
      addBook,
      removeBook,
      addFavorite,
      removeFavorite,
    }}>
      {children}
    </BookContext.Provider>
  );
};
