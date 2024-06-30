"use client"

/**This component allows us to embed post/videos from supported platforms in our posts */
import { FacebookEmbed, TikTokEmbed, InstagramEmbed, XEmbed } from 'react-social-media-embed';

const EmbedPost = ({ platform, postUrl }) => {

  const renderEmbedCode = () => {
    switch (platform) {
      case 'facebook':
        return (<div className='w-full max-w-lg mx-auto my-4'>
          <FacebookEmbed url={postUrl} width={550} />
          </div>
        );
      case 'tiktok':
        return (<div className='w-full max-w-lg mx-auto my-4'>
          <TikTokEmbed url={postUrl} width={325} />
          </div>
        );
      case 'instagram':
        return (<div className='w-full max-w-lg mx-auto my-4'>
          <InstagramEmbed url={postUrl} width={325} />
          </div>
        );
      case 'twitter':
        return (<div className='w-full max-w-lg mx-auto my-4'>
          <XEmbed url={postUrl} width={325} />
        </div>
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


export default EmbedPost;
