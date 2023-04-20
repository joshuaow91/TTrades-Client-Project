import React from "react";

const Footer = () => {

    return (
        <div className="flex flex-col mt-4 m-2 text-white text-sm font-light gap-x-10 bg-zinc-900 bg-opacity-30 rounded-md p-2 max-w-5xl">
            <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-3 bg-zinc-800 p-4 rounded gap-y-2">
              <p className="text-left text-sm">
                &copy; TTrades 2023. All Rights Reserved.
              </p>
              <p>Made by <a className=" text-white underline hover:text-zinc-200" href="https://joshuaow.com">Joshua Ow</a></p>
            </div>
            <div className="text-xs text-left max-h-44 overflow-scroll p-2 sm:max-h-96 text-white text-opacity-60">
                <p className="font-bold">WEBSITE DISCLAIMER</p>
                <p>
                    The information provided by TTrades LLC ("we," "us," or "our") on https://ttrades.netlify.app (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
                </p>
                <p className="font-bold">PROFESSIONAL DISCLAIMER</p>
                <p>
                    The Site cannot and does not contain financial advice. The financial information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of financial advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.
                </p>
                <p className="font-bold">AFFILIATES DISCLAIMER</p>
                <p>
                    The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links.
                </p>
            </div>
        </div>
    )
}

export default Footer;


