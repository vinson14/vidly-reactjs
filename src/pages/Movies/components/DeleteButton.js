const DeleteButton = ({ handleOnClick }) => {
    return (
        <button onClick={handleOnClick} className="btn btn-danger">
            Delete
        </button>
    );
};

export default DeleteButton;
