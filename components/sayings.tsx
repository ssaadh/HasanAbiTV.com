import React from 'react';

// see what data comes from YT for playlist
// see what data comes from YT for video OR am i only doing playlist and not directly hitting the video?
// what interval to check the playlists?

// code to grab YT playlist data and enter into directus
// code to grab YT video data and enter into directus
// code logic for updating playlist
// code logic for updating video

// filters/sorting
// look up packages or libraries for doing filters/searching -- seems like there aren't any. ecosystem is weak.
// how many items get shown? for playlists the data being sent can handle all of them right? so it's all client side after the first load?
// make more perma urls for hastok and YT playlists


// props
interface SayingsProps {
  sayings: string[];
};

const Sayings: React.FC<SayingsProps> = ({ sayings }) => {2
  return (
    <div className="relative w-full">
      <div className="w-full aspect-[680/130] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-10" 
          style={{ backgroundImage: "url('/images/top-thin-rect.jpg')" }}
        ></div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 z-30">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-purple-500 tracking-wide py-2">
        </h1>
      </div>
    </div>
  );
};

export default Sayings;
