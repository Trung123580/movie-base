'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from '@/utils/moduleSwiper'
import Image from 'next/image'
import Link from 'next/link'
import { FaClapperboard, MdTimelapse, FaPlay, MdDateRange } from '@/utils/icons'
import { v4 as uuid } from 'uuid'
import BoxBG from '@/components/BoxBG'
import BoxSolid from '@/components/BoxSolid'
import { typeStatus } from '@/utils/constants'
import { fullImagePath } from '@/utils/helpers'
const Banner = ({ data }: { data: any }) => {
  return (
    <div className='relative lg:top-0 w-full banner'>
      <Swiper
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className='h-full'
        loop={true}
        keyboard={true}
        rewind={true}
        navigation={true}
        noSwiping={true}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}>
        {data.map((movie: any) => {
          const episodesValue = () => {
            const episodes = movie?.episode_current
            if (episodes.includes(typeStatus.status1)) {
              return `${movie?.episode_current.split(' ')[1]} / ${movie?.episode_total.includes('?') ? '?' : movie?.episode_total}`
            }
            if (episodes.includes(typeStatus.status2)) {
              return typeStatus.status2 ?? ''
            }
            return movie?.episode_current ?? ''
          }
          return (
            <SwiperSlide key={uuid()}>
              <div className='relative'>
                <Image
                  src={fullImagePath(movie?.poster_url)}
                  className='w-full h-full object-cover md:h-[70vh] lg:h-screen aspect-[900/550]'
                  alt=''
                  priority
                  width={1000}
                  height={1000}
                  sizes='100vw'
                />
                <div className='h-full w-full absolute top-0 left-0 bg-black/80'></div>
                <div className='absolute position-center !top-[80%] !left-[54%]  sm:!left-[52%] md:!left-[54%] md:position-center z-30 w-full flex container  sm:!top-[80%] md:!top-[70%] h-[350px] lg:h-[480px] '>
                  <div className='flex-1 h-max z-20'>
                    <div className='text-white '>
                      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold font-VarelaRound text-primary md:mb-4 mb-2 md:w-3/4 text-wrap line-clamp-1 md:line-clamp-2 lg:line-clamp-none '>
                        {movie.name}
                      </h2>
                      <h4 className='text-lg sm:text-xl font-bold tracking-wide line-clamp-1'>{movie?.origin_name}</h4>
                    </div>
                    {movie?.casts && (
                      <div className='line-clamp-1 text-base md:text-lg'>
                        {movie?.casts?.split(',').map((item: string, _index: number, arr: string[]) => (
                          <span key={item}>{item === arr[arr.length - 1] ? item : `${item},`}</span>
                        ))}
                      </div>
                    )}
                    <div className='my-3 md:mt-5 md:mb-5 flex flex-wrap gap-x-3 gap-y-2 md:text-md font-medium *:flex-basis *:flex *:flex-center *:gap-x-1 '>
                      <div className='w-full md:w-auto'>
                        <div className='flex-basis flex gap-1'>
                          <BoxBG value={movie?.episode_current} />
                          <BoxSolid value={movie?.quality} />
                        </div>
                      </div>
                      <div className='!gap-x-3 *:flex *:items-center *:gap-x-1'>
                        <div className='flex-nowrap'>
                          <FaClapperboard className='text-primary' />
                          <span className='text-nowrap'>{episodesValue() as any}</span>
                        </div>
                          <div className='-tracking-tighter'>
                            <MdDateRange className='text-primary' />
                            <span className='text-nowrap'>{movie?.year ?? 0}</span>
                          </div>
                        <div>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            aria-hidden='true'
                            role='img'
                            className='text-primary iconify iconify--tdesign'
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'>
                            <path
                              fill='currentColor'
                              d='M1 3h22v18H1zm2 2v14h18V5zm2 5a2 2 0 0 1 2-2h4v2H7v4h4v2H7a2 2 0 0 1-2-2zm8 0a2 2 0 0 1 2-2h4v2h-4v4h4v2h-4a2 2 0 0 1-2-2z'></path>
                          </svg>
                          <span className='line-clamp-1'>{movie?.lang}</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/details/${movie.slug}`}
                      className='uppercase text-xs md:text-base gap-x-2 font-bold py-2 px-4 md:py-2 md:px-6 rounded-full border-2 border-primary duration-300 flex flex-center w-max hover:text-black hover:bg-primary'>
                      <FaPlay /> xem ngay
                    </Link>
                  </div>
                  <div className='z-20 w-32 h-full right-[5%] sm:relative md:-top-14 border-8 xl:-top-24 rounded-lg md:w-60 lg:w-72 xl:w-80 xl:h-[31rem] lg:h-[27rem] border-primary hidden md:block'>
                    <Image src={fullImagePath(movie?.thumb_url)} width={1000} height={1000} priority className='w-full h-full object-cover !aspect-[420/350]' alt='' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
export default Banner
