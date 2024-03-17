import { useState } from "react";
import WantToCooking from "./Cook/WantToCooking";
import PropTypes from 'prop-types';

const Sidebar = ({ handleWTCooks, cooks, recipes, updateCooks }) => {
    // const {recipe_id} = recipes;

    const [currentlyCooking, setCurrentlyCooking] = useState([]);
    const [times, setTimes] = useState(0);
    const [calories, setCalories] = useState(0);

    const handlePreparing = (time, calorie, idx, recipe_name, id) => {
        const newTime = times + time;
        const newCalorie = calories + calorie;
        const newItem = { idx, recipe_name, time, calorie, id };
        const newCurrentlyCooking = [...currentlyCooking, newItem];
        console.log(newCurrentlyCooking); 
        setTimes(newTime);
        setCalories(newCalorie);
        updateCooks(prevCooks => prevCooks - 1);
        setCurrentlyCooking(newCurrentlyCooking);
    }
    const handleRemoveFromCurrentlyCooking = (id)=>{
        // const remainingCooks = newCurrentlyCooking.filter(item => item.id !== id);

        console.log(`i am from ${id}`);
    }

    return (
        <div className="flex flex-col gap-3 h-fit border border-[#0be58a] rounded-[36px]">
            <div>
                <div className="py-4 px-6 border-b border-gray-100">
                    <h1 className="font-semibold text-[24px] text-[#282828] text-center"> Want to cook: {cooks}</h1>
                </div>
                <WantToCooking handleWTCooks={handleWTCooks} recipes={recipes} handlePreparing={handlePreparing} handleRemoveFromCurrentlyCooking={handleRemoveFromCurrentlyCooking}/>
            </div>
            <div>
                <div>
                    <h1 className="font-semibold text-[24px] text-[#282828] text-center py-4 px-6 border-b border-gray-100">Currently Cooking: {currentlyCooking.length}</h1>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentlyCooking.map((item, index) => (
                                <tr key={index} className="bg-[#b2ffde]">
                                    <td>{index + 1}</td>
                                    <td>{item.recipe_name}</td>
                                    <td>{item.time} minutes</td>
                                    <td>{item.calorie} calories</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex p-2 gap-1">
                <div className="flex p-12 border-r border-dotted border-[#0be58a]">
                    <h1>Total Time = {times} minutes</h1>
                </div>
                <div className="flex p-12 border-l border-dotted border-[#0be58a]">
                    <h1>Total Calories = {calories} calories</h1>
                </div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    handleWTCooks: PropTypes.func,
    cooks: PropTypes.number,
    recipes: PropTypes.array,
    updateCooks: PropTypes.func.isRequired
}
export default Sidebar;
