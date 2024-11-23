import React, { useEffect, useState } from "react";
import Axios from "axios";
import BookCard from "../components/BookCard";
import "../assets/style/home.css";

const Home = ({ userRole, email }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newBook, setNewBook] = useState({ title: "", author: "", description: "" });
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/api/books");
        setBooks(response.data);
      } catch (err) {
        setError("Error fetching books");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleAddBook = async (e) => {
    e.preventDefault();

    if (!newBook.title || !newBook.author || !newBook.description) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await Axios.post("http://localhost:5000/api/books", newBook);
      setBooks((prevBooks) => [...prevBooks, response.data]);
      setNewBook({ title: "", author: "", description: "" });
      setShowAddForm(false);
      setError(""); // Reset error state after successful addition
      alert("Book added successfully!");
    } catch (err) {
      setError("Error adding book. Please try again.");
    }
  };

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <div className="home1">
      
    <div className="homebg">
      <h1>Featured Books</h1>

      {userRole === "admin" && (
        <button onClick={() => setShowAddForm((prev) => !prev)} className="Btn">
          {showAddForm ? "Cancel" : "Add Book"}
        </button>
      )}

      {showAddForm && userRole === "admin" && (
        <form onSubmit={handleAddBook} className="glass-form">
        <label>Title: </label>
        <input
          type="text"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          required
        />
        <label>Author: </label>
        <input
          type="text"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          required
        />
        <label>Description: </label>
        <textarea
          value={newBook.description}
          onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
          required
        />
        <button type="submit">Add Book</button>
      </form>
      
      )}

      <div className="bookingclass">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>

    </div>
    </>
    );
};

export default Home;
