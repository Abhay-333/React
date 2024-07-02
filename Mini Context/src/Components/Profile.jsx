import React, { useContext } from 'react'
import UserContext from '../Context/Context'

const Profile = () => {
    const {user} = useContext(UserContext)
    
    if(!user) return <h1>Please Login to Proceed</h1>

    return <h1>Welcome {user}</h1>
  
}

export default Profile