import React, { useState } from "react";
import Modal from "./Modal";

const Footer = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center m-2 text-white text-sm font-light gap-y-1 bg-zinc-800 rounded-md rounded-t-none p-2 sm:bg-transparent">
            <p className="text-center text-xs">
                &copy; TTrades 2023. Not Financial Advice. 
            </p>
            <span className="text-xs"> Made by <a className=" hover:text-white underline" href="https://joshuaow.com">Joshua Ow</a></span>
            <button
                className="bg-sky-800 text-white px-4 py-2 rounded hover:bg-sky-900"
                onClick={handleShow}
            >
                Disclaimer
            </button>
            <Modal show={showModal} handleClose={handleClose} />
        </div>
    )
}

export default Footer;