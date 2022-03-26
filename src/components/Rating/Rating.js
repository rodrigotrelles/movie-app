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
            setRating(star);
        }
    }


    console.log(rating);

    return (
        <StarsContainer>
            {stars.map((star) =>
                <StarIcon
                    key={star}
                    onClick={() => setRatingHandler(star)}
                    color={rating >= star ? COLORS.RedPrimary : COLORS.GrayLight}
                    width={card ? 13 : 31}
                    height={card ? 13 : 32}
                />)}
        </StarsContainer>
    )
}

export default Rating;