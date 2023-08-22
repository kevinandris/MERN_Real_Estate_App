import React from 'react'
import { useForm } from "@mantine/form"

const AddLocation = ({propertyDetails, setPropertyDetails}) => {

    const form = useForm({
        initialValues: {
            country: propertyDetails?.country,
            city: propertyDetails?.city,
            address: propertyDetails?.address
        },

        validate: {
            country: (value) => validateString(value),
        }
    })
    
  return (
    <form>
        {/* left side */}
        <div className="flexCenter">
            {/* inputs */}

        </div>


        {/* right side */}
    </form>
  )
}

export default AddLocation