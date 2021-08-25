import React from "react";
import { useState } from "react";
import { ImPencil } from "react-icons/im";
import { FaShareAlt } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs";
import { VscQuote } from "react-icons/vsc";
import { ImYoutube } from "react-icons/im";
import { BsHammer } from "react-icons/bs";
import { MdBrandingWatermark } from "react-icons/md";
import { HiCursorClick } from "react-icons/hi";

import SignOff from "./WidgetsButton/SignOff";
import Social from "./WidgetsButton/Social";
import Video from "./WidgetsButton/Video";
import Quote from "./WidgetsButton/Quote";
import VideoConference from "./WidgetsButton/VideoConference";
import Disclaimer from "./WidgetsButton/Disclaimer";
import CTA from "./WidgetsButton/CTA";
import GreenMessage from "./WidgetsButton/GreenMessage";
import PredesignedBanner from "./WidgetsButton/PredesignedBanner";
import UploadBanner from "./WidgetsButton/UploadBanner";

const Apps = () => {
	const [firstButton, setFirstButton] = useState(false);
	const [secondButton, setSecondButton] = useState(false);
	const [thirdButton, setThirdButton] = useState(false);
	const [fourthButton, setFourthButton] = useState(false);
	const [fifthButton, setFifthButton] = useState(false);
	const [sixthButton, setSixthButton] = useState(false);
	const [SeventhButton, setSeventhButton] = useState(false);
	const [EightButton, setEightButton] = useState(false);
	const [NinthButton, setNinthButton] = useState(false);
	const [TenthButton, setTenthButton] = useState(false);

	const handleFirst = () => {
		setFirstButton(!firstButton);
		setSecondButton(false);
		setThirdButton(false);
		setFourthButton(false);
		setFifthButton(false);
		setSixthButton(false);
		setSeventhButton(false);
		setEightButton(false);
		setNinthButton(false);
		setTenthButton(false);
	};
	const handeleSecond = () => {
		setFirstButton(false);
		setSecondButton(!secondButton);
		setThirdButton(false);
		setFourthButton(false);
		setFifthButton(false);
		setSixthButton(false);
		setSeventhButton(false);
		setEightButton(false);
		setNinthButton(false);
		setTenthButton(false);
	};
	const handleThird = () => {
		setFirstButton(false);
		setSecondButton(false);
		setThirdButton(!thirdButton);
		setFourthButton(false);
		setFifthButton(false);
		setSixthButton(false);
		setSeventhButton(false);
		setEightButton(false);
		setNinthButton(false);
		setTenthButton(false);
	};
	const handleFourht = () => {
		setFirstButton(false);
		setSecondButton(false);
		setThirdButton(false);
		setFourthButton(!fourthButton);
		setFifthButton(false);
		setSixthButton(false);
		setSeventhButton(false);
		setEightButton(false);
		setNinthButton(false);
		setTenthButton(false);
	};
	const handleFifth = () => {
		setFirstButton(false);
		setSecondButton(false);
		setThirdButton(false);
		setFourthButton(false);
		setFifthButton(!fifthButton);
		setSixthButton(false);
		setSeventhButton(false);
		setEightButton(false);
		setNinthButton(false);
		setTenthButton(false);
	};
	const handleSixth = () => {
		setFirstButton(false);
		setSecondButton(false);
		setThirdButton(false);
		setFourthButton(false);
		setFifthButton(false);
		setSixthButton(!sixthButton);
		setSeventhButton(false);
		setEightButton(false);
		setNinthButton(false);
		setTenthButton(false);
	};
	const handleSeventh = () => {
		setFirstButton(false);
		setSecondButton(false);
		setThirdButton(false);
		setFourthButton(false);
		setFifthButton(false);
		setSixthButton(false);
		setSeventhButton(!SeventhButton);
		setEightButton(false);
		setNinthButton(false);
		setTenthButton(false);
	};
	const handleEight = () => {
		setFirstButton(false);
		setSecondButton(false);
		setThirdButton(false);
		setFourthButton(false);
		setFifthButton(false);
		setSixthButton(false);
		setSeventhButton(false);
		setEightButton(!EightButton);
		setNinthButton(false);
		setTenthButton(false);
	};
	const handleNinth = () => {
		setFirstButton(false);
		setSecondButton(false);
		setThirdButton(false);
		setFourthButton(false);
		setFifthButton(false);
		setSixthButton(false);
		setSeventhButton(false);
		setEightButton(false);
		setNinthButton(!NinthButton);
		setTenthButton(false);
	};
	const handleTenth = () => {
		setFirstButton(false);
		setSecondButton(false);
		setThirdButton(false);
		setFourthButton(false);
		setFifthButton(false);
		setSixthButton(false);
		setSeventhButton(false);
		setEightButton(false);
		setNinthButton(false);
		setTenthButton(!TenthButton);
	};

	return (
		<>
			<main className=" overflow-y-auto" style={{ height: "599px" }}>
				<h1 className="mt-6 text-gray-700 uppercase ml-4 font-semibold">
					Widgets
				</h1>
				<div>
					{/* FIRST BUTTON */}
					<section className="h-full w-96 mx-auto mt-6">
						<div className=" w-full h-full bg-white shadow  rounded-3xl ">
							<button
								className="flex items-center gap-3 w-full text-gray-500 hover:text-blue-400 py-3 px-6 rounded-full "
								onClick={handleFirst}
							>
								<ImPencil />

								<p className="text-md font-semibold">Sign off</p>
							</button>
							{firstButton ? (
								<div>
									<SignOff />
								</div>
							) : (
								""
							)}
						</div>
					</section>

					{/* SECOND BUTTON */}
					<section className="h-full w-96 mx-auto mt-8 ">
						<div className=" w-full h-full bg-white shadow  rounded-3xl ">
							<button
								className="flex items-center gap-3 w-full text-gray-500 hover:text-blue-400 py-3 px-6 rounded-full "
								onClick={handeleSecond}
							>
								<FaShareAlt />

								<p className=" text-md font-semibold ">Social Buttons</p>
							</button>
							{secondButton ? (
								<div>
									<Social />
								</div>
							) : (
								""
							)}
						</div>
					</section>
					{/* THIRD BUTTON */}
					<section className="h-full w-96 mx-auto mt-10">
						<div className=" w-full h-full bg-white shadow  rounded-3xl ">
							<button
								className="flex items-center gap-3 w-full text-gray-500 hover:text-blue-400 py-3 px-6 rounded-full "
								onClick={handleThird}
							>
								<VscQuote />

								<p className=" text-md font-semibold ">Quote</p>
							</button>
							{/*  TOGGLE */}

							{thirdButton ? (
								<div>
									<Quote />
								</div>
							) : (
								""
							)}
						</div>
					</section>

					{/* FOURTH BUTTON */}
					<section className="h-full w-96 mx-auto mt-8 mb-10">
						<div className=" w-full h-full bg-white shadow  rounded-3xl ">
							<button
								className="flex items-center gap-3 w-full text-gray-500 hover:text-blue-400 py-3 px-6 rounded-full "
								onClick={handleFourht}
							>
								<ImYoutube />
								<p className=" text-md font-semibold ">Video</p>
							</button>

							{fourthButton ? (
								<article>
									<hr />
									<div>
										<Video />
									</div>
								</article>
							) : (
								""
							)}
						</div>
					</section>

					{/* FIFTH BUTTON */}
					<section className="h-full w-96 mx-auto mt-8 ">
						<div className=" w-full h-full bg-white shadow  rounded-3xl ">
							<button
								className="flex items-center gap-3 w-full text-gray-500 hover:text-blue-400 py-3 px-6 rounded-full "
								onClick={handleFifth}
							>
								<BsCameraVideoFill />

								<p className=" text-md font-semibold ">Video conference</p>
							</button>
							{/*  TOGGLE */}
							{fifthButton ? (
								<div>
									<VideoConference />
								</div>
							) : (
								""
							)}
						</div>
					</section>

					{/* SIXTH BUTTON */}
					<section className="h-full w-96 mx-auto mt-8">
						<div className=" w-full h-full bg-white shadow  rounded-3xl ">
							<button
								className="flex items-center gap-3 w-full text-gray-500 hover:text-blue-400 py-3 px-6 rounded-full "
								onClick={handleSixth}
							>
								<BsHammer />
								<p className=" text-md font-semibold ">Disclaimer</p>
							</button>

							{sixthButton ? (
								<div>
									<Disclaimer />
								</div>
							) : (
								""
							)}
						</div>
					</section>

					{/* SEVENTH BUTTON */}
					<section className="h-full w-96 mx-auto mt-8 mb-8">
						<div className=" w-full h-full bg-white shadow  rounded-3xl ">
							<button
								className="flex items-center gap-3 w-full text-gray-500 hover:text-blue-400 py-3 px-6 rounded-full "
								onClick={handleSeventh}
							>
								<HiCursorClick />
								<p className=" text-md font-semibold ">Green Message</p>
							</button>

							{SeventhButton ? (
								<div>
									<GreenMessage />
								</div>
							) : (
								""
							)}
						</div>
					</section>
					{/* Eight BUTTON */}
					<section className="h-full w-96 mx-auto mt-8 mb-8">
						<div className=" w-full h-full bg-white shadow  rounded-3xl ">
							<button
								className="flex items-center gap-3 w-full text-gray-500 hover:text-blue-400 py-3 px-6 rounded-full "
								onClick={handleEight}
							>
								<MdBrandingWatermark />
								<p className=" text-md font-semibold ">Predesigned Banners</p>
							</button>

							{EightButton ? (
								<div>
									<PredesignedBanner />
								</div>
							) : (
								""
							)}
						</div>
					</section>
					{/* NINTH BUTTON */}
					<section className="h-full w-96 mx-auto mt-8 mb-8">
						<div className=" w-full h-full bg-white shadow  rounded-3xl ">
							<button
								className="flex items-center gap-3 w-full text-gray-500 hover:text-blue-400 py-3 px-6 rounded-full "
								onClick={handleNinth}
							>
								<MdBrandingWatermark />
								<p className=" text-md font-semibold ">Upload my Banners</p>
							</button>

							{NinthButton ? (
								<div>
									<UploadBanner />
								</div>
							) : (
								""
							)}
						</div>
					</section>
					{/* TENTH BUTTON */}
					<section className="h-full w-96 mx-auto mt-8 mb-8">
						<div className=" w-full h-full bg-white shadow  rounded-3xl ">
							<button
								className="flex items-center gap-3 w-full text-gray-500 hover:text-blue-400 py-3 px-6 rounded-full"
								onClick={handleTenth}
							>
								<BsCameraVideoFill />

								<p className=" text-md font-semibold ">CTA</p>
							</button>
							{TenthButton ? (
								<div>
									<CTA />
								</div>
							) : (
								""
							)}
						</div>
					</section>
				</div>
			</main>
		</>
	);
};

export default Apps;
