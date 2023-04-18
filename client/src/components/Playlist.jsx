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
    <div className='mx-4'>
      <h2 className='text-center text-4xl font-bold tracking-tight text-zinc-200 mb-4'>Featured Playlist</h2>
        <div className="relative w-full overflow-hidden mb-8 rounded-md" style={{ paddingTop: '56.25%' }}>
            <div className="absolute top-0 left-0 w-full h-full">
                <YouTube className="w-full h-full rounded-md" opts={opts} />
            </div>
        </div>
    </div>
  );
};

export default Playlist;
