import { FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProjectCard from './ProjectCard';

interface CardProps {
    id: number;
    imageLink: string;
    title: string;
    description: string;
    projectLink: string;
}

interface CardSliderProps {
  cards: CardProps[];
}

const ProjectCardSlider: FC<CardSliderProps> = ({ cards }) => {
  const shouldCenterSlides = cards.length < 4; // Center slides if fewer than 4 items



  return (
    <div className="w-full max-w-5xl mx-auto my-8">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        centeredSlides={shouldCenterSlides}
        grabCursor={true}
        loop={cards.length > 1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="flex justify-center" >
            <ProjectCard imageLink={card.imageLink} title={card.title} description={card.description} projectLink={card.projectLink} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCardSlider;
