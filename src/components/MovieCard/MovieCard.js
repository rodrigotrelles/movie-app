// styles
import Card from './styles/Card';


const MovieCard = ({ movie }) => {
    return (
        <Card to={`/movie/${movie}`}>
            {movie}
        </Card>
    )
}

export default MovieCard;