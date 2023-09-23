import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Header/Banner";
import Phones from "../Components/Phones/Phones";

const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div>
           <Banner></Banner>
           <Phones data={data}></Phones>
        </div>
    );
};

export default Home;