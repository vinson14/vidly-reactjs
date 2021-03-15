import { useCallback, useEffect, useState } from "react";
import { getGenres } from "../../services/fakeGenreService";
import { getMovies } from "../../services/fakeMovieService";
import DeleteButton from "./components/DeleteButton";
import HeaderMessage from "./components/HeaderMessage";
import LikeButton from "./components/LikeButton";
import ListGroup from "./components/ListGroup";
import PaginationButtons from "./components/PaginationButtons";
import Table from "./components/Table";

const Movies = () => {
    const [allMovies, setAllMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [paginatedMovies, setPaginatedMovies] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState({});
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(4);

    const handlePageChange = (page) => {
        setPageNumber(page);
    };

    const handleSelectGenre = (item) => {
        setSelectedGenre(item);
        setPageNumber(1);
    };

    const HeaderMessages = {
        noMovies: "There are no movies in the database",
        numMovies: `Showing ${filteredMovies.length} movies in the database`,
    };

    useEffect(() => {
        const allM = getMovies();
        setAllMovies(allM);
    }, []);

    useEffect(() => {
        const filterMovies = (allM) => {
            if (selectedGenre) {
                return selectedGenre.name === "All Genres"
                    ? allM
                    : allM.filter((m) => m.genre.name === selectedGenre.name);
            } else {
                return allM;
            }
        };

        setFilteredMovies(filterMovies(allMovies));
    }, [allMovies, selectedGenre]);

    const handleDeleteButton = useCallback((index, e) => {
        console.log(index);
        const newMovies = [...paginatedMovies];
        newMovies.splice(index, 1);
        setPaginatedMovies(newMovies);
    }, []);

    useEffect(() => {
        const paginateMovies = () => {
            return filteredMovies.slice(
                (pageNumber - 1) * pageSize,
                pageNumber * pageSize
            );
        };

        setPaginatedMovies(
            paginateMovies().map((movie, index) => ({
                Title: movie.title,
                Genre: movie.genre.name,
                Stock: movie.numberInStock,
                Rate: movie.dailyRentalRate,
                "  ": <LikeButton />,
                " ": (
                    <DeleteButton
                        handleOnClick={(e) => handleDeleteButton(index, e)}
                    />
                ),
            }))
        );
    }, [filteredMovies, pageNumber, pageSize, allMovies, handleDeleteButton]);

    useEffect(() => {
        const allGenres = [{ name: "All Genres" }, ...getGenres()];
        setGenres(allGenres);
        setSelectedGenre(allGenres[0]);
    }, []);

    return (
        <>
            {paginatedMovies.length === 0 && (
                <HeaderMessage className="my-5">
                    {HeaderMessages.noMovies}
                </HeaderMessage>
            )}
            {paginatedMovies.length > 0 && (
                <div className="row my-5">
                    <div className="col-3">
                        <ListGroup
                            items={genres}
                            selectedItem={selectedGenre}
                            handleOnSelect={handleSelectGenre}
                        />
                    </div>
                    <div className="col">
                        <HeaderMessage className="my-5">
                            {HeaderMessages.numMovies}
                        </HeaderMessage>
                        <Table
                            headers={Object.keys(paginatedMovies[0])}
                            body={paginatedMovies}
                        />
                        <PaginationButtons
                            itemsCount={filteredMovies.length}
                            pageSize={pageSize}
                            pageNumber={pageNumber}
                            handlePageChange={handlePageChange}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Movies;
