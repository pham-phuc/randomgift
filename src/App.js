import { useState } from "react";

const gifts = [
  'CPU I9',
  'RAM 32GB',
  'RBG Keybroad',
]

function App() {

  const [gift,setGift] = useState();

  const handlePrize = () =>{
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index]);
  }

  return (
    <div className="App">
     <h1> {gift || 'No rewards yet' } </h1>
      <button onClick={handlePrize} > Prize Draw </button>
    </div>
  );
}

export default App;
