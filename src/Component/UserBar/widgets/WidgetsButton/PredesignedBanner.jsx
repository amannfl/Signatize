import React from "react";
import banner1 from "../../../../Images/Banners/1.png";
import banner2 from "../../../../Images/Banners/2.png";
import banner3 from "../../../../Images/Banners/3.png";
import banner4 from "../../../../Images/Banners/4.png";
import { useSelector, useDispatch } from "react-redux";
import { getBannerImg } from "../../../../redux/CounterSlice";

const PredesignedBanner = () => {
	const dispatch = useDispatch();
	const { bannerImg } = useSelector(state => state.counter);
	console.log(bannerImg);
	return (
		<>
			<article>
				<hr />
				<div className="grid gap-2 items-center justify-items-start mt-5  ml-4">
					<h1 className="text-2xl font-semibold">PredesignedBanners</h1>
					<h1 className="text-lg font-semibold">Choose your banner</h1>
					<section className="grid gap-3 mt-4 justify-items-center mb-5">
						<img
							src={banner1}
							onClick={event => dispatch(getBannerImg(event.target.src))}
							alt="banner"
							class="bg-cover w-80 h-16"
						/>
						<img
							src={banner2}
							onClick={event => dispatch(getBannerImg(event.target.src))}
							alt="banner"
							class="bg-cover w-80 h-16"
						/>
						<img
							src={banner3}
							onClick={event => dispatch(getBannerImg(event.target.src))}
							alt="banner"
							class="bg-cover w-80 h-16"
						/>
						<img
							src={banner4}
							onClick={event => dispatch(getBannerImg(event.target.src))}
							alt="banner"
							class="bg-cover w-80 h-16"
						/>
					</section>
				</div>
			</article>
		</>
	);
};

export default PredesignedBanner;
