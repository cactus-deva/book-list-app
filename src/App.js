import { useState } from "react"
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([])

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map(book => {
            if(book.id === id) {
                return {...book, title: newTitle}
            }
            return book;
        })
        setBooks(updatedBooks)
    }
    const deleteBookById = (id) => {
        const updatedBooks = books.filter(book => {
            return book.id !== id; 
        })
        setBooks(updatedBooks)
    }

    const createBook = (title) => {
        const updateBooks = [
            ...books,
            { id: Math.floor(Math.random() * 9999), title: title }
        ]
        setBooks(updateBooks)
    }
    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
            <BookCreate onCreate={createBook} />
        </div>)
}

export default App                  