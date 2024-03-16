
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Navbar from './components/Header/Navbar';

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
        <Navbar></Navbar>
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
