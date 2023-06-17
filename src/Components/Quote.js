import React from 'react'
import '../index.css'

const Quote = ( {quotes} ) => {
  
  return (
    <div className='system'>
      <div className='quote-container'>
        <p className='quote'>
          {quotes.quoteText ? quotes.quoteText : 'Oops! couldn\'t fetch quote, please try again... '}
        </p>
      </div>  
    </div>
  )
}

export default Quote
