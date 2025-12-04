import React from "react";
import { Link } from "react-router";

export default function Login() {
    return (
        <section className="container flex justify-center items-center mt-10 mb-18">
            <form className="w-[440px] h-[451px]">
                <h2 className="font-poppins font-semibold text-[36px] text-theme text-center mb-15">Login</h2>
                <h2 className="font-poppins font-semibold text-[16px] text-theme mb-2">Email</h2>  
                <input type="text" placeholder="example@gmail.com" className="w-full h-[43px] border border-[#E5E7EB] focus:outline-0 rounded-xl font-poppins font-normal text-[14px] placeholder:text-[#4b556398] pl-4 mb-6" />
                <h2 className="font-poppins font-semibold text-[16px] text-theme mb-2">Password</h2>
                <input type="password" className="w-full h-[43px] border border-[#E5E7EB] focus:outline-0 rounded-xl font-poppins font-normal text-[14px] placeholder:text-[#4b556398] pl-4 mb-6" />
                <Link to="/" className="w-[440px] h-[52px] bg-theme rounded-[9999px] flex justify-center items-center font-poppins font-semibold text-[16px] text-white">Continue</Link>
                <div>
                    <hr className="mt-8 relative text-[#F3F4F6]" />
                    <p className="w-[52px] h-5 bg-white flex justify-center items-center font-poppins font-medium text-[14px] text-secondary absolute left-[50%] transform translate-x-[-50%] translate-y-[-50%]">OR</p>
                </div>
                <p className="font-poppins font-normal text-[16px] text-secondary text-center mt-6">New user? <Link to="/registration" className="text-[#0EA5E9]"> Create an account</Link></p>
            </form>
        </section>
    )
}