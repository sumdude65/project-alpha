import React from 'react';

/**This component allows us to embed videos from supported platforms in our posts */

const EmbedVideo = ({ platform, videoUrl }) => {
  const renderEmbedCode = () => {
    switch (platform) {
      case 'facebook':
        const fbVideoId = videoUrl.split('/').pop().split('?')[0];
        return (
          <iframe
            src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=0&width=560`}
            width="560"
            height="315"
            style={{ border: 'none', overflow: 'hidden' }}
            allowtransparency="true"
            allow="encrypted-media"
            allowFullScreen={true}
          ></iframe>
        );
      case 'tiktok':
        return (
          <blockquote className="tiktok-embed" cite={videoUrl} data-video-id={videoUrl.split('/').pop()} style={{ maxWidth: '605px', minWidth: '325px' }}>
            <iframe src={videoUrl} style={{ width: '100%', height: '600px', display: 'block', maxWidth: '100%' }}></iframe>
          </blockquote>
        );
      case 'instagram':
        return (
          <blockquote className="instagram-media" data-instgrm-permalink={videoUrl} data-instgrm-version="13">
            <iframe src={`${videoUrl}embed`} style={{ width: '100%', height: '600px', display: 'block', maxWidth: '100%' }}></iframe>
          </blockquote>
        );
      default:
        return <p>Unsupported platform</p>;
    }
  };

  return (
    <>
      {renderEmbedCode()}
    </>
  );
};

export default EmbedVideo;
