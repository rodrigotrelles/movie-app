// styles
import Container from './styles/Container';
import Genre from './styles/Genre';

const Genres = ({ genres }) => {
    return (
        <Container>
            {genres.map(genre => <Genre key={genre}>{genre}</Genre>)}
        </Container>
    );
}

export default Genres;