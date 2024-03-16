import PropTypes from 'prop-types';

const WantToCooking = ({recipes}) => {
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
                                        <button className="btn bg-[#0be58a] rounded-[50px] px-3">Preparing</button>
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
    recipes: PropTypes.array
}

export default WantToCooking;