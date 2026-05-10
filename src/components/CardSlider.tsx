import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
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
  const shouldCenterSlides = cards.length < 4;
  const desktopSlides = Math.min(4, cards.length);
  const tabletSlides = Math.min(3, cards.length);
  const mobileSlides = Math.min(2, cards.length);
  const canAutoPlay = cards.length > 1;
  const [selectedComic, setSelectedComic] = useState<CardProps | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(canAutoPlay);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (!swiperRef?.autoplay || !canAutoPlay) return;
    if (isPlaying) {
      swiperRef.autoplay.start();
      return;
    }
    swiperRef.autoplay.stop();
  }, [swiperRef, isPlaying, canAutoPlay]);


  const handleCardClick = (comic: CardProps) => {
    setSelectedComic(comic); // Set the selected comic and open the modal
  };

  const closeModal = () => {
    setSelectedComic(null); // Close the modal by setting the selected comic to null
  };



  return (
    <div className="w-full max-w-5xl mx-auto my-8">
      <div className="mb-3 flex justify-end">
        <button
          type="button"
          onClick={() => setIsPlaying((prev) => !prev)}
          disabled={!canAutoPlay}
          className="rounded-lg border border-black/10 bg-white/50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[var(--text)] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/20"
        >
          {isPlaying ? "Pause Slider" : "Play Slider"}
        </button>
      </div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        onSwiper={setSwiperRef}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={canAutoPlay ? { delay: 3200, disableOnInteraction: false } : false}
        centeredSlides={shouldCenterSlides}
        grabCursor={true}
        loop={cards.length > 4}
        breakpoints={{
          640: { slidesPerView: mobileSlides },
          768: { slidesPerView: tabletSlides },
          1024: { slidesPerView: desktopSlides },
        }}
        className="w-full wgv-slider"
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
