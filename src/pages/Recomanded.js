
import React, { useState } from 'react';
import { useBookContext } from '../contexts/BookContext';

const RecommendationForm = () => {
  const { addRecommendation, recommendations } = useBookContext();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !recommendation) {
      alert('Please fill in all fields');
      return;
    }
    addRecommendation({ title, author, recommendation });
    setTitle('');
    setAuthor('');
    setRecommendation('');
  };

  return (
    <div className="recommendation-form-container">
      <form onSubmit={handleSubmit} className="recommendation-form">
        <h2>Recommendation Input</h2>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Recommendation:</label>
          <textarea
            value={recommendation}
            onChange={(e) => setRecommendation(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Recommendation</button>
      </form>
      <div className="recommendation-output-form">
        <h2>RecVoice</h2>
        {recommendations.map((rec, index) => (
          <div key={index}>
            <h3>{rec.title}</h3>
            <p>{rec.author}</p>
            <p>{rec.recommendation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationForm;
