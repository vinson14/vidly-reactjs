import { useEffect, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Table from "./components/Table";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const handleDeleteButton = (e) => {
        tableData.splice(e.target.dataset.index, 1);
        console.log(tableData);
    };

    const tableData = movies.map((movie, index) => ({
        Title: movie.title,
        Genre: movie.genre.name,
        Stock: movie.numberInStock,
        Rate: movie.dailyRentalRate,
        " ": (
            <button
                onClick={handleDeleteButton}
                className="btn btn-danger"
                data-index={index}
            >
                Delete
            </button>
        ),
    }));

    useEffect(() => {
        function updateMovies(m) {
            console.log(m);
            setMovies(m);
        }
        updateMovies(getMovies());
    });

    return (
        <div>
            <h5>Showing {movies.length} movies in the database</h5>

            {tableData.length > 0 && (
                <Table headers={Object.keys(tableData[0])} body={tableData} />
            )}
        </div>
    );
};

export default Movies;
