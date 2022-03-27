// icons
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';

// resources
import { COLORS } from '../../assets/resources/colors';

// styles
import StarsContainer from './styles/StarsContainer';

const Rating = ({ rating, setRating, card }) => {
    const stars = [2, 4, 6, 8, 10];

    const setRatingHandler = star => {
        if (setRating) {
            const newRating = rating === star ? 0 : star;
            setRating(newRating);
        }
    }

    return (
        <StarsContainer>
            {stars.map((star) =>
                <StarIcon
                    key={star}
                    onClick={() => setRatingHandler(star)}
                    color={(card && rating >= star - 2) || (!card & rating >= star) ? COLORS.RedPrimary : COLORS.GrayLight}
                    width={card ? 13 : 31}
                    height={card ? 13 : 32}
                />)}
        </StarsContainer>
    )
}

export default Rating;