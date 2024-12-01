import BgImage from '../../../../images/Rectangle 1.png';
const Banner = () => {
    return (

        <div className="banner-container bg-cover bg-no-repeat h-[600px] bg-center flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center mb-10 rounded-3xl"
            style={{ backgroundImage: `url(${BgImage})` }}>
            <h1 className="text-6xl font-bold mb-4 ">Discover an exceptional cooking class tailored for you!</h1>
            <p className="text-3xl mb-6 text-center">Good food brings people together, nourishing both body and soul. <br /> Every bite tells a story of flavor and culture.</p>
            <div className="flex space-x-4">
                <button className="px-6 py-2 bg-blue-500 hover:bg-orange-400 text-black font-semibold rounded-lg shadow-md text-2xl">
                    Explore Now
                </button>
                <button className="px-6 py-2 bg-green-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md text-2xl">
                    Our Feedback
                </button>
            </div>
        </div>


    );
};

export default Banner;