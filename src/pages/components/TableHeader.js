const TableHeader = ({ headers }) => {
    return (
        <thead>
            <tr>
                {headers &&
                    headers.length > 0 &&
                    headers.map((header) => (
                        <th key={header} scope="col">
                            {header}
                        </th>
                    ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
