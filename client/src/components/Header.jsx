import React from "react";
import Logo from '../../public/logowhite.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';


const Header = () => {

    return (
        <div className="m-2 p-2 flex flex-col sm:flex-row justify-evenly  items-center rounded-md bg-zinc-800 border-gray-700 max-w-2xl">
            <div className="w-1/2 sm:w-1/3">
                <a href="#">
                <img className="w-full my-2 bg-gradient-to-br from-zinc-500 to-zinc-600 rounded-full" src={Logo} alt="TTrades Logo"/>
                </a>
            </div>

            <div className="flex flex-col gap-y-4 sm:w-1/2 my-4 items-center">
                <h1 className="text-6xl font-bold tracking-tight text-white">
                    TTrades
                </h1>
                <p className="font-light text-slate-300 text-center">
                Breaking down the toughest ICT concepts into easy-to-understand terms, helping you to become a confident and successful trader.
                </p>
                <ul className="flex gap-x-4">
                    <li>
                        <a href="https://www.youtube.com/@TTrades_edu" target='_blank' className="text-gray-500 hover:text-white">
                        <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/TTrades_edu" className="text-gray-500 hover:text-white">
                        <FontAwesomeIcon icon={faTwitter} target='_blank' className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ttradesedu/" className="text-gray-500 hover:text-white">
                        <FontAwesomeIcon icon={faTiktok} target='_blank' className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-white">
                        <FontAwesomeIcon icon={faInstagram} target='_blank' className="w-6 h-6" />
                        </a>
                    </li>
                </ul>
            </div>
        </div> 
    )
}

export default Header;