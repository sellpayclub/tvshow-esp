import React from 'react';

interface VideoPlayerProps {
  id: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ id }) => {
  // Construct the src dynamically as per the provided script logic to work within React
  // src='https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/69931b677a04c8d380dd5df2/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)
  
  const src = `https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/${id}/v4/embed.html${window.location.search || '?'}&vl=${encodeURIComponent(window.location.href)}`;

  return (
    <div id={`ifr_${id}_wrapper`} style={{ margin: '0 auto', width: '100%' }}>
      <div style={{ position: 'relative', padding: '56.25% 0 0 0' }} id={`ifr_${id}_aspect`}>
        <iframe
          frameBorder="0"
          allowFullScreen
          src={src}
          id={`ifr_${id}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          referrerPolicy="origin"
          title="Video Player"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;