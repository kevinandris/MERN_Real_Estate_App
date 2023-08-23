// ! exported to AddPropertyModal.jsx
import React from 'react'
import { validateString } from '../../utils/common';

const BasicDetails = (title, description, price) => {

    const form = useForm({
        initialValues: {
            title: propertyDetails?.title,
            description: propertyDetails?.description,
            price: propertyDetails?.price
        },

        validate: {
            title: (value) => validateString(value),
            description: (value) => validateString(value),
            price: (value) => 
                value <= 1000 ? "Must be greater than 999 dollars" : null,
        }
    })

    const { title, description, price } = form.values;
    
    const handleSubmit =() => {
        const {hasErrors} = form.validate()

        if (!hasErrors) {
            setPropertyDetails((prev) => ({...prev, city, address, country}))
            nextStep();
        }
    }

  return (
    <div>BasicDetails</div>
  )
}

export default BasicDetails