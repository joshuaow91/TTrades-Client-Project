import React from "react";
import Logo from '../../public/logowhite.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';


const Header = () => {

    return (
        <div className="max-w-5xl flex rounded-md m-2">
        <div className="p-2 flex flex-col sm:flex-row justify-evenly items-center rounded-md bg-gradient-to-b from-zinc-800 to zinc-700 border-gray-700 ">
            <div className="w-1/2 sm:w-1/3 ">
                <a href="/">
                <img className="sm:w-full w-3/4 my-2 mx-auto bg-gradient-to-br from-zinc-600 to-zinc-700 rounded-full" src={Logo} alt="TTrades Logo"/>
                </a>
            </div>

            <div className="flex flex-col gap-y-4 sm:w-1/2 my-4 items-center">
                <h1 className="text-5xl sm:text-8xl font-bold tracking-tight text-white text-opacity-95">
                    TTrades
                </h1>
                <p className="font-light text-white sm:text-base text-sm text-opacity-80 text-center">
                Breaking down the toughest ICT concepts into easy-to-understand terms, helping you to become a confident and successful trader.
                </p>
                <ul className="flex gap-x-4">
                    <li>
                        <a href="https://www.youtube.com/@TTrades_edu" target='_blank' className="text-sky-600 opacity-70 hover:text-sky-700 ">
                        <FontAwesomeIcon icon={faYoutube} className="w-8 h-8 transform duration-300 hover:scale-110" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/TTrades_edu" className="text-sky-600 opacity-70 hover:text-sky-700">
                        <FontAwesomeIcon icon={faTwitter} target='_blank' className="w-8 h-8 transform duration-300 hover:scale-110" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ttradesedu/" className="text-sky-600 opacity-70 hover:text-sky-700">
                        <FontAwesomeIcon icon={faTiktok} target='_blank' className="w-8 h-8 transform duration-300 hover:scale-110" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sky-600 opacity-70 hover:text-sky-700">
                        <FontAwesomeIcon icon={faInstagram} target='_blank' className="w-8 h-8 transform duration-300 hover:scale-110" />
                        </a>
                    </li>
                </ul>
            </div>
        </div> 
        </div>
    )
}

export default Header;