import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/bookcard.css";  // Import the CSS for styling

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <Link to={`/book/${book._id}`} className="view-details">View Details</Link>
      </div>
    </div>
  );
};

export default BookCard;
