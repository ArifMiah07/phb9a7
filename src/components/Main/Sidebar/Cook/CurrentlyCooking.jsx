import PropTypes from 'prop-types';

const CurrentlyCooking = ({recipes}) => {
    console.log(recipes);
    return (
        <div>
            {/* {
                recipes.map((recipe, idx)=> (
                    <div key={idx}>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>{idx}</th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-[#d7ffef]">
                                        <th>{idx}</th>
                                        <td>{recipe.recipe_name}</td>
                                        <td>{recipe.recipe_time}</td>
                                        <td>{recipe.calories}</td>
                                        <td>
                                            <button className="btn bg-[#0be58a] rounded-[50px] px-3">Preparing</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))
            } */}
        </div>
    );
};


CurrentlyCooking.propTypes = {
    recipes: PropTypes.array
}

export default CurrentlyCooking;
