import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { removeToken, removeUserId, getUserId } from '../helpers/auth'

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useHistory()

  const handleLogout = () => {
    removeToken()
    removeUserId()
    setIsLoggedIn(false)
    history.push('/')
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/cities'>Cities</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to={`/users/${getUserId()}`}>Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Nav

