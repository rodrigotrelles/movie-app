// hooks 
import { useState, useEffect } from 'react';

// axios
import axios from 'axios';

// icons
import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';

// react router 
import { useParams } from "react-router-dom";

// components
import Loader from '../../components/Loader/Loader';
import Rating from '../../components/Rating';
import Genres from '../../components/Genres';

// styles
import MovieContainer from './styles/MovieContainer';
import BackgroundImage from './styles/BackgroundImage';
import BackButton from './styles/BackButton';
import LoaderContainer from './styles/LoaderContainer';
import Title from './styles/Title';
import Description from './styles/Description';
import RatingContainer from './styles/RatingContainer';
import AddButton from './styles/AddButton';
import MoviesCarrousel from '../../components/MoviesCarrousel';

const Movie = ({ match }) => {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [configuration, setConfiguration] = useState([]);
    const [similarMovies, setSimilarMovies] = useState();
    const [bestMovies, setBestMovies] = useState();

    const API_KEY = '8d56e2fc700c33ec0fc2adcba4831bd9';
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${1}`;
    const configUrl = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;

    useEffect(() => {
        const fetchMovie = async () => {
            const getMovie = axios.get(movieUrl);
            const getImagesConfiguration = axios.get(configUrl);
            const [response, config] = await axios.all([getMovie, getImagesConfiguration])
            setConfiguration(config.data.images);
            setMovie(response.data);
        }
        fetchMovie();
    }, [])

    useEffect(() => {
        const fetchMovies = async () => {
            const similarMoviesUrl = `${moviesUrl}&with_genres=${movie.genres[0].id}`;
            const getSimilarMovies = axios.get(similarMoviesUrl);
            const bestRatedUrl = `${moviesUrl}&vote_average.lte=10&vote_average.gte=8`;
            const getBestRatedMovies = axios.get(bestRatedUrl);
            const [similar, bestRated] = await axios.all([getSimilarMovies, getBestRatedMovies])
            setSimilarMovies(similar.data.results);
            setBestMovies(bestRated.data.results);
        }

        if (movie) {
            fetchMovies();
        }
    }, [movie])


    if (!similarMovies || !bestMovies) {
        return <LoaderContainer><Loader></Loader></LoaderContainer>;
    }

    return (
        <MovieContainer>
            <BackgroundImage background={`${configuration.base_url}${configuration.backdrop_sizes[3]}${movie.backdrop_path}`} />
            <BackButton to={`../../`}>
                <ChevronLeft width={40} color="white" />
                Back
            </BackButton>
            <Title>{movie.title}</Title>
            <Description>{movie.overview}</Description>
            <RatingContainer>
                <Rating movie rating={movie.vote_average} />
                <Genres genres={movie.genres} />
            </RatingContainer>
            <AddButton left onClick={() => { }}>Add to list<PlusIcon width={22} color="white" /></AddButton>
            <MoviesCarrousel title="Browse similar titles" movies={similarMovies.slice(0, 5)} configuration={configuration} />
            <MoviesCarrousel title="Best Rated" movies={bestMovies.slice(0, 5)} configuration={configuration} />
        </MovieContainer>
    )
}

export default Movie;