"use client"

/**Allows the user share the current post to any supported platform, appears at the top of each post */

import { usePathname } from 'next/navigation';
import {
    FacebookShareButton,
    FacebookIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    XIcon,
    RedditShareButton,
    RedditIcon
} from 'react-share';

const ShareButtons = ({ title, path }) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${path}`
    return (
        <div >
            <h5 className=''>Share with Friends:</h5>
            <div className="flex gap-2">
                <FacebookShareButton url={url} quote={title} hashtag="#yourHashtag" className='hover:scale-110 transition-transform'>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <FacebookMessengerShareButton appId={"1182454912911040"} className='hover:scale-110 transition-transform'>
                    <FacebookMessengerIcon size={32} round={true} />
                </FacebookMessengerShareButton>
                <WhatsappShareButton url={url} title={title} separator=":: " className='hover:scale-110 transition-transform'>
                    <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
                <LinkedinShareButton url={url} title={title} summary="Check this out!" className='hover:scale-110 transition-transform'>
                    <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <TwitterShareButton url={url} title={title} hashtags={["yourHashtag"]} className='hover:scale-110 transition-transform'>
                    <XIcon size={32} round={true} />
                </TwitterShareButton>
                <RedditShareButton url={url} title={title} className='hover:scale-110 transition-transform'>
                    <RedditIcon size={32} round={true} />
                </RedditShareButton>
            </div>
        </div>
    );
};

export default ShareButtons;
