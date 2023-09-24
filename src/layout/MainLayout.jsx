import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import { useEffect } from "react";

const MainLayout = () => {
    const loc = useLocation()
    // console.log(loc)
    useEffect(()=>{

        console.log(loc.pathname)
        document.title = `Phone${loc.pathname.replace('/','-')}` ;
        if(loc.pathname === "/"){
            document.title = "Home"
        }
        if(loc.state){
            document.title = `${loc.state}`
        }

    },[loc.pathname,loc.state])

    return (
        <div className=" max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;