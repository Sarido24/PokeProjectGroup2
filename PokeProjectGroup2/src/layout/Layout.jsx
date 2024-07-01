import { Outlet, Link } from "react-router-dom";



export default function Layout(){
    return(
        <>
        <div >
            <Link style={{padding:"5px"}} to={"/"}>Home</Link>
            <Link style={{padding:"5px"}} to={"/evolution"}>evolution</Link>
        </div>
        <Outlet />
        </>
    )
}