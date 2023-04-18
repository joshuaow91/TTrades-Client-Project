import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const YOUTUBE_API_KEY = 'AIzaSyABa_gQOqNXSxjg5PFfd4mBaovrstRiWTs';
const CHANNEL_ID = 'UCQwUEVakiYDmNGe7UBza4sQ';

const RecentVideos = () => {
  const [videoIds, setVideoIds] = useState([]);

  useEffect(() => {
    const fetchRecentVideos = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=6&order=date&type=video&key=${YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      const ids = data.items.map(item => item.id.videoId);
      setVideoIds(ids);
    };

    fetchRecentVideos();
  }, []);

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <h2 className='text-center text-4xl font-bold tracking-tight text-zinc-200 mb-4'>Recent Videos</h2>
      <div className="m-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {videoIds.map((videoId, index) => (
          <div key={index} className="relative w-full overflow-hidden rounded-md" style={{ paddingTop: '56.25%' }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <YouTube videoId={videoId} opts={opts} className='w-full h-full brightness-75 hover:brightness-100 transform hover:scale-105 duration-300' />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentVideos;
