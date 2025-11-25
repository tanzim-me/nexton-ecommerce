import React from "react"
import cat from "../assets/images/cat.jpeg"

export default function SingleCartItem() {
    
    return(
        <>
            {/* ***************************** Single items part start ******************************* */}
            <div className="flex gap-10 items-start">
                {/* ---------------------------- Item image --------------------------- */}
                <img src={cat} alt="cat image" className="w-20 h-20 rounded-lg" />

                {/* ---------------------------- Item texts --------------------------- */}
                <div>
                    <h2 className="font-poppins font-bold text-theme text-xl mb-5">Title</h2>
                    <p className="font-poppins font-normal text-theme text-md">Price</p>
                </div>
            </div>
            {/* ***************************** Single items part end ******************************* */}
        </>
    )
}