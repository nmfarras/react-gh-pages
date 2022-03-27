import { useState } from "react";

import { BookGrid } from "../BookGrid";
import { BookDeleteButton } from "../BookDeleteButton";

import "./BookList.css";

const BookList = (props) => {
    const { list } = props;
    // console.log(props);

    const [books, setBook] = useState(list);
    console.log(books);

    const handleDelete = (title) => {
        const filteredBooks = books.filter((book) => {
            return book.title !== title;
        })
        console.log(filteredBooks);
        setBook(filteredBooks);
    }

    const renderList = () => {
        return (
            <div className="grid-container">
                {
                    books.map((item) => (
                        <div key={item.title} className="grid-item">
                            <BookDeleteButton 
                                handleOnClick={()=>handleDelete(item.title)}
                            />
                            <BookGrid
                                title={item.title}
                                author={item.author}
                                price={item.price}
                                // status={item.status}
                                quantity = {item.quantity}
                            />
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <div>
            <h2>Book of the day</h2>
            {renderList()}
        </div>
    );
}

export default BookList;