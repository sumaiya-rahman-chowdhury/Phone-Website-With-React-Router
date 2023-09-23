
const Phone = ({ phone }) => {
    console.log(phone)
    return (
        <div>
            <div>
                <div className="rounded-md w-96 bg-base-100 shadow-xl mx-auto">
                    <figure className="px-10 pt-10">
                        <img src={phone?.image
                        } alt="Shoes" className="rounded-xl h-[300px] " />
                    </figure>
                    <div className="p-10 space-y-3">
                        <h2 className="font-bold">{phone.brand_name}</h2>
                        <h2 className=" font-semibold">{phone.phone_name}</h2>
                        <p>Price: {phone?.price}$</p>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="">
                            <button className="bg-amber-100 w-full py-2 rounded font-semibold">See Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Phone;