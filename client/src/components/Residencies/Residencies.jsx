// ! EXPORTED TO Properties.jsx in pages folder
import React from 'react'
import './Residencies.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common.js'
import PropertyCard from '../PropertyCard/PropertyCard'

const Residencies = () => {
  return (
    <section className='r-wrapper'>
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>

            <Swiper {...sliderSettings}>
                <SlideNextButton />
                {/* // ! slider */}
                {
                    data.map((card, index) => (
                        <SwiperSlide key={index}>
                            <PropertyCard card={card} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies;

const SlideNextButton = () => {
    const swiper = useSwiper()
    
    return (
        <div className="r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}