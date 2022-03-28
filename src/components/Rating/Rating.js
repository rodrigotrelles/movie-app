// hooks
import { useState } from 'react';

// icons
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';

// resources
import { COLORS } from '../../assets/resources/colors';

// styles
import StarsContainer from './styles/StarsContainer';

const Rating = ({ rating, setRating, card, movie }) => {
    const [starHovered, setStarHovered] = useState();
    const stars = [2, 4, 6, 8, 10];

    const setRatingHandler = star => {
        if (setRating) {
            const newRating = rating === star ? 0 : star;
            setRating(newRating);
        }
    }

    const width = () => {
        if (card) {
            return 13;
        } else if (movie) {
            return 46;
        }
        return 32;
    }

    const onMouseEnterHandler = star => {
        if (!card && !movie) {
            setStarHovered(star);
        }
    }

    const onMouseLeaveHandler = () => {
        if (!card && !movie) {
            setStarHovered();
        }
    }

    const paintStar = star => {
        // Hover rating star scenario
        if (starHovered >= star) {
            return true;
        }

        // not rated
        if (rating === 0) {
            return false;
        }

        // Movies card scenario
        if ((card || movie) && rating > star - 2) {
            return true;
        }

        // Rating scenario 
        if (((!card && !movie) & rating >= star)) {
            return true;
        }

        return false;
    }

    return (
        <StarsContainer>
            {stars.map((star) =>
                <StarIcon
                    key={star}
                    onClick={() => setRatingHandler(star)}
                    color={paintStar(star) ? COLORS.RedPrimary : COLORS.GrayLight}
                    width={width()}
                    height={width()}
                    onMouseEnter={() => onMouseEnterHandler(star)}
                    onMouseLeave={onMouseLeaveHandler}
                />)}
        </StarsContainer>
    )
}

export default Rating;