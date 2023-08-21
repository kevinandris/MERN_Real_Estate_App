import React, { useContext, useEffect } from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import UserDetailContext from '../context/UserDetailsContext.js'
import { useMutation } from 'react-query'

const Layout = () => {

  const {isAuth, user} = useAuth0()
  const {setUserDetails} =  useContext(UserDetailContext)

  const {mutate} = useMutation ({
    mutationKey: [user?.email],
    mutationFn: () => createUser(user?.email)
  })

  useEffect(() => {

  }, [isAuthenticated])
  return (

    <>
        <div style={{background: "var(--black)", overflow: "hidden"}}>
            <Header/>
            <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default Layout