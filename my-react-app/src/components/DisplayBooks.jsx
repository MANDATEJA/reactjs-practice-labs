import { useEffect, useState } from "react";

const DisplayBooks = () => {
  const [books, setBooks] = useState(["Wings of Fire", "The Alchemist", "Atomic Habits"]);

  useEffect(() => {
    fetch("http://localhost:8080/getAllBooks")
    .then((response) => response.json())
    .then((json) => {setBooks(json)})
    .catch((err) => { console.error(err.message)});
  }, [])

  return (
    <div>
      <ul>
        {books.map((book) => {
          return (<li key={book.title}>{book.title}</li>)
        })}
      </ul>

      {/* <div>This is from books component: {books}</div> */}
    </div>
  )
};

export {
  DisplayBooks
}