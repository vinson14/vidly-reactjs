import TableBodyRow from "./TableBodyRow";

const TableBody = ({ body, headers }) => {
    return (
        <tbody>
            {body.map((row) => {
                return (
                    <TableBodyRow
                        key={row[headers[0]]}
                        row={row}
                        headers={headers}
                    />
                );
            })}
        </tbody>
    );
};

export default TableBody;
