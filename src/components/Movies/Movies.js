// hooks 
import { useState, useEffect } from 'react';

// axios
import axios from 'axios';

// icons
import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg';

// components
import Rating from '../Rating';
import MovieCard from '../MovieCard';
import Loader from '../Loader/Loader';

// styles
import Main from './styles/Main';
import FilterLabel from './styles/FilterLabel';
import FilterContainer from './styles/FilterContainer';
import MoviesGrid from './styles/MoviesGrid';
import Paginator from './styles/Paginator';
import PaginatorButton from './styles/PaginatorButton';
import LoaderContainer from './styles/LoaderContainer';

const Movies = ({ searchValue }) => {
    const [ratingFilter, setRatingFilter] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [configuration, setConfiguration] = useState([]);

    const API_KEY = '8d56e2fc700c33ec0fc2adcba4831bd9';
    const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`;
    const configUrl = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const filterLessThan = ratingFilter !== 0 ? ratingFilter : 10;
                const filterGreaterThan = ratingFilter !== 0 ? (ratingFilter - 2) : 0;
                const moviesUrlFiltered = `${moviesUrl}&vote_average.lte=${filterLessThan}&vote_average.gte=${filterGreaterThan}`
                const getMovies = axios.get(moviesUrlFiltered);
                const getImagesConfiguration = axios.get(configUrl);
                const [response, config] = await axios.all([getMovies, getImagesConfiguration])
                setConfiguration(config.data.images);
                setMovies(response.data.results);
                // console.log({ response })
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }

        fetchMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, ratingFilter, searchValue]);

    const nextPage = () => {
        if (page < 1000) {
            setPage(page + 1);
        }
    }

    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    return (
        <Main>
            {loading ? <LoaderContainer><Loader></Loader></LoaderContainer> :
                <>
                    <FilterContainer>
                        <FilterLabel>Filter by rating:</FilterLabel>
                        <Rating rating={ratingFilter} setRating={setRatingFilter} />
                    </FilterContainer>
                    <MoviesGrid>
                        {movies.map((movie, index) => (
                            <MovieCard key={movie.id} movie={movie} configuration={configuration} pos={index} />
                        ))}
                    </MoviesGrid>
                    <Paginator>
                        <PaginatorButton left onClick={previousPage}>Previous<ChevronLeft width={22} color="white" /></PaginatorButton>
                        <PaginatorButton onClick={nextPage}>Next <ChevronRight width={22} color="white" /></PaginatorButton>

                    </Paginator>
                </>
            }
        </Main>
    )
}

export default Movies;