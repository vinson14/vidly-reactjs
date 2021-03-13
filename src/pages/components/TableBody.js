const TableBody = ({ body, headers }) => {
    return (
        <tbody>
            {body.map((row) => (
                <tr key={row[headers[0]]}>
                    {headers.map((header) => {
                        return <td key={header}>{row[header]}</td>;
                    })}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
