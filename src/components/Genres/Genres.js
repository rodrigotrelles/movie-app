// styles
import Container from './styles/Container';
import Genre from './styles/Genre';

const Genres = ({ genres }) => {
    return (
        <Container>
            {genres.map((genre, index) => <Genre key={index}>{genre.name || genre}</Genre>)}
        </Container>
    );
}

export default Genres;