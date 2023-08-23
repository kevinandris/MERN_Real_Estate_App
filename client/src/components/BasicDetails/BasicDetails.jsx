// ! exported to AddPropertyModal.jsx
import React from 'react'
import { validateString } from '../../utils/common';
import { Box, Button, Group, NumberInput, TextInput, Textarea } from '@mantine/core';
import { Form } from '@mantine/form';

const BasicDetails = ({ prevStep, nextStep, propertyDetails, setPropertyDetails }) => {

    const form = useForm({
        initialValues: {
            title: propertyDetails.title,
            description: propertyDetails.description,
            price: propertyDetails.price
        },

        validate: {
            title: (value) => validateString(value),
            description: (value) => validateString(value),
            price: (value) => 
                value < 1000 ? "Must be greater than 999 dollars" : null,
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
    <Box maw="50%" mx="auto" my="md">
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit()
            }}
        >
            <TextInput 
                withAsterisk
                label="Title"
                placeholder='Property Name'
                {...form.getInputProps("title")}
            />
            
            <Textarea 
                 withAsterisk
                placeholder='Description'
                label="Description"
                {...form.getInputProps("description")}
            />

            <NumberInput 
                withAsterisk
                label="Price"
                placeholder='1000'
                min={0}
                {...form.getInputProps("price")}
            />

            <Group position='center' mt={'xl'}>
                <Button variant='default' onClick={prevStep}>
                    Back
                </Button>
                <Button type='submit'>
                    Next step
                </Button>
            </Group>
        </Form>
    </Box>
  )
}

export default BasicDetails