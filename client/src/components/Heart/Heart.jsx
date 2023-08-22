import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import useAuthCheck from '../../hooks/useAuthCheck'
import { useMutation } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'
import UserDetailContext from '../context/UserDetailsContext'
import { checkFavourites, updateFavourites } from '../../utils/common'
import { toFav } from '../../utils/api'

const Heart = ({id}) => {

    const [heartColor, setHeartColor] = useState("#fff")
    const { validateLogin } = useAuthCheck()
    const { user } = useAuth0()

    const { 
        userDetails : { favourites, token } , 
        setUserDetails ,
    } = useContext(UserDetailContext)

    useEffect(() => {    
        setHeartColor(() => checkFavourites(id, favourites))
    }, [favourites])
    

    const { mutate } = useMutation ({
        mutationFn: () => toFav(id, user?.email, token),
        onSuccess: () => {
            setUserDetails((prev) => (
                {
                    ...prev,
                    favourites: updateFavourites(id, prev.favourites)
                }
            ))
        }
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