import { Modal } from '@mantine/core'
import React from 'react'

const AddPropertyModal = ({opened, setOpened}) => {
  return (
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        closeOnClickOutside
        size={"90rem"}
    >
        Property Modal
    </Modal>
  )
}

export default AddPropertyModal