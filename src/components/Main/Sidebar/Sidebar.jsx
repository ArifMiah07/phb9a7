import CurrentlyCooking from "./Cook/CurrentlyCooking";
import WantToCooking from "./Cook/WantToCooking";
import PropTypes from 'prop-types';

const Sidebar = ({handleWTCooks, cooks, recipes}) => {
    // console.log('cooks',cooks);
    return (
        <div className="flex flex-col gap-3 h-fit border border-[#0be58a] rounded-[36px]">
            <div>
                <div>
                    <h1 className="font-semibold text-[24px] text-[#282828] text-center"> Want to cook: {cooks}
                    </h1>
                </div>
                <WantToCooking handleWTCooks={handleWTCooks} recipes={recipes}></WantToCooking>
            </div>
            <div>
                <div>
                    <h1  className="font-semibold text-[24px] text-[#282828] text-center">Currently Cooking: 00</h1>
                </div>
                <CurrentlyCooking handleWTCooks={handleWTCooks} recipes={recipes}></CurrentlyCooking>
            </div>
            <div className="flex p-2 gap-1">
                <div className="flex p-12 border-r border-dotted border-[#0be58a]">
                     <h1>Total Time = </h1>
                </div>
                <div className="flex p-12 border-l border-dotted border-[#0be58a]">
                    <h1>Total Calories = </h1>
                </div>
            </div>
        </div>
    );
};


Sidebar.propTypes = {
    handleWTCooks: PropTypes.func,
    cooks: PropTypes.number,
    recipes: PropTypes.array
}

export default Sidebar;