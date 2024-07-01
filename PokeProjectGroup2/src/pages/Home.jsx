import { useContext } from "react"
import { MyContext } from "../context"



export default function Home(){
    const {data} = useContext(MyContext)
    const {showItWork} = useContext(MyContext)
    return (
        <>
        <div>
        <h1>Home</h1>
        <button onClick={showItWork} style={{padding: "10px"}}>Test</button>
        {data && 
        <p>{data}</p>}

        </div>
        </>
    )
}