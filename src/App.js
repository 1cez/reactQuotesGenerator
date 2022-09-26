import { useState, useEffect } from "react";

function App() {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  useEffect(()=>{
    getQuote();
  },[])

  return (
    <div className="container">
      <div className="quotes-container">
      <div className="quotes-text">
        <h3>Quotes</h3>
      {quotes.text}
      </div>
      <div className="quotes-author">
        <h3>Author</h3>
      " {quotes.author} "
      </div>
      <div className="button-container">
      <button onClick={getQuote}>Get Quotes</button>
      </div>
      </div>
    </div>
  );
}

export default App;
