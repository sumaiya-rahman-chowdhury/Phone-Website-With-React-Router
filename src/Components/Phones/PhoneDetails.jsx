import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./Phone/PhoneCard";

const PhoneDetails = () => {
    const phoneDetails = useLoaderData();
    const [phone,setPhone] = useState({})
   
    const { id } = useParams()
    // console.log(id)
    useEffect(()=>{
        const exactPhone = phoneDetails?.find(x => x.id == id)
    setPhone(exactPhone)
    },[id,phoneDetails])

    
    

    return (
        <div>
            <PhoneCard phone={phone} ></PhoneCard>
        </div>
    );
};

export default PhoneDetails;