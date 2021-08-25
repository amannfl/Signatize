import React from "react";
import Slider from "@material-ui/core/Slider";
import social1 from "../widgetsImage/facebook_v1_shape1_b.png";
import social2 from "../widgetsImage/instagram_v1_shape1_b.png";
import social3 from "../widgetsImage/twitter_v1_shape1_b.png";
import social4 from "../widgetsImage/pinterest_v1_shape1_b.png";
import social5 from "../widgetsImage/linkedin_v1_shape1_b.png";
import social6 from "../widgetsImage/youtube_v1_shape1_b.png";
import { useDispatch, useSelector } from "react-redux";
import {
	getFacebookLink,
	gettwitterLink,
	getLinkedInLink,
	getinstagramLink,
	getPinterestLink,
	getYoutubeSocial,
	getSocialSettings,
} from "../../../../redux/CounterSlice";

const Social = () => {
	const dispatch = useDispatch();
	const facebookLink = useSelector(state => state.counter.facebookLink);
	const twitterLink = useSelector(state => state.counter.twitterLink);
	const instagramLink = useSelector(state => state.counter.instagramLink);
	const pinterestLink = useSelector(state => state.counter.pinterestLink);
	const linkedInLink = useSelector(state => state.counter.linkedInLink);
	const youtubeSocial = useSelector(state => state.counter.youtubeSocial);

	const handleSliderChange = (key, value) => {
		dispatch(
			getSocialSettings({
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
					<div className="flex items-center gap-12">
						<img src={social1} alt="" className="bg-cover w-24 h-8" />
						<input
							className="appearance-none block w-48 bg-blue-100  text-black border  border-gray-200 text-sm
                        rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							type="text"
							defaultValue={facebookLink}
							onChange={event => {
								dispatch(getFacebookLink(event.target.value));
							}}
							placeholder="facebook.com/profile"
						/>
					</div>
					<div className="flex items-center gap-12">
						<img src={social2} alt="" className="bg-cover w-24 h-8" />
						<input
							className="appearance-none block w-48 bg-blue-100  text-black border  border-gray-200 text-sm
                        rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							type="text"
							defaultValue={instagramLink}
							onChange={event => {
								dispatch(getinstagramLink(event.target.value));
							}}
							placeholder="instagram.com/userr"
						/>
					</div>
					<div className="flex items-center gap-12">
						<img src={social3} alt="" className="bg-cover w-24 h-8" />
						<input
							className="appearance-none block w-48 bg-blue-100  text-black border  border-gray-200 text-sm
                        rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							type="text"
							defaultValue={twitterLink}
							onChange={event => {
								dispatch(gettwitterLink(event.target.value));
							}}
							placeholder="twitter.com/profile"
						/>
					</div>
					<div className="flex items-center gap-12">
						<img src={social4} alt="" className="bg-cover w-24 h-8" />
						<input
							className="appearance-none block w-48 bg-blue-100  text-black border  border-gray-200 text-sm
                        rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							defaultValue={pinterestLink}
							onChange={event => {
								dispatch(getPinterestLink(event.target.value));
							}}
							type="text"
							placeholder="pinterest.com/user"
						/>
					</div>
					<div className="flex items-center gap-12">
						<img src={social5} alt="" className="bg-cover w-24 h-8" />
						<input
							className="appearance-none block w-48 bg-blue-100  text-black border  border-gray-200 text-sm
                        rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							defaultValue={linkedInLink}
							onChange={event => {
								dispatch(getLinkedInLink(event.target.value));
							}}
							type="text"
							placeholder="linkedin.com/in"
						/>
					</div>
					<div className="flex items-center gap-12 ">
						<img src={social6} alt="" class="bg-cover w-24 h-8" />
						<input
							class="appearance-none block w-48 bg-blue-100  text-black border  border-gray-200 text-sm
                        rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							type="text"
							defaultValue={youtubeSocial}
							onChange={event => {
								dispatch(getYoutubeSocial(event.target.value));
							}}
							placeholder="youtube.com/char"
						/>
					</div>
				</section>
				<article>
					<div className="flex items-center px-8  mt-10">
						<div className="flex-1 text-gray-600 text-lg">Height</div>
						<div className="w-44">
							<Slider
								onChange={(e, value) => handleSliderChange("height", value)}
								color="primary"
								defaulValue={40}
								step={2}
								max={120}
							/>
						</div>
					</div>
					<div className="flex items-center px-8  py-10">
						<div className="flex-1 text-gray-600 text-lg">Padding</div>
						<div className="w-44">
							<Slider
								onChange={(e, value) => handleSliderChange("marginTop", value)}
								color="primary"
								defaulValue={10}
								step={2}
								max={80}
							/>
						</div>
					</div>
				</article>
			</article>
		</>
	);
};

export default Social;
