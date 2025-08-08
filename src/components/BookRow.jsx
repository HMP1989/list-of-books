const BookRow = ({ book, deleteBook }) => {
  return (
    <tr key={book.number}>
      <td>{book.number}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td onClick={() => deleteBook(book.number)}>
        <img src="/icons/trash.svg" className="trash" />
      </td>
    </tr>
  );
};

export default BookRow;
