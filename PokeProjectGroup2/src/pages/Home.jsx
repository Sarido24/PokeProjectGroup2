import { useContext } from "react"
import { MyContext } from "../context"
import Button from 'react-bootstrap/Button';



export default function Home(){
    const {data} = useContext(MyContext)
    const {showItWork} = useContext(MyContext)
    return (
        <>
        <div>
        <h1>Home</h1>
        <Button onClick={showItWork} variant="secondary" >Test</Button>
        {data && 
        <p>{data}</p>}

        </div>
        </>
    )
}