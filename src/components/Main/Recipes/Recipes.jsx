import { useEffect, useState } from "react";
import Recipe from "./Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({handleWTCooks}) => {
const [recipes, setRecipes] = useState([]);

useEffect( ()=>{
    fetch('./recipe.json')
    .then(res => res.json())
    .then(data => setRecipes(data));
}, [])


    return (
        <div className="grid grid-cols-2 gap-6">
            {
                recipes.map((recipe, idx)=> (<Recipe key={idx} recipe={recipe} handleWTCooks={handleWTCooks}></Recipe>))
            }
        </div>
    );
};

Recipes.propTypes = {
    handleWTCooks: PropTypes.func
}

export default Recipes;