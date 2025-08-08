import "./App.css";
import MainContent from "./pages/MainContent";

function App() {
  return (
    <section className="books d-flex flex-column">
      <div className="container">
        <div className="content">
          <h1 className="text-center mt-5 text-white fs-1">List of Books</h1>
          <p className="text-center mt-2 text-white fs-3 fw-light">
            Add your new book to the library.
          </p>
          <MainContent />
        </div>
      </div>
    </section>
  );
}

export default App;
