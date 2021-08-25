import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
// import FiYoutube from 'react-icons/fi'
import { useDispatch, useSelector } from "react-redux";
import {
	getFacebookLink,
	getinstagramLink,
	gettwitterLink,
	getyoutubeLink,
	gettwitterLinkA,
	gettwitterLinkB,
	gettwitterLinkC,
} from "../../../redux/CounterSlice";
import SocialLogo from "./SocialLogo";

const SocialMenu = () => {
	const dispatch = useDispatch();
	return (
		<>
			<article className="  overflow-y-auto" style={{ height: "599px" }}>
				<div className="flex px-5">
					<h1 className="font-bold flex-1"> SOCIAL PROFILES</h1>
				</div>

				{/* All INDPUTS  */}
				<div className="ml-4 ">
					<ul className="grid  ">
						<div className="inline-flex gap-3 items-center ">
							<div className="w-8 mt-5">
								<img
									src="https://cdn.gifo.wisestamp.com/social/facebook/3b5998/64/16.png"
									className="rounded-full "
								/>
							</div>

							<div>
								<TextField
									id="standard-basic"
									label="facebookLink"
									style={{ width: "330px" }}
									inputProps={{
										maxlength: 18,
									}}
									onChange={e => dispatch(getFacebookLink(e.target.value))}
								/>
							</div>
						</div>
						{/* SECOND INPUT */}
						<div className="inline-flex gap-3 items-center ">
							<div className="w-8 mt-5">
								<img
									src="https://cdn.gifo.wisestamp.com/social/stackoverflow/fe7a15/64/16.png"
									className="rounded-full "
								/>
							</div>

							<div>
								<TextField
									id="standard-basic"
									label="instagramLink"
									style={{ width: "330px" }}
									inputProps={{
										maxlength: 18,
									}}
									onChange={e => dispatch(getinstagramLink(e.target.value))}
								/>
							</div>
						</div>
						{/* THIRD INPUT */}
						<div className="inline-flex gap-3 items-center ">
							<div className="w-8 mt-5">
								<img
									src="https://cdn.gifo.wisestamp.com/social/instagram/E4405F/64/16.png"
									className="rounded-full "
								/>
							</div>

							<div>
								<TextField
									id="standard-basic"
									label="youtubeLinkA"
									style={{ width: "330px" }}
									inputProps={{
										maxlength: 18,
									}}
									onChange={e => dispatch(gettwitterLink(e.target.value))}
								/>
							</div>
						</div>
						{/* FORTH INPUT */}
						<div className="inline-flex gap-3 items-center ">
							<div className="w-8 mt-5">
								<img
									src="https://cdn.gifo.wisestamp.com/social/google/ea4335/64/16.png"
									className="rounded-full "
								/>
							</div>

							<div>
								<TextField
									id="standard-basic"
									label="youtubeLink"
									style={{ width: "330px" }}
									inputProps={{
										maxlength: 18,
									}}
									onChange={e => dispatch(getyoutubeLink(e.target.value))}
								/>
							</div>
						</div>
						{/* FIFTH INPUT */}
						<div className="inline-flex gap-3 items-center ">
							<div className="w-8 mt-5">
								<img
									src="https://cdn.gifo.wisestamp.com/social/twitter/55acee/64/16.png"
									className="rounded-full "
								/>
							</div>

							<div>
								<TextField
									id="standard-basic"
									label="twitter.com"
									style={{ width: "330px" }}
									inputProps={{
										maxlength: 18,
									}}
									onChange={e => dispatch(gettwitterLinkA(e.target.value))}
								/>
							</div>
						</div>
						{/* SIXTH INPUT */}
						<div className="inline-flex gap-3 items-center ">
							<div className="w-8 mt-5">
								<img
									src="https://cdn.gifo.wisestamp.com/social/youtube/cd201f/64/16.png"
									className="rounded-full "
								/>
							</div>

							<div>
								<TextField
									id="standard-basic"
									label="twitter"
									style={{ width: "330px" }}
									inputProps={{
										maxlength: 18,
									}}
									onChange={e => dispatch(gettwitterLinkB(e.target.value))}
								/>
							</div>
						</div>
						{/* SEVENTH INPUT */}
						<div className="inline-flex gap-3 items-center ">
							<div className="w-8 mt-5">
								<img
									src="https://cdn.gifo.wisestamp.com/social/upwork/6fda44/64/16.png"
									className="rounded-full "
								/>
							</div>

							<div>
								<TextField
									id="standard-basic"
									label="twitter.com"
									style={{ width: "330px" }}
									inputProps={{
										maxlength: 18,
									}}
									onChange={e => dispatch(gettwitterLinkC(e.target.value))}
								/>
							</div>
						</div>
					</ul>
				</div>

				{/* BUTTON TO CONTROL TO SHOW AND HIDE LOGOS */}
				<div class="">
					<SocialLogo />
				</div>

				<button className="font-bold py-2 px-8 rounded inline-flex gap-3 text-black hover:text-white bg-tabs hover:bg-blue-400 ml-16 border-2 border-dotted border-yellow mt-6 mb-6">
					{/* <FiYoutube fontSize="30"/> */}
					<span className="text-lg">Upload your own icon</span>
				</button>
			</article>
		</>
	);
};

export default SocialMenu;
