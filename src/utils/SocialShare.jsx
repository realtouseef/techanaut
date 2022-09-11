import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const SocialShare = ({ shareUrl, mediaUrl }) => {
  const size = 40;
  return (
    <main className="main_social_share">
      <div className="social_share">
        <span>Share on:</span>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={size} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={size} round />
        </TwitterShareButton>
        <EmailShareButton url={shareUrl}>
          <EmailIcon size={size} round />
        </EmailShareButton>
        <PinterestShareButton url={shareUrl} media={mediaUrl}>
          <PinterestIcon size={size} round />
        </PinterestShareButton>
        <RedditShareButton url={shareUrl}>
          <RedditIcon size={size} round />
        </RedditShareButton>
        <TumblrShareButton url={shareUrl}>
          <TumblrIcon size={size} round />
        </TumblrShareButton>
        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon size={size} round />
        </WhatsappShareButton>
        <TelegramShareButton url={shareUrl}>
          <TelegramIcon size={size} round />
        </TelegramShareButton>
      </div>
    </main>
  );
};

export default SocialShare;
