import React, { useState  } from "react"
import Home from "./Components/Home/Home"
import { NavLink, Route , Routes } from "react-router-dom"
import Edit from "./Components/EditPage/Edit"
import { goBackContext } from "./Components/useContext/UseContext"

function App() {
  
  const [show , setShow] = useState(false)

  return (
    <div>
       <div id="meme" className="bg-black">
          <div className=" d-flex align-items-center container">
             {show && <NavLink to='/' className='btn btn-light'>Go back</NavLink>}
             <h1  className="text-center py-3 text-white mb-0 mx-auto  ">Meme Generator</h1>
          </div>
       </div>
       <goBackContext.Provider value={{setShow}}>
           <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/edit" element={<Edit/>}/>
           </Routes>
       </goBackContext.Provider>
    </div>
  )
}

export default App
