import React, { useState, useEffect } from 'react';
import Quote from './components/Quote';
import Loading from './components/Loading';

let data;
// const randomNo = () => Math.floor(Math.random() * data.lenght) + 1;


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, []);


  
  const [quote, setQuote] = useState({
    character: "Character name",
    quote: "The quote should be here.",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
  });

  async function getQuotes() {
    try {
      setLoading(true);
      const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
      data = await res.json();
      setLoading(false);
      setQuote({
        character: data[0].character,
        quote: data[0].quote,
        image: data[0].image})
        console.log(data[0]);
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="App">
      {loading === false ? (
        <Quote quote={quote}/>
        ) : (
        <Loading/>
        )}
        <button onClick={getQuotes}>Generate new quote</button>
    </div>
  );
}


export default App;
