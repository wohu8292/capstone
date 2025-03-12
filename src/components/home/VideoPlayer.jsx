import React from "react";

const VideoPlayer = ({ videoUrl, title, onButtonClick, buttonText = "Action" }) => (
  <div className="flex flex-col items-center p-4">
    {title && <h2 className="text-xl font-bold mb-3">{title}</h2>}

    <div className="w-4/5 max-w-md flex flex-col items-center">
      <video className="w-full rounded-lg shadow-lg" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
);

export default VideoPlayer;
