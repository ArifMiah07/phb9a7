import { ToastContainer, toast } from 'react-toastify';

import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
    const [cooks, setCooks] = useState(0);
    const [recipes, setRecipes] = useState([]);

    const handleWTCooks = (id, recipe) =>{
        const isExist = recipes.find((item)=> item.recipe_id === id );
        if (!isExist) {
            setCooks(cooks + 1);
            const newRecipes = [...recipes, recipe];
            setRecipes(newRecipes);
        } else {
            toast.error('This recipe is already added!');
        }
    }
    //update cooks state
    const updateCooks = (newCooks) => {
        setCooks(newCooks);
    }

    return (
        <div>
            <Header />
            <Main handleWTCooks={handleWTCooks} cooks={cooks} recipes={recipes} updateCooks={updateCooks} />
            <ToastContainer />
        </div>
    );
}

export default App;
