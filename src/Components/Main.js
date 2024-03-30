

import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useBookContext } from '../contexts/BookContext'
import { API_URL, API_KEY } from '../contants/indexs';

const Main = () => {
  const { bookData, setBookData, setFilteredData } = useBookContext();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const searchBook = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${API_URL}?q=${search}&key=${API_KEY}&maxResults=40`
      );
      setBookData(res.data.items);
      setFilteredData(res.data.items);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = (filterCriteria) => {
    let filteredBooks = [];

    if (filterCriteria === "fiction") {
      filteredBooks = bookData.filter((book) => {
        return (
          book.volumeInfo.categories &&
          book.volumeInfo.categories.includes("Fiction")
        );
      });
    }  else {
      filteredBooks = bookData;
    }

    setFilteredData(filteredBooks);
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>Welcome to the World of Wisdom..</h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && searchBook()}
            />
            <button onClick={searchBook}>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="filter-buttons">
            <button className="filter-button" onClick={() => handleFilter("fiction")}>Fiction</button>

            <button className="filter-button" onClick={() => handleFilter("all")}>All Books</button>
          </div>

          {/* <img src="./images/bg2.png" alt="" /> */}
        </div>
      </div>

      <div className="container">
        {loading && <p>Loading...</p>}
        {!loading && bookData.length === 0 && <p className="containerp">No books found.</p>}
        {!loading && bookData.length > 0 && <Card />}
      </div>
    </>
  );
};

export default Main;
