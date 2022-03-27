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

const Movie = ({ match }) => {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [configuration, setConfiguration] = useState([]);

    const API_KEY = '8d56e2fc700c33ec0fc2adcba4831bd9';
    const moviesUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const configUrl = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;

    const imgUrl =

        useEffect(() => {
            const fetchMovie = async () => {
                const getMovie = axios.get(moviesUrl);
                const getImagesConfiguration = axios.get(configUrl);
                const [response, config] = await axios.all([getMovie, getImagesConfiguration])
                setConfiguration(config.data.images);
                setMovie(response.data);
                console.log(response.data)
                console.log(config.data.images)

            }
            fetchMovie();
        }, [])

    if (!movie) {
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

        </MovieContainer>
    )
}

export default Movie;