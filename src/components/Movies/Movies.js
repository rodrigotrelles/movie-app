// hooks 
import { useState } from 'react';

// components
import Rating from '../Rating';

// styles
import Main from './styles/Main';
import FilterLabel from './styles/FilterLabel';
import FilterContainer from './styles/FilterContainer';

const Movies = ({ movies }) => {
    const [ratingFilter, setRatingFilter] = useState(5);

    return (
        <Main>
            <FilterContainer>
                <FilterLabel>Filter by rating:</FilterLabel>
                <Rating rating={ratingFilter} setRating={setRatingFilter} />
            </FilterContainer>
            {/* <MoviesGrid>

            </MoviesGrid> */}
        </Main>
    )
}

export default Movies;