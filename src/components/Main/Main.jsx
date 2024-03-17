import Recipes from "./Recipes/Recipes";
import Sidebar from "./Sidebar/Sidebar";
import PropTypes from 'prop-types';

const Main = ({handleWTCooks, cooks, recipes, updateCooks}) => {
    // console.log(recipes);
    return (
        <div id="recipe" className="w-[1170px] mx-auto flex flex-col my-16">
            {/* text and title */}
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[40px] font-semibold text-[#150B2B] text-center ">Our Recipes</h1>
                <p className="text-[#150b2b99] text-center mb-12 mt-4">Explore Our Recipes, your gateway to a world of gastronomic delights. From savory classics to innovative creations, <br /> embark on a culinary journey with our diverse collection of delectable dishes.</p>
            </div>
            {/* Recipes and sidebar */}
            <div className="flex flex-row justify-between gap-6"> 
                <Recipes handleWTCooks={handleWTCooks} cooks={cooks}></Recipes>
                <Sidebar handleWTCooks={handleWTCooks} cooks={cooks} recipes={recipes} updateCooks={updateCooks}></Sidebar>
            </div>
        </div>
    );
};


Main.propTypes = {
    handleWTCooks: PropTypes.func,
    cooks: PropTypes.number,
    recipes: PropTypes.array,
    updateCooks: PropTypes.func.isRequired
}

export default Main;