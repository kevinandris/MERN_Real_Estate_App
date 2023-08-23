// ! exported to AddPropertyModal.jsx
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import './UploadImage.css'

const UploadImage = ({propertyDetails, setPropertyDetails, nextStep, prevStep}) => {

    const [ imageURL, setImageURL] = useState(propertyDetails.image)
    const cloudinaryRef = useRef()
    const widgetRef = useRef()

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: "daz6x21s0",
                uploadPreset: "a2zabhnh",
                maxFile: 1
            },
            (err, result) => {
                if (result.event === "success") {
                    setImageURL(result.info.secure_url)
                }
            }
        )
    })

    return (

        <div className="flexColCenter uploadWrapper">
            {
                !imageURL ? (
                    <div className="flexColCenter uploadZone"
                        
                    >
                        <AiOutlineCloudUpload size={50} color='grey' />
                        <span>Upload Image</span>
                    </div>
                ) : (
                    <div className="uploadImage">
                        <img src={imageURL} alt="" />
                    </div>
                )
            }
        </div>
    )
}

export default UploadImage