import React from 'react'
import Quote from './Quote'
import QuoteDetail from './QuoteDetail'


const Home = ( {quotes, author, setAuthor, API_URL } ) => {
  return (
    <>
      <Quote 
        quotes={quotes}
      />
      <QuoteDetail 
        author={author}
        setAuthor={setAuthor}
        quotes={quotes}
        API_URL={API_URL}
      />
    </>
  )
}

export default Home
