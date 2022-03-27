// icons
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';

// resources
import { COLORS } from '../../assets/resources/colors';

// styles
import StarsContainer from './styles/StarsContainer';

const Rating = ({ rating, setRating, card, movie }) => {
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

    return (
        <StarsContainer>
            {stars.map((star) =>
                <StarIcon
                    key={star}
                    onClick={() => setRatingHandler(star)}
                    color={((card || movie) && rating >= star - 2) || ((!card && !movie) & rating >= star) ? COLORS.RedPrimary : COLORS.GrayLight}
                    width={width()}
                    height={width()}
                />)}
        </StarsContainer>
    )
}

export default Rating;