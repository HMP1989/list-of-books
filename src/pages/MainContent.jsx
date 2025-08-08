import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import BooForm from "../components/BookForm";
import { v4 as uuidv4 } from "uuid";

const getDataLocalStorage = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const MainContent = () => {
  const [books, setBooks] = useState(getDataLocalStorage());

  const addBook = (book) => {
    const newBook = { ...book, id: uuidv4() };
    setBooks([...books, newBook]);
  };

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const deleteBook = (number) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.number !== number));
  };

  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between w-100">
      <BooForm onAddBook={addBook} existingBooks={books} />
      <BookList books={books} deleteBook={deleteBook} setBooks={setBooks} />
    </div>
  );
};

export default MainContent;
