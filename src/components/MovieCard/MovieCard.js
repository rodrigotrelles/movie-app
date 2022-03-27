// components
import Rating from '../Rating';
import Genres from '../Genres';

// styles
import Card from './styles/Card';
import Title from './styles/Title';
import BackgroundImage from './styles/BackgroundImage';
import WatchNowButton from './styles/WatchNowButton';

const MovieCard = ({ movie, configuration, pos, carrousel }) => {

    const imgUrl = `${configuration.base_url}${configuration.poster_sizes[6]}${movie.poster_path}`

    return (
        <Card to={`/movie/${movie.id}`} carrousel={carrousel}>
            <BackgroundImage background={imgUrl} pos={pos} />
            <Genres genres={movie.genre_ids} />
            <Rating card rating={movie.vote_average} />
            <Title>{movie.title}</Title>
            <WatchNowButton label="Watch Now">
                Watch Now
            </WatchNowButton>
        </Card>
    )
}

export default MovieCard;