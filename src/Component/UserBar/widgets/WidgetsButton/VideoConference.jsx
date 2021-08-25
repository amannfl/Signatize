import React from "react";
import Slider from "@material-ui/core/Slider";
import { FaVideo } from "react-icons/fa";
import { ImSkype } from "react-icons/im";
import { SiGooglehangouts } from "react-icons/si";
import { SiGooglehangoutsmeet } from "react-icons/si";
import { GiBeveledStar } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { getVideoConference } from "../../../../redux/CounterSlice";
const VideoConference = () => {
  const dispatch = useDispatch();

  const handleVideoConferenceIconChange = Icon => {
    dispatch(
      getVideoConference({
        key: "VideoIcon",
        value: Icon,
      })
    );
  };
  const handleVideoConferenceInfoChange = e => {
    dispatch(
      getVideoConference({
        key: e.target.name,
        value: e.target.value,
      })
    );
  };

  const hadleSliderChange = (key, value) => {
    dispatch(
      getVideoConference({
        key,
        value: value,
      })
    );
  };

  return (
    <>
      <article>
        <hr />
        <section className="grid gap-4 items-center justify-items-center mt-7 ">
          <div className="flex items-center gap-4">
            <button
              class=" flex items-center gap-3 w-40 bg-white  text-gray-600 text-md border  border-gray-200 text-sm
						rounded-full py-2 px-3"
              onClick={() => handleVideoConferenceIconChange(FaVideo)}
            >
              <FaVideo fontSize="18" />
              Zoom
            </button>
            <button
              class=" flex items-center gap-3 w-40 bg-white  text-gray-600 text-md border  border-gray-200 text-sm
						rounded-full py-2 px-3"
              onClick={() => handleVideoConferenceIconChange(ImSkype)}
            >
              <ImSkype fontSize="18" />
              Skype
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              class=" flex items-center gap-3 w-40 bg-white  text-gray-600 text-md border  border-gray-200 text-sm
						rounded-full py-2 px-3"
              onClick={() =>
                handleVideoConferenceIconChange(SiGooglehangoutsmeet)
              }
            >
              <SiGooglehangoutsmeet fontSize="18" />
              Google Meet
            </button>
            <button
              class=" flex items-center gap-3 w-40 bg-white  text-gray-600 text-md border  border-gray-200 text-sm
						rounded-full py-2 px-3"
              onClick={() => handleVideoConferenceIconChange(GiBeveledStar)}
            >
              <GiBeveledStar fontSize="18" />
              GoTOMeeting
            </button>
          </div>
        </section>
        <article>
          <section className="grid gap-8 mt-8 justify-items-center">
            <div className="flex items-center gap-12 ">
              <h1>Button text</h1>
              <input
                class="appearance-none block w-48 bg-gray-100  text-black border  border-gray-200 text-sm
                        rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Meet me on GoToMeeting"
                onChange={handleVideoConferenceInfoChange}
                name="videoText"
              />
            </div>
            <div className="flex items-center gap-12 ">
              <h1>Button URL</h1>
              <input
                class="appearance-none block w-48 bg-gray-100  text-black border  border-gray-200 text-sm
                        rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="https://www.gotomeeting.com"
                onChange={handleVideoConferenceInfoChange}
                name="videoUrl"
              />
            </div>
          </section>
          <div className="flex items-center px-8  mt-10">
            <div className="flex-1 text-gray-600 text-lg">Shape</div>
            <div className="w-44">
              <Slider
                color="primary"
                defaulValue={1}
                step={3}
                max={100}
                onChange={(e, value) => hadleSliderChange("shape", value)}
              />
            </div>
          </div>
          <div className="flex items-center px-8  mt-10">
            <div className="flex-1 text-gray-600 text-lg">Height</div>
            <div className="w-44">
              <Slider
                onChange={(e, value) => hadleSliderChange("height", value)}
                color="primary"
                defaulValue={1}
                step={3}
                max={100}
                title="test"
              />
            </div>
          </div>
          <div className="flex items-center px-8  py-10">
            <div className="flex-1 text-gray-600 text-lg">Margin top</div>
            <div className="w-44">
              <Slider
                color="primary"
                defaulValue={1}
                step={3}
                max={100}
                onChange={(e, value) => hadleSliderChange("marginTop", value)}
              />
            </div>
          </div>
        </article>
      </article>
    </>
  );
};

export default VideoConference;
