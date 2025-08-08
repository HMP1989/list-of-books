import { useState } from "react";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "react-bootstrap/Form";

const BooForm = ({ onAddBook, existingBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
      Clean the input values by removing extra spaces from 'number' and 'author'.
      Then check within existingBooks if any book has:
        - the same number, OR
        - the same author (ignoring case and extra spaces) AND the same number.
      This ensures no duplicate book entries based on unique identifiers.
      If duplication is detected, display an error notification and stop the form submission.

      I chose to use the some method since it efficiently stops iterating over the array immediately 
      after finding the first matching element, improving performance.
    */

    const trimmedNumber = number.trim();
    const trimmedAuthor = author.trim();

    const isDuplicate = existingBooks.some(
      (book) =>
        book.number === trimmedNumber ||
        (book.author.trim().toLowerCase() === trimmedAuthor.toLowerCase() &&
          book.number === trimmedNumber)
    );

    if (isDuplicate) {
      toast.error(
        `The book with number "${trimmedNumber}" or author "${trimmedAuthor}" already exists.`
      );
      return;
    }

    onAddBook({ title, author, number });
    setTitle("");
    setAuthor("");
    setNumber("");
  };

  return (
    <div className="form-container rounded p-4">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" size="lg" controlId="title">
          <Form.Label className="text-white">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" size="lg" controlId="author">
          <Form.Label className="text-white">Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" size="lg" controlId="number">
          <Form.Label className="text-white">Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Number"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>

        <ToastContainer position="top-center" autoClose={8000} />

        <Button type="submit" variant="primary" className="w-100">
          Add
        </Button>
      </form>
    </div>
  );
};

export default BooForm;
