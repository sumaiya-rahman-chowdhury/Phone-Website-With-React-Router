import { useEffect, useState } from "react";

const Favourites = () => {
    const [favs, setFav] = useState([]);
    const [isShowmore,setShowMore] = useState(false)
    const [totalPrice,setTotalPrice] = useState(0)
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart'))
        if (items) {
            setFav(items)
            const total  = items.reduce((preValue,currentItem)=>preValue+currentItem.price,0)
            console.log(total)
            setTotalPrice(total)
        }
    }, [])
    console.log(favs)

    const remove = (id) =>{
        const data = favs.filter(fav=>fav.id !== id)
        setFav(data)
       localStorage.setItem('cart',JSON.stringify(data))
    }
  const handleRmv = () =>{
    localStorage.clear()
    setFav([])
  }
    return (
        <div className=" ">
            {favs.length>0 && <button onClick={handleRmv} className=" w-full bg-red-50 py-3 mt-10 font-bold rounded-lg ">Delete all</button>}
            <div>
                <h2 className=" text-2xl font-bold text-center my-5">Total Price : {totalPrice}</h2>
            </div>
            {
                isShowmore? favs?.map(fav => <div key={fav.id} className=" flex justify-between items-center gap-x-5 w-[400px] mx-auto bg-amber-200 p-5 mt-10 shadow-xl">
                <img src={fav.image
                } alt="" className=" w-[100px] h-[100px]"/>
                <h1 className=" font-bold text-xl">{fav.phone_name
                }</h1>
                <button onClick={()=>remove(fav.id)} className=" bg-lime-300 p-3 shadow-lg">remove</button>
            </div>) 
            :
            favs.slice(0,2).map(fav => <div key={fav.id} className=" flex justify-between items-center gap-x-5 w-[400px] mx-auto bg-amber-200 p-5 mt-10 shadow-xl">
                    <img src={fav.image
                    } alt="" className=" w-[100px] h-[100px]"/>
                    <h1 className=" font-bold text-xl">{fav.phone_name
                    }</h1>
                    <button onClick={()=>remove(fav.id)} className=" bg-lime-300 p-3 shadow-lg">remove</button>
                </div>)
            }
           {favs.length>2 &&  <button onClick={()=> setShowMore(!isShowmore)} className={` w-full bg-red-50 py-3 mt-10 font-bold rounded-lg ${isShowmore? " hidden": ""}`}>See  
             {`${isShowmore?" Less":" More"}`}</button>}
        </div>
    );
};

export default Favourites;