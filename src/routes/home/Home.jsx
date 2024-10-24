import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className="home">
          <Link to='/dashboard'>
          dashboard
          </Link>
      </div>
    </div>
  )
}

export default Home
