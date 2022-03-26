// hooks 
import { useState } from 'react';

// components
import Rating from '../Rating';
import MovieCard from '../MovieCard';

// styles
import Main from './styles/Main';
import FilterLabel from './styles/FilterLabel';
import FilterContainer from './styles/FilterContainer';
import MoviesGrid from './styles/MoviesGrid';

const Movies = ({ movies }) => {
    const [ratingFilter, setRatingFilter] = useState(5);
    const moviesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <Main>
            <FilterContainer>
                <FilterLabel>Filter by rating:</FilterLabel>
                <Rating rating={ratingFilter} setRating={setRatingFilter} />
            </FilterContainer>
            <MoviesGrid>
                {moviesArr.map((movie) => (
                    <MovieCard key={movie} onClick={() => { }} movie={movie} />
                ))}
            </MoviesGrid>
        </Main>
    )
}

export default Movies;