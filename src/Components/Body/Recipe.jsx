const Recipe = ({ recipe, handleWantToCookButton }) => {

    return (
        <div className="flex flex-col items-center">
            <div className="card bg-base-100 max-w-96 h-[720px] shadow-xl">

                <figure className="px-10 pt-20 rounded-xl">
                    <img
                        src={recipe.recipe_image}
                        alt="Reciepe"
                        className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold text-2xl">{recipe.recipe_name}</h2>
                    <p>{recipe.short_description}</p>

                    {/* Details */}
                    <div className="border-y py-6 my-5">
                        <h2 className="font-bold text-xl pb-4">Ingredients : {recipe.ingredients.length}</h2>
                        <ol className="font-semibold text-[#878787]">
                            {
                                recipe.ingredients.map(ingredient => <li>-{ingredient}</li>)
                            }
                        </ol>
                    </div>
                    {/* time calories */}
                    <div className="flex gap-10">
                        <h2>{recipe.preparing_time}</h2>
                        <h2>{recipe.calories}</h2>
                    </div>

                </div>


                <div className="card-actions flex justify-center py-4">
                    <button onClick={()=>handleWantToCookButton(recipe)} className="btn bg-[#0BE58A]">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;