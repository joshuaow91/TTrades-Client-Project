import React from "react";

const Footer = () => {

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center m-2 text-white text-sm font-light gap-y-1 bg-zinc-800 rounded-md rounded-t-none p-2 sm:bg-transparent">
            <p className="text-center text-xs">
                &copy; TTrades 2023. Not Financial Advice. 
            </p>
            <span className="text-xs"> Made by <a className=" hover:text-white hover:underline" href="https://joshuaow.com">Joshua Ow</a></span>
        </div>
    )
}

export default Footer;