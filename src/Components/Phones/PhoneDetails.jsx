import { useLoaderData, useParams } from "react-router-dom";

const PhoneDetails = () => {
    const phoneDetails = useLoaderData();
    const { id } = useParams()
    console.log(id)
    const exactPhone = phoneDetails?.find(x => x.id == id)
    console.log(exactPhone)
    return (
        <div className=" mt-10 flex  items-center justify-center flex-wrap">
            <img src={exactPhone?.image} alt="Album" className=" p-10"/>
            <div className=" bg-base-100 ">
                <div className=" space-y-4 ">
                    <h2 className=" lg:text-5xl md:text-4xl text-3xl font-bold">{exactPhone.phone_name}</h2>
                    <p className=" text-2xl font-semibold">Price :${exactPhone.price}</p>
                    <div className="">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;