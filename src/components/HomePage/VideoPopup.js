import React from "react";

const VideoPopup = () => {
  return (
    <div className="ltn__video-popup-area ltn__video-popup-margin---">
      <div className="ltn__video-bg-img ltn__video-popup-height-600--- bg-overlay-black-30 bg-image bg-fixed ltn__animation-pulse1">
        <a
          className="ltn__video-icon-2 ltn__video-icon-2-border---"
          href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0"
          data-rel="lightcase:myCollection"
        >
          <i className="fa fa-play"></i>
        </a>
      </div>
    </div>
  );
};

export default VideoPopup;
