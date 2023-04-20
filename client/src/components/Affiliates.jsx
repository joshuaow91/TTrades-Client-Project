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
      'ETF provides traders with an opportunity to earn live funding based on their trading performance in simulated accounts.',
    link: 'https://etf.fund/ttrades',
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
    name: 'TradingView',
    description:
    'Upgrade your plan for 30 days FREE. Access stock prices, analyze price patterns, and more.',
    link: 'https://www.tradingview.com/?aff_id=108924',
    img: TV,
  },

];

const AffiliateCard = ({ name, description, link, img }) => (
  <div className='grid grid-cols-3 bg-zinc-800 p-4 rounded-md sm:items-center gap-y-1 gap-x-6'>
    <div className="flex flex-col items-center col-span-1">
      <img src={img} alt='affiliate logo' className='rounded-full sm:w-3/4 brightness-75 hover:brightness-100 transform duration-300 hover:scale-110'/>
    </div>
    <div className='col-span-2 text-white text-opacity-60 text-sm sm:text-base flex-col flex gap-y-2'>
      <h3 className="sm:text-xl text-lg text-white text-opacity-90 font-semibold">{name}</h3>
      <span className='inline-flex sm:text-base text-xs'>{description}</span>
      <div className="mt-2 sm:flex-row flex flex-col justify-start gap-x-8 sm:items-center items-start gap-y-3 sm:gap-y-0">
        <a href={link} target='_blank' className='text-white text-sm hover:bg-sky-700 bg-sky-600 px-5 py-2 rounded transform duration-300 hover:scale-110'>
          Visit Page
          <FontAwesomeIcon icon={faArrowRightLong} className='ml-2'/>
        </a>
      </div>
    </div>
  </div>
);


const Affiliates = () => {
  return (
    <div className="mb-6 max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-md mx-2">
      <h2 className='sm:text-4xl text-3xl font-bold tracking-wide text-white text-opacity-80 uppercase col-span-full text-center bg-zinc-800 bg-opacity-50 rounded-md p-2'>Affiliates</h2>

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
