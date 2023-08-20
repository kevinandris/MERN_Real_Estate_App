import './Property.css'
import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProperty } from '../../utils/api'
import { PuffLoader } from 'react-spinners'
import { AiFillHeart, AiTwotoneCar } from 'react-icons/ai'
import { FaShower } from 'react-icons/fa'
import { MdMeetingRoom } from 'react-icons/md'

const Property = () => {
    const { pathname } = useLocation()
    const id = pathname.split("/").slice(-1)[0]
    const {data, isLoading, isError} = useQuery(['resd', id], () => getProperty(id))

    if (isLoading) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <PuffLoader />
                </div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <span>Error while fetching the property details</span>
                </div>
            </div>
        )
    }
    
    return (
        <div className='wrapper'>
            <div className="flexColStart paddings innerWidth property-container">
                {/* like button */}
                <div className="like">
                    <AiFillHeart size={24} color='#fff'/>
                </div>

                {/* image */}
                <img src={data.image} alt='home image' />

                <div className="flexCenter property-details">

                    {/* left side */}
                    <div className="flexColStart left">

                        {/* head */}
                        <div className="flexStart head">
                            <span className='primaryText'>{data.title}</span>
                            <span className='orangeText' style={{fontSize: '1.5rem'}}>$ {data.price}</span>
                        </div>

                        {/* facilities */}
                        <div className="flexStart facilities">

                            {/* bathrooms */}
                            <div className="flexStart facility">
                                <FaShower size={20} color="#1F3E72" />
                                <span>{data?.facilities?.bathrooms} Bathrooms</span>
                            </div>

                            {/* parkings */}
                            <div className="flexStart facility">
                                <AiTwotoneCar size={20} color="#1F3E72" />
                                <span>{data?.facilities.parkings} Parking</span>
                            </div>

                            {/* rooms */}
                            <div className="flexStart facility">
                                <MdMeetingRoom size={20} color="#1F3E72" />
                                <span>{data?.facilities.bedrooms} Room/s</span>
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="right">
                        this is right side
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Property