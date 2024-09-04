'use client';
import Banner from '@/layout/Banner';
import { Swiper, SwiperSlide, Autoplay } from '@/utils/moduleSwiper'
import {useEffect, useCallback, useMemo, useRef } from 'react';
import { getAllHomeCategory, getBanner } from '@/service';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { clearDataCategory } from '@/store/storeApi';
import Button from '@/components/Button';
import { MdNavigateNext} from '@/utils/icons'
import TitlePath from '@/components/TitlePath';
import CardProduct from '@/components/CardProduct';
import { fullImagePath, removeVietnameseTones } from '@/utils/helpers';
const HomeApp = () => {
  const dispatch = useDispatch();
  const { data }: any = useSelector((state: RootState) => state.storeApp);
  // console.log(Object.keys(data?.banner?.items[0]));
  //  const {
  //     currentUser,
  //     handle: { onToggleMovie },
  //   }: any = useApp();
  const renderData = Object.keys(data);
  const renderSwipers = Array(4).fill(0).map((item: any, index: number) => {
    return {
      ...item,
      key: index,
      ref: useRef(null)
    };
  })
  const renderTitle = useMemo(() => {
    return Array(4).fill(0).map((_key, index,) => {
      return {
        [index]: index === 0 ? 'hành động' : index === 1 ? 'hoạt hình' : index === 2 ? 'Kinh dị' : 'Viễn Tưởng',
      };
    });
  }, [data?.category.length]);
  const handleNext = useCallback(
    (index: number) => {
      const findSwiper = renderSwipers.find((item) => item.key === index);
      if (findSwiper?.ref.current) {
        const swiper = findSwiper.ref.current.swiper;
        swiper.slidePrev();
      }
    },
    [renderSwipers.length]
  );
  const handlePrev = useCallback(
    (index: number) => {
      const findSwiper = renderSwipers.find((item) => item.key === index);
      if (findSwiper?.ref.current) {
        const swiper = findSwiper.ref.current.swiper;
        swiper.slideNext();
      }
    },
    [renderSwipers.length]
  );
  
  useEffect(() => {
    dispatch(getBanner(1) as any);
    dispatch(getAllHomeCategory() as any);
  }, []);
  useEffect(() => {
    if (data?.category.length) {

    }    
  }, [data?.category])
    console.log(renderTitle);
    
  return (
    <>
      <Banner data={data?.banner?.items ?? []} />
       <div className='bg-overlay'>
        <div className='container'>
          {data?.category.map((key: string, index: number) => {
            const { ref }: any = renderSwipers.find((item) => item.key === index);
            return (
              <div key={index}>
                <TitlePath title={renderTitle[index][index]} onClickNext={() => handleNext(index)} onClickPrev={() => handlePrev(index)} />
                <Swiper
                  ref={ref}
                  autoplay={{
                    delay: index === 0 ? 5000 : index === 1 ? 3000 : 6000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                    200: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    360: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    480: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    600: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    728: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    984: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1248: {
                      slidesPerView: 4,
                    },
                  }}
                  spaceBetween={20}
                  loop={true}
                  keyboard={true}
                  rewind={true}
                  noSwiping={true}
                  slidesPerView={4}
                  modules={[Autoplay]}>
                  {data?.category[index]?.items.map((movie: any) =>
                    <SwiperSlide key={movie._id}>
                      <CardProduct
                        data={movie}
                        // onToggleMovie={() => onToggleMovie(movie)}
                        // findIsLoveMovie={currentUser?.loveMovie.some((item: any) => item.id === movie.id)}
                      />
                    </SwiperSlide>
                  )}
                </Swiper>
                <div className='mt-7 flex-center'>
                  <Button
                    className='border rounded-md border-primary py-2 px-5 flex items-center flex-row-reverse font-semibold hover:bg-primary duration-300 hover:text-black'
                    content={`Xem Tất Cả`}
                    icon={<MdNavigateNext className='h-5 w-6' />}
                    onClick={() => null}
                    href={`the-loai/${removeVietnameseTones(renderTitle[index][index]).split(' ').join('-')}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeApp;
