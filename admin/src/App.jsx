import { useState } from "react"
import Navbar from "./Component/Navbar"
import Sidebar from "./Component/Sidebar"
import {Route,Routes} from 'react-router-dom'
import Home from '../src/Pages/Home'
import Add from "./Pages/Add"
import List from "./Pages/List"
import Orders from "./Pages/Orders"
import Users from "./Pages/Users"
import Login from "./Component/Login"

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "");
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {
        token === " "?(<Login setToken={setToken}/>):(
          <>
          <Navbar token={token} setToken={setToken}/>
            <div className="flex w-full">
              <div className="w-[18%] fixed min-h-screen border-r-2">
                <Sidebar/>
              </div>
              <div className="flex-1 px-5 py-2 ml-[18%]">
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/add" element={<Add/>}/>
                  <Route path="/list" element={<List/>}/>
                  <Route path="/orders" element={<Orders/>}/>
                  <Route path="/users" element={<Users/>}/>
                  <Route path="/admin" element={<Login/>}/>
                </Routes>
              <div/>
            </div>
          </div>  
        </>
        )
      }
    </main>
  );
}

export default App;
