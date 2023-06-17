import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom'

const QuoteDetail = ({author, setAuthor, quotes, API_URL}) => {
  function handleAuthorClick (e) {
    // console.log(e.target.textContent);
    
  }
  return (
    <div className='quotedetails-container'>
      <div className='author_genre'>
        <p className='author' onClick={handleAuthorClick}> <Link to={`/${quotes.quoteAuthor}`}> {quotes.quoteAuthor}</Link></p>
        <p className='genre'>{quotes.quoteGenre}</p>
      </div>
      <div className='next_arrow'>
        <BsArrowRight />
      </div>
    </div>
  )
}

export default QuoteDetail
