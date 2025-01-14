import {useState} from 'react'
import BookEdit from './BookEdit'

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false)
    
    const handleSubmit = (id, title) => {
        setShowEdit(false)
        onEdit(id, title)
    }
    const handleClick = () => {
        onDelete(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    } 
    
    let content = <h3>{book.title}</h3>
    if(showEdit) {
        content = <BookEdit onSubmit={handleSubmit} onEdit={onEdit} book={book} />
    }

    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
            <div>{content}</div>
            {/* {showEdit === false ? <h3>{book.title}</h3> : <BookEdit />} */}
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleClick}>Delete</button>
            </div>
        </div>)
}

export default BookShow