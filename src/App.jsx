import './App.css'
import Recipes from './Components/Body/Recipes'
import Banner from './Components/Header/Banner'
import NavBar from './Components/Header/NavBar'

function App() {

  return (
    <>
      <div className='mx-auto container mt-10'>
        <NavBar></NavBar>
        <Banner></Banner>
        <Recipes></Recipes>
      </div>
    </>

  )
}

export default App
