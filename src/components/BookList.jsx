import { Button, Table } from "react-bootstrap";
import BookRow from "./BookRow";

const BookList = ({ books, deleteBook, setBooks }) => {
  return (
    <div className="view-container rounded p-4 my-4 my-md-0">
      {books.length > 0 && (
        <>
          <Table striped bordered hover responsive="lg" size="lg">
            <thead>
              <tr>
                <th>Number</th>
                <th>Author</th>
                <th>Title</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book) => (
                <BookRow
                  key={book.number}
                  book={book}
                  deleteBook={deleteBook}
                />
              ))}
            </tbody>
          </Table>
          <Button
            variant="danger"
            type="button"
            className="w-100"
            onClick={() => setBooks([])}
          >
            Remove All
          </Button>
        </>
      )}
      {books.length < 1 && <div className="text-white">There are no books available.</div>}
    </div>
  );
};

export default BookList;
