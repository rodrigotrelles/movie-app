// components
import MovieCard from '../../components/MovieCard';

// styles
import Container from './styles/Container';
import Title from './styles/Title';
import MoviesContainer from './styles/MoviesContainer';
import Carrousel from './styles/Carrousel';

const MoviesCarrousel = ({ title, movies, configuration }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <MoviesContainer>
                <Carrousel>
                    {movies.map(movie => <MovieCard key={movie.id} movie={movie} configuration={configuration} carrousel />)}
                </Carrousel>
            </MoviesContainer>
        </Container>
    );
}

export default MoviesCarrousel;