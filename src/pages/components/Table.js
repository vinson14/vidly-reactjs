import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ headers, body }) => {
    return (
        <table className="table">
            <TableHeader headers={headers} />
            <TableBody headers={headers} body={body} />
        </table>
    );
};

export default Table;
