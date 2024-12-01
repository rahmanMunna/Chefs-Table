const AddToWantToTable = ({ handleCurrentCookingItem,saveCart }) => {
    // console.log(saveCart)
    const { recipe_name, preparing_time, calories } = saveCart
    // console.log(recipe_name)

    return (

        <tbody>
            {/* <!-- row 1 --> */}
            <tr>
                <th></th>
                <th>{recipe_name}</th>
                <th>{preparing_time}</th>
                <th>{calories}</th>
                <button onClick={()=>handleCurrentCookingItem(saveCart)} className="btn bg-green-400 text-black text-xl ">Preparing</button>
            </tr>
        </tbody>



    );
};

export default AddToWantToTable;