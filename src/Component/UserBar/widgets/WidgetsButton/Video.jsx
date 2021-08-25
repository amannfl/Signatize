import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	getyoutubeLink,
	getyoutubeTitle,
	getyoutubeUrl,
	getyoutubeLinkdesc,
} from "../../../../redux/CounterSlice";
import axios from "axios";
const Video = () => {
	const youtubeUrl = useSelector(state => state.counter.youtubeUrl);
	const youtubeTitledetail = useSelector(state => state.counter.youtubeTitle);

	const dispatch = useDispatch();
	const toggleTab = url => {
		let quality = "high";
		if (url) {
			let video_id, result;
			if ((result = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/))) {
				video_id = result.pop();
			} else if ((result = url.match(/youtu.be\/(.{11})/))) {
				video_id = result.pop();
			}
			if (video_id) {
				if (typeof quality == "undefined") {
					quality = "high";
				}

				let quality_key = "maxresdefault"; // Max quality
				if (quality == "low") {
					quality_key = "sddefault";
				} else if (quality == "medium") {
					quality_key = "mqdefault";
				} else if (quality == "high") {
					quality_key = "hqdefault";
				}

				let thumbnail =
					"http://img.youtube.com/vi/" + video_id + "/" + quality_key + ".jpg";
				dispatch(getyoutubeLink(thumbnail));
				dispatch(getyoutubeUrl(url));
			}
		} else {
			dispatch(getyoutubeLink(""));
			dispatch(getyoutubeUrl(""));
			dispatch(getyoutubeLinkdesc(""));
			dispatch(getyoutubeTitle(""));
		}
	};
	const youtubeTitle = title => {
		dispatch(getyoutubeTitle(title));
	};

	const expendedYoutube = typedata => {
		console.log(youtubeUrl);
		console.log(typedata);
		if (typedata == "expended") {
			if (youtubeUrl) {
				let video_id, thumbnail, result;
				if (
					(result = youtubeUrl.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/))
				) {
					video_id = result.pop();
				} else if ((result = youtubeUrl.match(/youtu.be\/(.{11})/))) {
					video_id = result.pop();
				}
				if (video_id) {
					axios
						.get(
							"https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
								video_id +
								"&key=AIzaSyB3K6aJw3ZahiDNZsDszkEYINOLAW7n9bI"
						)
						.then(response => {
							console.log(response.data.items[0].snippet.description);
							dispatch(
								getyoutubeLinkdesc(response.data.items[0].snippet.description)
							);
						})
						.catch(err => {
							console.log(err);
						});
				}
			}
		} else {
			dispatch(getyoutubeLinkdesc(""));
		}
	};

	return (
		<>
			<section className="grid gap-2 items-center justify-items-start mt-5  ml-4">
				<h1 className="text-2xl font-semibold">YouTube video </h1>
				<h1 className="text-lg font-semibold mt-3">
					Enter your video URL and title{" "}
				</h1>

				<div className="grid mt-2 gap-1">
					<h1>YouTube video / playlist URL:</h1>
					<input
						defaultValue={youtubeUrl || ""}
						class="appearance-none block w-80 bg-gray-100  text-black border  border-gray-200 text-sm
                          rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-last-name"
						type="text"
						placeholder="https://www.youtube.com/watch?v=123"
						onChange={e => toggleTab(e.target.value)}
					/>
				</div>
				<div className=" grid mt-3 gap-1 ">
					<h1>Video / Playlist title:</h1>
					<input
						defaultValue={youtubeTitledetail || ""}
						class="appearance-none block w-80 bg-gray-100  text-black border  border-gray-200 text-sm
                        rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-last-name"
						type="text"
						placeholder="Kitesurfing how to:"
						onChange={e => youtubeTitle(e.target.value)}
					/>
				</div>
				<h1 className="text-2xl font-semibold mt-4 ">Choose video style</h1>
				<section class="grid gap-3 mb-4">
					<ul class="list-none flex gap-4 text-gray-600 items-center">
						<button>
							<li className="flex items-center gap-2">
								<input
									type="radio"
									defaultChecked
									name="videostyle"
									id="contactChoice1"
									onChange={e => expendedYoutube("compact")}
								/>
								Compact
							</li>
						</button>
						<button>
							<li className="flex items-center gap-2">
								<input
									type="radio"
									name="videostyle"
									id="contactChoice2"
									onChange={e => expendedYoutube("expended")}
								/>
								Expended
							</li>
						</button>
					</ul>
				</section>
			</section>
		</>
	);
};

export default Video;
