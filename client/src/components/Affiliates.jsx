import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faUser } from '@fortawesome/free-solid-svg-icons';

const Affiliates = () => {
  return (
    <div className="mb-6 max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-md">
      <h2 className='text-4xl font-bold tracking-tight text-zinc-200 col-span-full text-center'>Affiliates</h2>

      <div className='grid grid-cols-6 bg-zinc-600 p-4 rounded-md place-items-center gap-y-2 gap-x-6'>
        <div className="flex flex-col items-center col-span-2">
          <FontAwesomeIcon
            icon={faUser}
            className="w-10 h-10 bg-zinc-700 rounded-full p-5 mb-2 text-zinc-300"
          />
        </div>
        <div className='col-span-4 text-zinc-400 text-sm sm:text-base flex-col flex gap-y-2'>
          <h3 className="text-xl text-zinc-300 font-semibold">Elite Trader Funding</h3>
          <span className='inline-flex'>ETF provides traders with an opportunity to earn live funding based on their trading performance in simulated accounts. </span>
        </div>
        <ul className='grid grid-cols-2 col-span-6 gap-3 mt-4'>
            <li><span className='font-semibold'><mark className='bg-indigo-400 text-zinc-800 text-sm p-2 rounded-md'>CODE: ttradesETF</mark></span></li>
            <li><a href='https://elitetraderfunding.com/products/?ref=ttrades' target='_blank' className='text-zinc-300 text-sm bg-zinc-700 hover:bg-zinc-500 p-2 rounded-md'>
              Visit Page
              <FontAwesomeIcon icon={faArrowRightLong} className='ml-2'/>
              </a></li>
          </ul>
      </div>

      <div className='grid grid-cols-6 bg-zinc-600 p-4 rounded-md place-items-center gap-y-2 gap-x-6'>
        <div className="flex flex-col items-center col-span-2">
          <FontAwesomeIcon
            icon={faUser}
            className="w-10 h-10 bg-zinc-700 rounded-full p-5 mb-2 text-zinc-300"
          />
        </div>
        <div className='col-span-4 text-zinc-400 text-sm sm:text-base flex-col flex gap-y-2'>
          <h3 className="text-xl text-zinc-300 font-semibold">Elite Trader Funding</h3>
          <span className='inline-flex'>ETF provides traders with an opportunity to earn live funding based on their trading performance in simulated accounts. </span>
        </div>
        <ul className='grid grid-cols-2 col-span-6 gap-3 mt-4'>
            <li><span className='font-semibold'><mark className='bg-indigo-400 text-zinc-800 text-sm p-2 rounded-md'>CODE: ttradesETF</mark></span></li>
            <li><a href='https://elitetraderfunding.com/products/?ref=ttrades' target='_blank' className='text-zinc-300 text-sm bg-zinc-700 hover:bg-zinc-500 p-2 rounded-md'>
              Visit Page
              <FontAwesomeIcon icon={faArrowRightLong} className='ml-2'/>
              </a></li>
          </ul>
      </div>
      
    </div>
  );
};

export default Affiliates;
