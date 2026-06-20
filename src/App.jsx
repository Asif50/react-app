import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Products from './components/products/Products.jsx'
// import Counter from './components/counter/Counter.jsx'
import ImageComp from './components/imagetask/ImageComp.jsx'
import Nav from './components/nav/Nav.jsx'
import Electronics from './components/products/categories/electronics/Electronics.jsx'
import {Route, Routes} from 'react-router-dom'
import PageNotFound from './components/pagenotfound/PageNotFound.jsx'
import MensC from './components/products/categories/mensC/MensC.jsx'
import WomensC from './components/products/categories/womensC/WomesC.jsx'
import Jewelry from './components/products/categories/jewelry/Jewelry.jsx'
import AllProducts from './components/allproducts/AllProducts.jsx'
// import A from './components/parent-child/A.jsx'
import A from './components/context-api/A.jsx'
import HomeContext from './components/context-api/HomeContext.jsx'
// import Name from './components/child-parent/Name.jsx'
import Ref from './components/ref/Ref.jsx'
import Timer from './components/timer/Timer.jsx'
import RefDom from './components/ref/RefDom.jsx'
import Image from './components/lifeCycle/Image.jsx'
import App1 from './App1.jsx'
import SimpleSlider from './components/allproducts/simpleslider/SimpleSlider.jsx'
import UseReduser from './components/reducer/UseReducer.jsx'
import Counter from './components/reducer/Counter.jsx'
import Name from './components/redux/components/Name.jsx'
import Details from './components/redux/components/Details.jsx'
import City from './components/redux/components/City.jsx'
import NewUser from './components/json-server/NewUser.jsx'
import Users from './components/json-server/Users.jsx'
import UserHome from './components/json-server/UserHome.jsx'
import Memo from './components/usememo/Memo.jsx'
import GithubHome from './components/github/Home.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <> 

        <Nav/>

        <Memo/>

      <div className='subAppContainer'>
         <Name/> 
        <City/>
      </div>


       
        <hr />
        <Details/>
        
        {/* <SimpleSlider/> */}


        {/* <App1/> */}
        {/* <Counter/> */}

        {/* <UseReduser/> */}

        {/* <Timer/> */}
        <hr />

        <Image/>

        <hr />

        {/* <Ref/> */}

        {/* <RefDom/> */}

        {/* <HomeContext/> */}

        {/* <Name/> */}

        {/* <A/> */}


        <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/allproducts"} element={<AllProducts/>}></Route>
        <Route path={"/products"} element={<Products/>}>
          <Route path='electronics' element={<Electronics/>}></Route>
          <Route path='jewelry' element={<Jewelry/>}></Route>
          <Route path='mens' element={<MensC/>}></Route>
          <Route path='womens' element={<WomensC/>}></Route>
        </Route>
        <Route path={"/counter"} element={<Counter/>}></Route>
        <Route path={"/imagecomp"} element={<ImageComp/>}></Route>
        <Route path={"/electronics"} element={<Electronics/>}></Route>
        <Route path={"/jsonserver"} element={<UserHome/>}></Route>
        <Route path={"/github"} element={<GithubHome/>}></Route>
        <Route path={"*"} element={<PageNotFound/>}></Route>

        </Routes>
    </>
  )
}

export default App
