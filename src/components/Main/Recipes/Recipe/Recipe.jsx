import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { RiFireLine } from "react-icons/ri";

const Recipe = ({recipe, handleWTCooks}) => {
    const {calories, ingredients, preparing_time, recipe_id, recipe_image, recipe_name, short_description } = recipe;
    // console.log(recipe);
    return (
        <div className="flex flex-col gap-4, p-6 border border-[#0be58a] rounded-[42px] drop-shadow-2xl">
            <div >
                <img className="border-2 rounded-[32px] border-[#0be58a] drop-shadow-xl" src={recipe_image} alt="" />
            </div>
            <div>
                <h1 className="text-[20px] font-semibold text-[#2b2b2b] ">{recipe_name}</h1>
                <p className="text-[#878787]">{short_description}</p>
                <h2>Ingredients: {ingredients.length}</h2>
                <ul className='px-8'>
                    {
                        ingredients.map((ingredient, idx)=> <li key={idx} className="list-disc"> {ingredient}</li>)
                    }
                </ul>
            </div>
            <div>
                <div className="flex gap-5">
                    <p className="flex items-center gap-1"><CiClock2 /> {preparing_time} minutes</p>
                    <p className="flex items-center gap-1"><RiFireLine /> {calories} calories</p>
                </div>
                <div>
                    <button onClick={()=>handleWTCooks(recipe_id, recipe)} className="btn bg-[#0be58a] text-[#150b2b] rounded-[50px] font-medium text-[18px] py-2 px-5 drop-shadow-lg">
                        Want to Cook
                    </button>
                </div>
            </div>
        </div>
    );
};


Recipe.propTypes = {
    recipe: PropTypes.object,
    handleWTCooks: PropTypes.func
}

export default Recipe;