import "./BookStatus.css";

const BookStatus = (props) => {
    // const { status } = props;

    // const isAvailable = () => {
    //     return status==="Available";
    // }

    const { quantity } = props;

    const isAvailable = () => {
        return quantity===0 ? false: true;
    }

    const bookStatus = (available) => {
        return available ? "available": "not available";
    }

    // console.log(quantity);
    // console.log(bookStatus(isAvailable()));

    return (
        <div className={`${isAvailable() ? " book-available" : " book-not-Available"}`}>
            <p className='status'>{bookStatus(isAvailable())}</p>
        </div>
    );
}

export default BookStatus;