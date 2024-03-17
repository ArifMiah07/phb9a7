import PropTypes from 'prop-types';

const WantToCooking = ({recipes, handlePreparing, handleRemoveFromCurrentlyCooking}) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th><embed /></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    {
                        recipes.map((recipe, idx)=> (
                            <tbody key={idx}>
                                <tr className="bg-[#d7ffef]">
                                    <th>{idx + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time} minutes</td>
                                    <td>{recipe.calories} calories</td>
                                    <td>
                                        <button onClick={()=>{
                                            handlePreparing(recipe.preparing_time, recipe.calories, idx, recipe.recipe_name, recipe.recipe_id); 
                                            handleRemoveFromCurrentlyCooking(recipe.recipe_id);
                                            }} className="btn bg-[#0be58a] rounded-[50px] px-3">Preparing</button>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
        </div>
    );
};

WantToCooking.propTypes = {
    recipes: PropTypes.array,
    handlePreparing: PropTypes.func,
    handleRemoveFromCurrentlyCooking: PropTypes.func
}

export default WantToCooking;