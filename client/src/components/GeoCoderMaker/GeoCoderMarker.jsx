import React, { useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import "leaflet/dist/leaflet.css"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"

const GeoCoderMarker = ({address}) => {

    const map = useMap()
    const [position, setPosition] = useState([60, 19])

    return (
        <Marker position={position} icon={DefaultIcon}>
            <Popup />
        </Marker>
    )
}

export default GeoCoderMarker