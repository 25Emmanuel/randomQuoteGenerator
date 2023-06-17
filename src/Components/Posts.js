import React from 'react'
import { Link } from 'react-router-dom'

const Posts = ( { quotes } ) => {
  return (
    <>
      <div>
        <h1>{quotes.quoteAuthor}</h1>
      </div>
      <Link to='/'>Go back home</Link>
    </>
    
  )
}

export default Posts
