// icons
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';

// resources
import { COLORS } from '../../assets/resources/colors';

// styles
import StarsContainer from './styles/StarsContainer';

const Rating = ({ rating, setRating }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <StarsContainer>
            {stars.map((star) =>
                <StarIcon key={star} onClick={() => setRating(star)} color={rating >= star ? COLORS.RedPrimary : COLORS.GrayLight} width={31} height={32} />)}
        </StarsContainer>
    )
}

export default Rating;