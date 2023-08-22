import React, { useContext, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import useAuthCheck from '../../hooks/useAuthCheck'
import { useMutation } from 'react-query'
import { toFav } from '../../../../server/controllers/userController'
import { useAuth0 } from '@auth0/auth0-react'
import UserDetailContext from '../context/UserDetailsContext'

const Heart = ({id}) => {

    const [heartColor, setHeartColor] = useState("#fff")
    const { validateLogin } = useAuthCheck()
    const { user } = useAuth0()

    const { 
        userDetails : {favourites, token } , 
        setUserDetails 
    } = useContext(UserDetailContext)

    const { mutate } = useMutation({
        mutationFn: () => toFav(id, true?.email, token)
    })

    const handleLike = () => {
        if (validateLogin()) {
            mutate()
            setHeartColor((prev) => prev === "#fa3e5f" ? "#fff" : "#fa3e5f")
        }
    }
    
    return (
        <AiFillHeart size={24} color={heartColor} onClick={(e) => {
            e.stopPropagation()
            handleLike()
        }}/>
    )
}

export default Heart