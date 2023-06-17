import React from 'react'
import '../index.css'

const Quote = ( {quotes} ) => {
  
  return (
    <div className='system'>
      <div className='quote-container'>
        <p className='quote'>
          {/* “The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.” */}
          {quotes.quoteText ? quotes.quoteText : 'Oops! couldn\'t fetch quote, please try again... '}
        </p>
      </div>  
    </div>
  )
}

export default Quote
