import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faUser } from '@fortawesome/free-solid-svg-icons';
import ETF from '../../public/etf.png'
import Stat from '../../public/stat.png'
import TV from '../../public/tv.png'
import TFO from '../../public/tfo.png'

const affiliatesData = [
  {
    name: 'Elite Trader Funding',
    description:
      'ETF provides live funding based on trading performance in simulated accounts.',
    code: 'ttradesETF',
    link: 'https://elitetraderfunding.com/products/?ref=ttrades',
    img: ETF,
  },
  {
    name: 'TFO Indicators',
    description:
      'Trading View indicators such as Smart Money Essentials, Smart Money Add-Ons, and TTrades Scalping Indicator. ',
    link: 'https://stratalerts.com/educators/tfo/?sld=ttradesedu',
    img: TFO,
  },
  {
    name: 'STAT Trading Discord',
    description:
      'Live market coverage, Weekly Stratification, Curated alerts, STRATBOT, Charts & setups.',
    link: 'https://stratalerts.com/join/?sld=ttradesedu',
    img: Stat,
  },
  {
    name: 'Trading View',
    description:
    'Upgrade your plan for 30 days FREE. Access stock prices, analyze price patterns, and more.',
    link: 'https://www.tradingview.com/?aff_id=108924',
    img: TV,
  },

];

const AffiliateCard = ({ name, description, code, link, img }) => (
  <div className='grid grid-cols-3 bg-zinc-800 p-4 rounded-md items-start gap-y-1 gap-x-6'>
    <div className="flex flex-col items-center col-span-1">
      <img src={img} alt='affiliate logo' className='rounded-full brightness-75 hover:brightness-100 transform duration-300 hover:scale-110'/>
    </div>
    <div className='col-span-2 text-white text-opacity-60 text-sm sm:text-base flex-col flex gap-y-2'>
      <h3 className="text-xl text-white text-opacity-90 font-semibold">{name}</h3>
      <span className='inline-flex'>{description}</span>
      <div className="mt-2 flex justify-start gap-x-8 items-center">
        <a href={link} target='_blank' className='text-white text-sm hover:bg-rose-800 bg-rose-900 bg-opacity-80 px-5 py-2 rounded transform duration-300 hover:scale-110'>
          Visit Page
          <FontAwesomeIcon icon={faArrowRightLong} className='ml-2'/>
        </a>
        {code && (
          <span className='font-semibold '>
            <mark className='bg-zinc-800 bg-opacity-20 text-white text-opacity-50 text-xs sm:text-sm p-3 rounded'>CODE: {code}</mark>
          </span>
      )}
      </div>
    </div>
  </div>
);


const Affiliates = () => {
  return (
    <div className="mb-6 max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-md mx-2">
      <h2 className='text-4xl font-bold tracking-wide text-white text-opacity-80 uppercase col-span-full text-center bg-zinc-800 bg-opacity-50 rounded-md p-2'>Affiliates</h2>

      {affiliatesData.map((affiliate) => (
        <AffiliateCard
          key={affiliate.name}
          name={affiliate.name}
          description={affiliate.description}
          code={affiliate.code}
          link={affiliate.link}
          img={affiliate.img}
        />
      ))}
    </div>
  );
};

export default Affiliates;
