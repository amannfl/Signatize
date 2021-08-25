import React from "react";
import ProfileImage from "../../../image/default-sig-photo.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { buttonType, buttonSize } from "../../../../Utils/Constant";
import "./DesignFonts.css";
import fb from "../../../../Images/Button Images/fb-button.png";
import ig from "../../../../Images/Button Images/ig-button.png";
import twitter from "../../../../Images/Button Images/twitter-button.png";
import pinterest from "../../../../Images/Button Images/pinterest-button.png";
import linkedin from "../../../../Images/Button Images/linkedin-button.png";
import yt from "../../../../Images/Button Images/yt-button.png";

const { full, light, link } = buttonType;
const { small, medium, large } = buttonSize;

const TemplateA = () => {
	const {
		counter,
		name,
		company,
		position,
		email,
		phonenumber,
		website,
		address,
		facebookLink,
		instagramLink,
		twitterLink,
		pinterestLink,
		linkedInLink,
		youtubeSocial,
		colors,
		FontsizeChange,
		spacings,
		youtubeLink,
		youtubeLinkdesc,
		youtubeTitle,
		youtubeUrl,
		quoteTitle,
		signOffImage,
		CompactMargins,
		disclaimer,
		ctaButton,
		greenMessage,
		greenMessageImage,
		videoConferenceInfo,
		bannerImg,
		socialSettings,
	} = useSelector(state => state.counter);

	const { color, text, url, type, size } = ctaButton;
	const { videoUrl, VideoIcon, videoText, shape, height, marginTop } =
		videoConferenceInfo;

	const getButtonHeigth = () => {
		if (height === 0) return {};
		else return { height: height };
	};
	const getButtonShape = () => {
		if (shape === 0) return {};
		else return { fontSize: shape };
	};
	const getButtonMarginTop = () => {
		if (marginTop === 0) return {};
		else return { marginTop: marginTop };
	};
	// get the button size
	const getButtonSize = () => {
		if (size === small) return "text-xs";
		else if (size === medium) return "text-sm";
		else if (size === large) return "text-base";
	};
	// this function to get button type
	const getButtontype = () => {
		if (type === full) {
			return `${color} hover:bg-blue-700  text-white font-bold  ${getButtonSize()} py-2 px-4 m-3 rounded`;
		} else if (type === light) {
			return `{bg-transparent ${color.replace(
				"bg",
				"text"
			)} font-semibold  ${getButtonSize()} py-2 px-4 m-3 border  ${color.replace(
				"bg",
				"border"
			)}  rounded}`;
		} else if (type === link) {
			return `{bg-transparent  ${color.replace(
				"bg",
				"text"
			)} font-semibold ${getButtonSize()} py-2 px-4 m-3 rounded}`;
		}
	};

	const videoButtonShape = getButtonShape();
	const videoButtonHeigth = getButtonHeigth();
	const videoMarginTop = getButtonMarginTop();
	const videoButtonstyles = {
		...videoButtonShape,
		...videoButtonHeigth,
		...videoMarginTop,
	};

	return (
		<div>
			<section
				style={{ background: "#fff" }}
				className=" shadow-2xl rounded-md w-full"
			>
				<div class=" h-10 bg-gray-300  flex rounded-t pt-2 px-4">
					<span>JASON ERICKSON</span>
				</div>
				<div class=" bg-white pt-2 px-4">
					<Link href="#">
						<img alt="" src={signOffImage.image} class="w-1/4 py-3" />
					</Link>
				</div>
				<div class="flex px-4 bg-white py-9">
					<div class="">
						<Link href="#">
							<img alt="" src={ProfileImage} class="w-50 px-1" />
						</Link>
					</div>
					<div class=" w-full ">
						<div class="px-4 float-left md:px-2">
							<h4 class="font-bold text-blue-700 text-lg leading-none">
								<h1
									style={{
										fontSize: `${counter}px`,
										color: colors,
										fontFamily: FontsizeChange,
										padding: `${CompactMargins}`,
									}}
								>
									{name}
								</h1>
							</h4>
							<span class="font-bold text-gray-500 text-xs float-left mt-1 pb-2">
								<h1
									style={{
										fontSize: `${counter}px`,
										color: colors,
										fontFamily: FontsizeChange,
										padding: `${CompactMargins}px`,
									}}
								>
									{position}
								</h1>

								<br class="font-bold" />
								<h1
									style={{
										fontSize: `${counter}px`,
										color: colors,
										fontFamily: FontsizeChange,
										padding: `${CompactMargins}px`,
									}}
								>
									{company}
								</h1>
							</span>
						</div>
						<div class="ml-20 float-left md:ml-2">
							<ul class="text-sm mt-1 float-left">
								<span class="float-left text-gray-600 font-bold mt-1 mr-2">
									<img
										alt=""
										src="https://cdn.gifo.wisestamp.com/social/rich-field-phone-3/45668E/13/trans.png"
										style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
									/>
								</span>
								<li class="px-3">
									<a href={`tel:${phonenumber}`}>
										<h1
											style={{
												fontSize: `${counter}px`,
												color: colors,
												fontFamily: FontsizeChange,
												padding: `${CompactMargins}px`,
											}}
										>
											{phonenumber}
										</h1>
									</a>
								</li>

								<span class="float-left text-gray-600 font-bold mt-1 mr-2">
									<img
										alt=""
										src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
										style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
									/>
								</span>
								<li class=" px-3">
									<Link href="#">
										<h1
											style={{
												fontSize: `${counter}px`,
												color: colors,
												fontFamily: FontsizeChange,
											}}
										>
											{website}
										</h1>
									</Link>
								</li>

								<span class="float-left text-gray-600 font-bold mt-1 mr-2">
									<img
										alt=""
										src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
										style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
									/>
								</span>
								<li class=" px-3">
									<Link href="#">
										<h1
											style={{
												fontSize: `${counter}px`,
												color: colors,
												fontFamily: FontsizeChange,
											}}
										>
											{email}
										</h1>
									</Link>
								</li>

								<li class="">
									<Link href="#">
										<span class="float-left text-gray-600 font-bold mt-1 mr-2">
											<img
												alt=""
												src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
												style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
											/>
										</span>
										<h1
											style={{
												fontSize: `${counter}px`,
												color: colors,
												fontFamily: FontsizeChange,
											}}
										>
											{address}
										</h1>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="float-left mt-2 video-thumbnail" style={{ color: "black" }}>
					<img alt="" src={youtubeLink} class="video-thumbnail" />
					{youtubeTitle}
				</div>
				<div class="float-left video-desc" style={{ color: "black" }}>
					{youtubeLinkdesc ? youtubeLinkdesc.substr(0, 300) + "..." : ""}
					{youtubeLinkdesc ? (
						<a rel="noreferrer" href={youtubeUrl} target="_blank">
							<img
								alt="yt-icon"
								src="https://s3.amazonaws.com/images.wisestamp.com/icons/youtube-new.png"
							/>
						</a>
					) : null}
				</div>
				<div style={{ margin: 20, display: "flex", flexWrap: "wrap" }}>
					{facebookLink === "" ? null : (
						<a
							style={{ margin: "0 10px" }}
							href={
								facebookLink.slice(0, 8) === "https://" ||
								facebookLink.slice(0, 7) === "http://"
									? facebookLink
									: `https://${facebookLink}`
							}
						>
							<img src={fb} style={socialSettings} alt="" />
						</a>
					)}
					{instagramLink === "" ? null : (
						<a
							style={{ margin: "0 10px" }}
							href={
								instagramLink.slice(0, 8) === "https://" ||
								instagramLink.slice(0, 7) === "http://"
									? instagramLink
									: `https://${instagramLink}`
							}
						>
							<img src={ig} style={socialSettings} alt="" />
						</a>
					)}
					{twitterLink === "" ? null : (
						<a
							style={{ margin: "0 10px" }}
							href={
								twitterLink.slice(0, 8) === "https://" ||
								twitterLink.slice(0, 7) === "http://"
									? twitterLink
									: `https://${twitterLink}`
							}
						>
							<img src={twitter} style={socialSettings} alt="" />
						</a>
					)}
					{pinterestLink === "" ? null : (
						<a
							style={{ margin: "0 10px" }}
							href={
								pinterestLink.slice(0, 8) === "https://" ||
								pinterestLink.slice(0, 7) === "http://"
									? pinterestLink
									: `https://${pinterestLink}`
							}
						>
							<img src={pinterest} style={socialSettings} alt="" />
						</a>
					)}
					{linkedInLink === "" ? null : (
						<a
							style={{ margin: "0 10px" }}
							href={
								linkedInLink.slice(0, 8) === "https://" ||
								linkedInLink.slice(0, 7) === "http://"
									? linkedInLink
									: `https://${linkedInLink}`
							}
						>
							<img src={linkedin} style={socialSettings} alt="" />
						</a>
					)}
					{youtubeSocial === "" ? null : (
						<a
							style={{ margin: "0 10px" }}
							href={
								youtubeSocial.slice(0, 8) === "https://" ||
								youtubeSocial.slice(0, 7) === "http://"
									? youtubeSocial
									: `https://${youtubeSocial}`
							}
						>
							<img src={yt} style={socialSettings} alt="" />
						</a>
					)}
				</div>
				<div style={{ margin: 20 }} id="quote">
					{quoteTitle}
				</div>
				<div className="text-xs m-3">{disclaimer}</div>
				{videoText && (
					<a rel="noreferrer" href={videoUrl} target="_blank">
						<button
							style={videoButtonstyles}
							className={`ml-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}
						>
							<VideoIcon />
							<span className="ml-1.5">{videoText}</span>
						</button>
					</a>
				)}
				{text ? (
					<a href={url} rel="noreferrer" target="_blank">
						<button className={getButtontype()}>{text}</button>
					</a>
				) : null}
				<div className="text-xs m-3 flex " style={{ color: "#008000" }}>
					{greenMessage && (
						<img className="mr-3 ml-3" src={greenMessageImage} alt="" />
					)}
					<div>{greenMessage}</div>
				</div>
				<div>
					<img src={bannerImg} alt="" srcset="" />
				</div>
			</section>
		</div>
	);
};

export default TemplateA;
