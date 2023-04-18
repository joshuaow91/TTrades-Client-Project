import React from 'react';
import YouTube from 'react-youtube';

const VideoContainer = ({ videoId }) => {
  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-md">
      <div className="absolute top-0 left-0 w-full h-full">
        <YouTube videoId={videoId} opts={opts} className='rounded-md' />
      </div>
    </div>
  );
};

export default VideoContainer;
