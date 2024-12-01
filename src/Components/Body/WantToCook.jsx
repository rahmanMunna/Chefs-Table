import AddToWantToTable from "./AddToWantToTable";

const WantToCook = ({ handleCurrentCookingItem,saveCarts }) => {
    // console.log(saveCarts)
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold border-b-2 py-10 text-center mx-10">Want To Cook : {saveCarts.length} </h1>

                <div className="overflow-x-auto py-6">
                    <table className="table">
                        <thead>
                            <tr className="text-xl font-bold">
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        {
                            saveCarts.map((saveCart, index) => <AddToWantToTable key={index} handleCurrentCookingItem={handleCurrentCookingItem} saveCart={saveCart}></AddToWantToTable>)
                        }
                    </table>
                </div>

            </div>
        </div>
    );
};

export default WantToCook;



