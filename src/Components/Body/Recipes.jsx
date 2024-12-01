import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
import SideBar from "./SideBar";

const Recipes = () => {
    const [recipes, setRecipe] = useState([])
    const [saveCarts, setSaveCarts] = useState([])
    const [selectedCookItem, setSelectedCookItem] = useState([])
    let state = true;


    const additionalComponent = (
        
        <div className="toast">
            <div className="alert alert-info">
                <span>New message arrived.</span>
            </div>
        </div>
    )



    useEffect(() => {
        fetch('Recipe.json')
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])


    const handleWantToCookButton = (selectedRecipe) => {
        state = true;
        if (saveCarts.length !== 0) {

            for (const cart of saveCarts) {
                if (cart.recipe_id === selectedRecipe.recipe_id) {
                    state = false;
                    break;
                }
            }
        }

        if (state) {
            const newCarts = [...saveCarts, selectedRecipe]
            setSaveCarts(newCarts)

        }
        else{
            alert("Can't Added More Than One Item")
        }



    }

    const handleCurrentCookingItem = (selectedCart) => {

        const remainingCarts = saveCarts.filter(cart => cart.recipe_id !== selectedCart.recipe_id)
        const selectedItemArray = [...selectedCookItem, selectedCart]
        setSelectedCookItem(selectedItemArray)
        setSaveCarts(remainingCarts)

    }
    const mainContent =
        (<div className="flex gap-10">
            <div className="grid grid-cols-2 gap-5">
                {
                    recipes.map((recipe, index) => <Recipe key={index}
                        handleWantToCookButton={handleWantToCookButton}
                        recipe={recipe}></Recipe>)
                }
            </div>
            <SideBar selectedCookItem={selectedCookItem} handleCurrentCookingItem={handleCurrentCookingItem} saveCarts={saveCarts}></SideBar>
        </div>)

    // const combinedComponent;



    return (


        <div>
            {mainContent}
        </div>



    );
};

export default Recipes;