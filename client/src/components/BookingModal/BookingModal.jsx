import React, { useContext, useState } from 'react'
import { Modal } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { useMutation } from 'react-query'
import UserDetailContext from '../context/UserDetailsContext'
import { bookVisit } from '../../utils/api'
import { toast } from 'react-toastify'
import dayjs from 'dayjs'

const BookingModal = ({opened, setOpened, email, propertyId}) => {

  const [value, setValue] = useState(null)
  const { userDetails : {token}, setUserDetails } = useContext(UserDetailContext)

  const handleBookingSuccess = () => {
    toast.success("You have booked your visit", {
      position: "bottom-right"
    })
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        {
          id: propertyId,
          date: dayjs(value).format('DD/MM/YYYY'),
        }
      ]
    }))
  }

  const {mutate, isLoading} = useMutation( {
    mutationFn: () => bookVisit(value, propertyId, email, token),
    onSuccess: () => handleBookingSuccess(),
    onError: ({response}) => toast.error(response.data.message),
    onSettled: () => setOpened(false)
  });
  
  return (
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Select your date of visit"
        centered
    >
        <div className='flexColCenter'>
          <DatePicker value={value} onChange={setValue} minDate={new Date()}/>

          <button disabled={!value || isLoading} onClick={() => mutate()}>
              Book Visit
          </button>
        </div>
    </Modal>
  )
}

export default BookingModal