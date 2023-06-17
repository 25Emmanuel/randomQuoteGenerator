import { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import Posts from './Components/Posts'
import { TfiReload } from 'react-icons/tfi';
import { Route, Routes } from 'react-router-dom'

function App() {

  function randomNumberForPage () {
    return Math.floor(Math.random() * 7269)
  }
  const [quotes, setQuotes] = useState([]);
  const [pageNumber, setPageNumber] = useState(randomNumberForPage());
  const [author, setAuthor] = useState('')

  // function randonNumberForQuote () {
  //   return Math.floor(Math.random() * 11);
  // }
  

  const API_URL = 'https://quote-garden.onrender.com/api/v3/quotes/';
  
  
  useEffect(() => {
    
    async function fetchQuotes () {
      try {
        const response = await fetch (`${API_URL}?page=${pageNumber}`);
        if (!response.ok) {
          console.log('there was an error');
        }
        const data = await response.json();
        setQuotes(data.data[0])
  
      } catch (err) {
        console.log(err);
      }
    }
    fetchQuotes ();
  }, [pageNumber])

  function handleRefreshClick () {
    setPageNumber(randomNumberForPage());
    console.log(quotes); 
  }
  return (
    <>
      
      <main>
        <div className='refresh-container'onClick={handleRefreshClick}>
          <span>refresh</span>
          <TfiReload />
        </div>

        <div className="App">
          <Routes>
            <Route path='/' element={
              <Home 
                quotes={quotes}
                API_URL={API_URL}
                // setQuotes={setQuotes}
              />}
            />

            <Route path={`/${quotes.quoteAuthor}`} element={ 
            <Posts 
              quotes={quotes}
            />} />
  
          </Routes>
          
        </div>

        <p className='bottom-text'>created by 25Emmanuel - devChallenges.io</p>
      </main>
    </>
    
  );
}

export default App;
