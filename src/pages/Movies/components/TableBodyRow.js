const TableBodyRow = ({ row, headers }) => {
    return (
        <tr>
            {headers.map((header) => {
                return <td key={header}>{row[header]}</td>;
            })}
        </tr>
    );
};

export default TableBodyRow;
