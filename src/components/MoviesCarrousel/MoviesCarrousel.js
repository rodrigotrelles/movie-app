// components
import MovieCard from '../../components/MovieCard';

// styles
import Container from './styles/Container';
import Title from './styles/Title';
import Carrousel from './styles/Carrousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

const MoviesCarrousel = ({ title, movies, configuration }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Carrousel>
                <Swiper
                    spaceBetween={24}
                    grabCursor={true}
                    slidesPerView={3}
                    initialSlide={0}
                    onSlideChange={(e) => { }}
                >
                    {movies.map((movie, index) =>
                        <SwiperSlide key={index} id={movie} index={index}>
                            <MovieCard movie={movie} configuration={configuration} carrousel={true} />
                        </SwiperSlide>
                    )}
                </Swiper>

            </Carrousel>
        </Container>
    );
}

export default MoviesCarrousel;