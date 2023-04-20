import React from 'react';
import Disclaimer from '../../public/disclaimer.png'

const Modal = ({ show, handleClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-lg w-11/12 md:max-w-md mx-auto p-4 shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-bold text-black">Disclaimer/Disclosures</h5>
          <button
            type="button"
            className="text-gray-500 text-2xl hover:text-gray-700"
            onClick={handleClose}
          >
            &times;
          </button>
        </div>
        <div className="mt-4 h-96 overflow-scroll">
            <p className='text-black indent-2'>
            The information provided on this website is for general informational and educational purposes only and should not be construed as professional financial, investment, tax, or legal advice. Trading futures, options on futures, and other derivatives involves substantial risk of loss and may not be suitable for all investors.
            </p>
            <p className='text-black indent-2'>
            By using this website, you acknowledge and agree that TTrades and its affiliates, owners, employees, agents, and representatives are not responsible for any losses, damages, or financial consequences that may result from your trading activities or your reliance on the information provided on this website.
            </p>
            <p className='text-black indent-2'>
            Past performance is not indicative of future results. The trading strategies and market analysis discussed on this website are based on historical data and hypothetical situations, and there is no guarantee that they will yield the same or similar results in the future. You should carefully consider your financial situation, risk tolerance, and investment objectives before engaging in any trading activities.
            </p>
            <p className='text-black indent-2'>
            This website may contain links to external websites or resources that are not affiliated with TTrades. We are not responsible for the content, accuracy, or reliability of any information, data, opinions, or recommendations provided by these external websites or resources.
            </p>
            <p className='text-black indent-2'>
            By using this website, you agree to indemnify, defend, and hold harmless TTrades and its affiliates, owners, employees, agents, and representatives from and against any and all claims, losses, liabilities, damages, costs, and expenses (including reasonable attorney fees) arising out of or related to your use of this website or your violation of these terms and conditions.
            </p>
            <p className='text-black indent-2'>
            We reserve the right to modify or discontinue, temporarily or permanently, this website or any part of it, with or without notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of this website or any part of it.
            </p>
            <p className='text-black indent-2'>
            This website is not intended for use by individuals under the age of 18 or those who reside in a jurisdiction where the trading of futures, options on futures, and other derivatives is prohibited or restricted. By using this website, you represent and warrant that you are of legal age to form a binding contract and are not a person barred from using this website under the applicable laws and regulations.
            </p>
           <h5 className="text-lg font-bold text-black my-4">Affiliate Disclosure:</h5>
            <p className='text-black indent-2'>
                Some of the links on this website are affiliate links, which means that TTrades may earn a commission if you click on the link or make a purchase using the link. When you make a purchase, the price you pay will be the same whether you use the affiliate link or go directly to the vendor's website using a non-affiliate link. By using the affiliate links, you are helping support our website, and we genuinely appreciate your support.
            </p>    
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
