import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Posts = ( { quotes, author, setAuthor, API_URL, setQuotes } ) => {

  const [authorQuotes, setAuthorQuotes] = useState([])
console.log(authorQuotes);
  useEffect (() => {

    async function fetchQuotes () {
      try {
        const response = await fetch (`${API_URL}?author=${quotes.quoteAuthor}`);
        if (!response.ok) {
          console.log('there was an error');
        }
        const data = await response.json();
        setAuthorQuotes(data.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchQuotes()
  }, [])
  
  console.log(authorQuotes);
  return (
    <>

      
      { 
        authorQuotes.map((authorquote) => {
          
          return (
              
              <div className='system' key={authorquote._id}>
                <div className='quote-container'>
                  <p className='quote'>
                    {authorquote.quoteText ? authorquote.quoteText : 'Oops! couldn\'t fetch quote, please try again... '}
                  </p>
                </div>  
              </div>
            
          )
        }) 
        
      }
      
      
      <>
        <div>
          <h1>{authorQuotes ? quotes.quoteAuthor : 'Loading...'}</h1>
        </div>
        <Link to='/'>Go back home</Link>
      </>
      
    </>
    
  )
}

export default Posts
