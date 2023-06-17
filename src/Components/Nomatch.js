import React from 'react'
import { Link } from 'react-router-dom'

const Nomatch = () => {
  return (
    <>
        <div>
            <h1 style={{color:'red'}}>Page Not Found</h1>
        </div>
        <Link to='/'>Go back home</Link>
    </>
    

  )
}

export default Nomatch
