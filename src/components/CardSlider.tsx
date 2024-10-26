import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ComicCard from '@/components/ComicCard';
import ComicModal from './ComicModal';
import { comicContent } from '@/Constant/Comic';

interface CardProps {
  id: number;
  thumbnail: string;
  title: string;
}

interface CardSliderProps {
  cards: CardProps[];
}

const CardSlider: FC<CardSliderProps> = ({ cards }) => {
  const shouldCenterSlides = cards.length < 4; // Center slides if fewer than 4 items
  const [selectedComic, setSelectedComic] = useState<CardProps | null>(null);


  const handleCardClick = (comic: CardProps) => {
    setSelectedComic(comic); // Set the selected comic and open the modal
  };

  const closeModal = () => {
    setSelectedComic(null); // Close the modal by setting the selected comic to null
  };



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
            <ComicCard thumbnail={card.thumbnail} title={card.title} onClick={() => handleCardClick(card)}/>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedComic && (
        <ComicModal comic={selectedComic} onClose={closeModal} images={comicContent[selectedComic.title as keyof typeof comicContent] || []} />
      )}
    </div>
  );
};

export default CardSlider;
