import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Affiliates = () => {
  return (
    <div className="mb-6 max-w-2xl flex items-center flex-col p-4 rounded-md bg-opacity-25">
        <h2 className='text-center text-4xl font-bold tracking-tight text-zinc-200 mb-4'>Affiliates</h2>

      <div className='flex w-full mb-4'>
        <div className="flex flex-col justify-center items-center px-4 sm:p-2 bg-slate-300 rounded-md w-1/3 sm:w-1/4">
          <FontAwesomeIcon
            icon={faUser}
            className="w-10 h-10 dark:bg-slate-600 rounded-full p-5 mb-2 text-zinc-300"
          />
          <h3 className="text-xl font-bold text-slate-500">Affiliate</h3>
        </div>

        <div className='w-2/3 sm:w-3/4 ml-4 sm:ml-6'>
          <p className=" text-slate-300 text-sm sm:text-base">
            A premier provider of advanced trading tools and analytics, Affiliate empowers traders to make informed decisions and optimize their strategies in the ever-changing market landscape.
          </p>
        </div>
      </div>

      <div className='flex w-full justify-evenly mb-4'>
        <div className="flex flex-col justify-center items-center px-4 sm:p-2 bg-slate-300 rounded-md w-1/3 sm:w-1/4">
          <FontAwesomeIcon
            icon={faUser}
            className="w-10 h-10 dark:bg-slate-600 rounded-full p-5 mb-2 text-zinc-300"
          />
          <h3 className="text-xl font-bold text-slate-500">Affiliate</h3>
        </div>
        <div className='w-2/3 sm:w-3/4 ml-4 sm:ml-6'>
          <p className=" text-slate-300 text-sm sm:text-base">
            A premier provider of advanced trading tools and analytics, Affiliate empowers traders to make informed decisions and optimize their strategies in the ever-changing market landscape.
          </p>
        </div>
      </div>
      
    
    </div>
  );
};

export default Affiliates;
