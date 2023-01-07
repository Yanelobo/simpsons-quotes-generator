
function Quote({ quote }) {
  return (
    <div className = "quote">
        <div className="charImage">
            <img src={quote.image} alt = "image of the simpsons character">
            </img>
            
        </div>
        
        <blockquote>
            {quote.quote}
        </blockquote> 

        <div className ="charName" title = {quote.character}>
        {quote.character}
        </div>
    </div>
  )
}

export default Quote