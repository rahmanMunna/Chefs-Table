import CurrentlyCooking from "./CurrentlyCooking";
import WantToCook from "./WantToCook";

const SideBar = ({selectedCookItem,handleCurrentCookingItem,saveCarts}) => {

    // const [carts] = saveCarts
    // console.log(saveCarts)
    // console.log(carts.length)
    // console.log(selectedCookItem.length)
    

    return (
        <div className="border w-[45%] rounded-xl">
           <WantToCook handleCurrentCookingItem={handleCurrentCookingItem} saveCarts={saveCarts}></WantToCook>
           <CurrentlyCooking selectedCookItem={selectedCookItem}></CurrentlyCooking>
        </div>
    );
};

export default SideBar;