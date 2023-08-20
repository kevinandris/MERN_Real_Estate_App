// ! EXPORTED TO Properties.jsx in pages folder
import React from 'react'
import './Residencies.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import { sliderSettings } from '../../utils/common.js'
import PropertyCard from '../PropertyCard/PropertyCard'
import { PuffLoader } from 'react-spinners'

const Residencies = () => {
    const {data, isError, isLoading} = useProperties()

      /* //! ERROR STATE */
    if (isError) {
        return (
        <div className="wrapper">
            <span>Error while fetching data</span>
        </div>
        )
    } 

    /* //! LOADING STATE */
    if (isLoading) {
        return (
        <div style={{height:"60vh"}} className="wrapper flexCenter">
            <PuffLoader 
                height="80" 
                width="80" 
                radius={1} 
                color='#4066ff' 
                aria-label="puff-loading"/>
        </div>
        )
    }

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
                        data.slice(0, 8).map((card, index) => (
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