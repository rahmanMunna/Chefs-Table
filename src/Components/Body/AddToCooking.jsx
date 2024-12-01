const AddToCooking = ({cartForCooking}) => {
    const { recipe_name, preparing_time, calories } = cartForCooking
    return (
        
            <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                    <th></th>
                    <th>{recipe_name}</th>
                    <th>{preparing_time}</th>
                    <th>{calories}</th>
                    
                </tr>
            </tbody>
        
    );
};

export default AddToCooking;