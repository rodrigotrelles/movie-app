// components
import Rating from '../Rating';
import Genres from '../Genres';

// styles
import Card from './styles/Card';
import Title from './styles/Title';

const MovieCard = ({ movie, configuration, pos }) => {

    const imgUrl = `${configuration.base_url}${configuration.poster_sizes[6]}${movie.poster_path}`

    return (
        <Card to={`/movie/${movie.id}`} background={imgUrl} pos={pos}>
            <Genres genres={movie.genre_ids} />
            <Rating card rating={movie.vote_average} />
            <Title>{movie.title}</Title>
        </Card>
    )
}

export default MovieCard;