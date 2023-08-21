// ! check if users is authenticated then they can process further for booking residencies etc.
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const useAuthCheck = () => {
    
    const {isAuthenticated} = useAuth0()
    const validateLogin = () => {

    }

    return (
        {
            validateLogin
        }
    )
}

export default useAuthCheck