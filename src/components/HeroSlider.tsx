import { FC, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { heroImages } from '@/Constant/Hero'

interface HeroSliderProps {
  images?: string[]
}

const HeroSlider: FC<HeroSliderProps> = ({ images = heroImages }) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null)

  useEffect(() => {
    if (!swiperRef?.autoplay) return
    if (isPlaying) {
      swiperRef.autoplay.start()
      return
    }
    swiperRef.autoplay.stop()
  }, [swiperRef, isPlaying])

  // Single image: render a plain static hero image (no slider chrome).
  if (images.length <= 1) {
    return (
      <div className="vhs-frame vhs-jitter relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/35 shadow-2xl">
        <img
          src={images[0]}
          width="640"
          height="640"
          alt="Wargavi48 Hero"
          className="h-full w-full object-cover"
        />
        <div className="vhs-tracking" aria-hidden="true" />
        <div className="vhs-noise" aria-hidden="true" />
        <div className="vhs-vignette" aria-hidden="true" />
      </div>
    )
  }

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full wgv-hero-slider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image} className="flex justify-center">
            <div className="vhs-frame vhs-jitter aspect-square w-full overflow-hidden rounded-2xl border border-white/35 shadow-2xl">
              <img
                src={image}
                width="640"
                height="640"
                alt={`Wargavi48 Hero ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="vhs-tracking" aria-hidden="true" />
              <div className="vhs-noise" aria-hidden="true" />
              <div className="vhs-vignette" aria-hidden="true" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        onClick={() => setIsPlaying((prev) => !prev)}
        aria-label={isPlaying ? 'Pause slider' : 'Play slider'}
        className="absolute right-3 top-3 z-10 rounded-lg border border-black/10 bg-white/60 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[var(--text)] backdrop-blur transition hover:bg-white dark:border-white/15 dark:bg-black/40 dark:hover:bg-black/60"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}

export default HeroSlider
