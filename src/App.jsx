
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Header from './components/Header/Header';

function App() {
  const [items, setItems] = useState([]);

  useEffect( ()=>{
    fetch('./recipe.json')
    .then(res => res.json())
    .then(data => setItems(data));
  }, [])


  return (
    <>
      <div>
        
        <Header></Header>
      </div>
      <div>
      <h1>React Items: {items.length}</h1>
      {
        items.map((item, idx)=> <img key={idx} src={item.recipe_image
        }></img>)
      }
      </div>

    </>
  )
}

export default App
