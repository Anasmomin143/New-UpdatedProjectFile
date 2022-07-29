import React from 'react'
import Userinfo from '../Form/UserInfo'
const User = (props) => {
 const {user , setUserOnLogin} = props

  return (
    <div>
      <Userinfo user={user} setUserOnLogin={setUserOnLogin}/>
    </div>
  )
}

export default User