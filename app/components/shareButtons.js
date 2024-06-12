"use client"


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

const ShareButtons = ({ title }) => {
    const url = usePathname()
    return (
        <div >
            <h5 className=''>Share with Friends:</h5>
            <div className="flex gap-2">
                <FacebookShareButton url={url} quote={title} hashtag="#yourHashtag">
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <FacebookMessengerShareButton appId={"1182454912911040"}>
                    <FacebookMessengerIcon size={32} round={true} />
                </FacebookMessengerShareButton>
                <WhatsappShareButton url={url} title={title} separator=":: ">
                    <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
                <LinkedinShareButton url={url} title={title} summary="Check this out!">
                    <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <TwitterShareButton url={url} title={title} hashtags={["yourHashtag"]}>
                    <XIcon size={32} round={true} />
                </TwitterShareButton>
                <RedditShareButton url={url} title={title}>
                    <RedditIcon size={32} round={true} />
                </RedditShareButton>
            </div>
        </div>
    );
};

export default ShareButtons;
