import React from 'react';
import YouTube from 'react-youtube';

const Playlist = () => {
  const PLAYLIST_ID = 'PLKO4NZBAzaREu1ItIUMXuE2a7Re2C2XQd';

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      listType: 'playlist',
      list: PLAYLIST_ID,
    },
  };

  return (
    <div className='m-2 rounded-md'>
       <h2 className='sm:text-4xl text-3xl font-bold tracking-wide text-white text-opacity-80 uppercase text-center bg-zinc-800 rounded-md  mb-2 p-2'>Featured Playlist</h2>
        <div className="relative w-full mb-8 rounded-md" style={{ paddingTop: '56.25%' }}>
            <div className="absolute top-0 left-0 w-full h-full">
                <YouTube className="w-full h-full rounded-md" opts={opts} />
            </div>
        </div>
    </div>
  );
};

export default Playlist;
