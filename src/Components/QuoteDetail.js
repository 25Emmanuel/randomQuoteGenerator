import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'

const QuoteDetail = ({setAuthor, quotes, API_URL}) => {
   
  useEffect (() => {

    async function fetchQuotes () {
      try {
        const response = await fetch (`${API_URL}?author=${quotes.quoteAuthor}`);
        if (!response.ok) {
          console.log('there was an error');
        }
        
      } catch (err) {
        console.log(err);
      }
    }
    fetchQuotes()
  })
  
    
  
  return (
    <div className='quotedetails-container'>
      <div className='author_genre'>
        <p className='author' onClick={() => setAuthor(quotes.quoteAuthor)}> <Link className='author' to={`/${quotes.quoteAuthor}`}> {quotes.quoteAuthor}</Link></p>
        <p className='genre'>{quotes.quoteGenre}</p>
      </div>
      <div className='next_arrow'>
        <BsArrowRight />
      </div>
    </div>
  )
}

export default QuoteDetail
