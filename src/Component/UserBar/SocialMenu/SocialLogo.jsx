import React from "react";
import { useState } from "react";

const SocialLogo = () => {
  const [show, setshow] = useState(false);
  const [plus, setPlus] = useState(false);

  const handleButton = () => {
    setshow(!show);
    setPlus(!plus);
  };
  return (
    <>
      <main>
        <button onClick={handleButton} className="text-blue-600 ml-5 mt-4 ">
          {plus ? <span>+ Show less</span> : <span>+ Show more</span>}
        </button>

        <section class="mt-6 ml-1 ">
          {plus ? (
            <div className="grid gap-2">
              <div className="flex  items-center gap-2  ">
                <img
                  src="https://cdn.gifo.wisestamp.com/social/facebook/3b5998/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/linkedin/0077b5/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/twitter/55acee/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/500px/0099e5/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/meetup/e0393e/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/angelList/000000/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/yelp/af0606/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/vkontakte/45668e/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/googlemaps/34a853/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/ello/000000/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
              </div>

              <div className="flex  items-center gap-2  ">
                <img
                  src="https://cdn.gifo.wisestamp.com/social/googleplay/fbbc05/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/stackoverflow/fe7a15/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/behance/1769ff/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/instagram/E4405F/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/upwork/6fda44/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/ebay/e53238/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/etsy/d5641c/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/pinterest/bd081c/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/youtube/cd201f/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/appstore/0269e2/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
              </div>

              <div className="flex  items-center gap-2  ">
                <img
                  src="https://cdn.gifo.wisestamp.com/social/blogger/f57d00/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/medium/e0393e/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/soundcloud/ff8800/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/aboutme/00405d/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/flickr/ff0084/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/google/ea4335/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/deviantart/05cc47/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/googleplus/dc4e41/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/reddit/ff4500/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/trulia/5eab1f/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
              </div>

              <div className="flex  items-center gap-2  ">
                <img
                  src="https://cdn.gifo.wisestamp.com/social/amazon/ff9900/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/medium/e0393e/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/tiktok/EE1D52/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/googledrive/4285f4/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/tumblr/35465c/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/tumblr/35465c/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/slideshare/0077b5/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/wordpress/21759b/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/blogRSS/f26522/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/zillow/1277e1/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
              </div>

              <div className="flex  items-center gap-2  ">
                <img
                  src="https://cdn.gifo.wisestamp.com/social/facebookpage/3b5998/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/klout/e44803/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/imdb/e3ac3c/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/snapchat/fffc00/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/github/4183c4/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/foursquare/f94877/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/vimeo/1ab7ea/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
                <img
                  src="https://cdn.gifo.wisestamp.com/social/picasa/9864ae/64/16.png"
                  alt=""
                  class="w-9 h-9 rounded-full transition duration-200 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
                />
              </div>
            </div>
          ) : null}
        </section>
      </main>
    </>
  );
};

export default SocialLogo;
