import { useState } from "react";
import AddToCooking from "./AddToCooking";

const CurrentlyCooking = ({ selectedCookItem }) => {
    
    let totalTime = 0
    let totalCalories = 0
    const calculateTimeAndCalories = () => {

        for (const item of selectedCookItem) {
            const time = parseInt(item.preparing_time, 10)
            const cal = parseInt(item.calories, 10)
            totalTime = totalTime + time
            totalCalories = totalCalories + cal
        }
        // setTime(totalTime)
        // setCalories(totalCalories)

    }

    calculateTimeAndCalories()

    return (

        <div>
            <h1 className="text-3xl font-bold border-b-2 py-10 text-center mx-10">Want To Cook : {selectedCookItem.length} </h1>

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
                        selectedCookItem.map((cartForCooking, index) => <AddToCooking key={index} cartForCooking={cartForCooking} ></AddToCooking>)
                    }

                    {
                        <tr className="text-xl text-green-600">
                            <th></th>
                            <th>Total</th>
                            <th>{totalTime+"min"}</th>
                            <th>{totalCalories+" Cal"}</th>
                            

                        </tr>
                    }
                </table>

            </div>

        </div>

    );
};

export default CurrentlyCooking;