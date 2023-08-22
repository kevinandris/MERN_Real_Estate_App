import { Container, Modal } from '@mantine/core'
import React from 'react'

const AddPropertyModal = ({opened, setOpened}) => {

    
    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            closeOnClickOutside
            size={"90rem"}
        >
            <Container h={"40rem"} w={"100%"}>
                <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                    <Stepper.Step label="First step" description="Create an account">
                    Step 1 content: Create an account
                    </Stepper.Step>
                    <Stepper.Step label="Second step" description="Verify email">
                    Step 2 content: Verify email
                    </Stepper.Step>
                    <Stepper.Step label="Final step" description="Get full access">
                    Step 3 content: Get full access
                    </Stepper.Step>
                    <Stepper.Completed>
                    Completed, click back button to get to previous step
                    </Stepper.Completed>
                </Stepper>
            </Container>
        </Modal>
  )
}

export default AddPropertyModal