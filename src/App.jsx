
import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
const [cooks, setCooks] = useState(0);
const [recipes, setRecipes] = useState([]);

const handleWTCooks = (id, recipe) =>{
  // Update cooks state by incrementing it by 1
  setCooks(cooks + 1);

  // Add the new recipe to the recipes array
  const newRecipes = [...recipes, recipe];
  setRecipes(newRecipes);
}


// const handleRecipes = (recipe) =>{
//   console.log('hi');
// }


  return (
    <>
      <div>
        <Header></Header>
        <Main handleWTCooks={handleWTCooks} cooks={cooks} recipes={recipes}></Main>
      </div>
    </>
  )
}

export default App
