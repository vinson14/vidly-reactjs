const ListGroup = ({
    items,
    selectedItem,
    handleOnSelect,
    keyProperty = "name",
    valueProperty = "name",
}) => {
    const getClass = (item) => {
        if (item === selectedItem) {
            return "list-group-item active";
        } else {
            return "list-group-item";
        }
    };

    const style = { cursor: "pointer" };

    return (
        <ul className="list-group">
            {items.map((item) => (
                <li
                    style={style}
                    key={item[keyProperty]}
                    className={getClass(item)}
                    onClick={() => handleOnSelect(item)}
                >
                    {item[valueProperty]}
                </li>
            ))}
        </ul>
    );
};

export default ListGroup;
