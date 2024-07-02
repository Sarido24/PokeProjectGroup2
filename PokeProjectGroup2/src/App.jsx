import { useState, React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router-dom";
import './App.css'
import { MyContext } from "./context";
import router from "./router/index";

function App() {

  //INISIALISASI GLOBAL STATE 

  const [data, setData] = useState(null)




  //INISIALISASI GLOBAL FUNCTION DISINI
  const showItWork = ()=>{
    setData("INI JALAN")
  }

  return (
    <MyContext.Provider
    value={{
      data,
      setData,
      showItWork
    }}
  >
    <RouterProvider router={router} />
  </MyContext.Provider>
  )
}

export default App
