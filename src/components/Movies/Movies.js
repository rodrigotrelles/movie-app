// hooks 
import { useState, useEffect } from 'react';

// axios
import axios from 'axios';

// components
import Rating from '../Rating';
import MovieCard from '../MovieCard';

// styles
import Main from './styles/Main';
import FilterLabel from './styles/FilterLabel';
import FilterContainer from './styles/FilterContainer';
import MoviesGrid from './styles/MoviesGrid';

const Movies = ({ searchValue }) => {
    const [ratingFilter, setRatingFilter] = useState(5);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [configuration, setConfiguration] = useState([]);


    const API_KEY = '8d56e2fc700c33ec0fc2adcba4831bd9';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`;
    const configUrl = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;

    const fetchMovies = async () => {
        try {
            setLoading(true);
            const getMovies = axios.get(url);
            const getImagesConfiguration = axios.get(configUrl);
            const [response, config] = await axios.all([getMovies, getImagesConfiguration])
            setConfiguration(config.data.images);
            setMovies(response.data.results);

            console.log({ response })
        } catch {

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <Main>
            <FilterContainer>
                <FilterLabel>Filter by rating:</FilterLabel>
                <Rating rating={ratingFilter} setRating={setRatingFilter} />
            </FilterContainer>
            <MoviesGrid>
                {movies.map((movie, index) => (
                    <MovieCard key={movie.id} movie={movie} configuration={configuration} pos={index} />
                ))}
            </MoviesGrid>
        </Main>
    )
}

export default Movies;