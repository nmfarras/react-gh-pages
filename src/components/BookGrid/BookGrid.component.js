import { BookStatus } from "../BookStatus";

import "./BookGrid.css";

const BookGrid = (props) => {
    // const { author, title, price, status } = props;
    const { author, title, price, quantity } = props;
    
    // return number as string with thousand delimiter using 
    // regex with 2 lookahead assertions pattern
    let pattern = /\B(?=(\d{3})+(?!\d))/g;
    let delimitPrice = price.toString().replace(pattern, ",");
    let formatPrice = `IDR ${delimitPrice}.00`;
    // console.log(props);

    return (
        <div className="grid-data">
            
            <p className="title">{title}</p>
            <p className="author">{author}</p>
            <p className="price">{formatPrice}</p>
               
            {/* <BookStatus status={status}/> */}
            <BookStatus quantity={quantity}/>
        </div>
    );
}

export default BookGrid;