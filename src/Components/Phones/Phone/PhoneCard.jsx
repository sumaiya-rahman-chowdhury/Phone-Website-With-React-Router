/* eslint-disable react/prop-types */

import swal from "sweetalert";
import Rating from "react-rating";

const PhoneCard = ({ phone }) => {
    console.log(phone)
    const handleAdd = () => {
        const addCart = [];
        const items = JSON.parse(localStorage.getItem('cart'));
        if (!items) {
            addCart.push(phone);
            localStorage.setItem('cart', JSON.stringify(addCart))
            swal("added")
        }
        else {
            const alreadyExist = items.find(x => x.id == phone.id)
            if (!alreadyExist) {
                addCart.push(...items, phone);
                localStorage.setItem('cart', JSON.stringify(addCart));
                swal("added")
            }
            else {
                swal("Already Added")
            }
        }

    }

    return (
        <div>
            <div className=" mt-10 flex  items-center justify-center flex-wrap shadow-xl">
                <img src={phone?.image} alt="Album" className="  w-[400px]" />
                <div className=" bg-base-100 ">
                    <div className=" space-y-4 ">
                        <h2 className=" lg:text-5xl md:text-4xl text-3xl font-bold">{phone.phone_name}</h2>
                        <p className=" text-2xl font-semibold">Price :${phone.price}</p>
                        <p className=" max-w-md text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto non quibusdam ea incidunt. Recusandae pariatur itaque blanditiis nostrum debitis repellendus </p>
                        <Rating
                            initialRating={phone?.rating}
                            readonly />
                        <div className="">
                            <button onClick={handleAdd} className="btn btn-primary">Add To Favorites &#8594;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;