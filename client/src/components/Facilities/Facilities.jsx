// ! Exported to AddPropertyModal.jsx
import { Box, Button, Group, NumberInput, TextInput, Textarea } from '@mantine/core';
import { Form } from '@mantine/form';
import React from 'react'

const Facilities = ({prevStep, propertyDetails, setPropertyDetails, setOpened, setActiveStep}) => {

    const form = useForm({
        initialValues: {
            bedrooms: propertyDetails?.facilities.bedrooms,
            parkings: propertyDetails?.facilities.parkings,
            bathrooms: propertyDetails?.facilities.bathrooms
        },

        validate: {
            bedrooms: (value) => bedrooms(value),
            bathrooms: (value) => 
            value < 1 ? "Must have at least one bathroom" : null,
        }
    })
    
    const handleSubmit = () => {

    }
    
    return (
        <Box maw="30%" mx="auto" my="sm">
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit()
                }}
            >
                <NumberInput 
                    withAsterisk
                    label="No of Bedrooms"
                    min={0}
                    {...form.getInputProps("bedrooms")}
                />
                
                <NumberInput
                    withAsterisk
                        label="Description"
                        min={0}
                        {...form.getInputProps("parkings")}
                />

                <NumberInput 
                    withAsterisk
                    label="No of Bathrooms"
                    min={0}
                    {...form.getInputProps("bathrooms")}
                />

                <Group position='center' mt={'xl'}>
                    <Button variant='default' onClick={prevStep}>
                        Back
                    </Button>
                    <Button type='submit' color='green' disabled={isLoading}>
                        {isLoading ? "Submitting" : "Add Property"}
                    </Button>
                </Group>
            </Form>
        </Box>
    )
}

export default Facilities