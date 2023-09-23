/* eslint-disable react/prop-types */

import Phone from "./Phone/Phone"

const Phones = ({data}) => {
    // console.log(data)
    return (
        <div className=" mt-10">
            <h2 className=" text-3xl font-bold text-center">Our Collection</h2>
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
           {
                data?.map(phone=><Phone key={phone.id} phone={phone}></Phone>)
            }
           </div>
        </div>
    );
};

export default Phones;