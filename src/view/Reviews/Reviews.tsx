import styles from './Reviews.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { reviews } from './data';
import { ReviewCard } from './RevieCard';


export const Reviews = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Отзывы Учеников</h1>
      <small>Пролестните вправо что бы увидеть больше отзывов</small>
      <Swiper style={{ width: 320 }}
        spaceBetween={50}
        navigation={true}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
      {reviews.map((review) => (
        <SwiperSlide key={review.name}>
          <ReviewCard data={review} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}
