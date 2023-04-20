import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const CHANNEL_ID = 'UCQwUEVakiYDmNGe7UBza4sQ';

const RecentVideos = () => {
  const [videoIds, setVideoIds] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);

  useEffect(() => {
    const fetchRecentVideos = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=12&order=date&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      const ids = data.items.map(item => item.id.videoId);
      setVideoIds(ids);
    };

    fetchRecentVideos();
  }, []);

  const handleViewMore = () => {
    setDisplayCount(displayCount + 3);
  };

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='m-2'>
      <h2 className='sm:text-4xl text-3xl font-bold tracking-wide text-white text-opacity-80 uppercase text-center bg-zinc-800 rounded-md mb-2 p-2'>Recent Videos</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {videoIds.slice(0, displayCount).map((videoId, index) => (
          <div key={index} className="relative w-full overflow-hidden rounded-md" style={{ paddingTop: '56.25%' }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <YouTube videoId={videoId} opts={opts} className='w-full h-full brightness-75 hover:brightness-100 transform hover:scale-105 duration-300' />
            </div>
          </div>
        ))}
      </div>
      {displayCount < videoIds.length && (
        <button
          className="mt-4 mx-auto w-full sm:w-1/2 block text-center text-white text-sm hover:bg-sky-700 bg-sky-600 bg-opacity-80 px-5 py-2 rounded-md"
          onClick={handleViewMore}
        >
          View More
        </button>
      )}
    </div>
  );
};

export default RecentVideos;
