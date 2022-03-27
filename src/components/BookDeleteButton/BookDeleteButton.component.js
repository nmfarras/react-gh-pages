const BookDeleteButton = (props) => {
    const { handleOnClick } = props;

    return (
        <div id="delete-button">
            <button onClick={handleOnClick}>X</button>
        </div>
    )
}

export default BookDeleteButton;