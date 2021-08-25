import { createSlice } from "@reduxjs/toolkit";
import TemplateA from "../Component/MainComponent/CreateSignature/AllTemplates/TemplateA";
import TemplateB from "../Component/MainComponent/CreateSignature/AllTemplates/TemplateB";
import TemplateC from "../Component/MainComponent/CreateSignature/AllTemplates/TemplateC";
import TemplateD from "../Component/MainComponent/CreateSignature/AllTemplates/TemplateD";
import TemplateE from "../Component/MainComponent/CreateSignature/AllTemplates/TemplateE";
import TemplateF from "../Component/MainComponent/CreateSignature/AllTemplates/TemplateF";
import TemplateG from "../Component/MainComponent/CreateSignature/AllTemplates/TemplateG";
import TemplateH from "../Component/MainComponent/CreateSignature/AllTemplates/TemplateH";
import GreenImg2 from "../Component/UserBar/widgets/widgetsImage/green-earth.png";
import { FaVideo } from "react-icons/fa";

import KindRegards from "../Images/signs/kind_regards.png";
import HappyHolidays from "../Images/signs/happy_holidays.png";
import BestRegards from "../Images/signs/best_regards.png";

const counterSlice = createSlice({
	name: "users",
	initialState: {
		// templateA initialState start
		name: "",
		company: "",
		position: " ",
		phonenumber: "",
		website: "",
		email: "",
		addersh: "",
		facebookLink: "",
		stackoverflowLink: "",
		instagramLink: "",
		pinterestLink: "",
		linkedInLink: "",
		twitterLink: "",
		youtubeSocial: "",
		youtubeLink: "",
		twitterLinkA: "",
		twitterLinkB: "",
		twitterLinkC: "",
		disclaimer: "",
		greenMessage: "",
		greenMessageImage: GreenImg2,
		signOffImage: { name: "kind_regards", image: KindRegards },
		ctaButton: {
			text: "",
			url: "",
			type: "full",
			size: "large",
			color: "bg-blue-700",
			textColor: "text-white",
		},
		socialSettings: {
			minWidth: 100,
			height: 40,
			marginTop: 0,
		},
		videoConferenceInfo: {
			videoUrl: "",
			VideoIcon: FaVideo,
			videoText: "",
			shape: 0,
			height: 0,
			marginTop: 0,
		},
		bannerImg: "",

		Templates: <TemplateA />,

		// templateA initialState end

		// templateB initialState start

		TemplateBName: "Saurabh",
		TemplateBCompany: "NETFORCELAB",
		TemplateBPhonenumber: "212-931-0000",
		TemplateBPosition: "Claver Corder",
		TemplateBWebsite: "www.je-marketing.com",
		TemplateBemail: "jason@je-marketing.com",
		TemplateBAddersh: "1937 Fieldcrest Road , NY 10011",
		TemplateBFacebookLink: "facebook.com/<username>",
		TemplateBInstagramLink: "instagram.com/<username>",
		TemplateBtwitterLink: "twitter.com/<username>",
		TemplateBStackoverflowLink: "careers.stackoverflow.com/<username>",

		// Users state
		user: [],

		// Design Tabs
		counter: "",

		// Desing Color

		colors: "",
		FontsizeChange: "",
		spacings: "",
		Compactmargins: "",
	},

	reducers: {
		// template A reducer start
		getctaButton: (state, action) => {
			state.ctaButton[action.payload.key] = action.payload.value;
		},
		getDisclaimer: (state, action) => {
			state.disclaimer = action.payload.value;
		},
		getBannerImg: (state, action) => {
			state.bannerImg = action.payload;
		},
		getGreenMessage: (state, action) => {
			state.greenMessage = action.payload.value;
		},
		getGreenMessageImage: (state, action) => {
			state.greenMessageImage = action.payload.value;
		},
		getVideoConference: (state, action) => {
			state.videoConferenceInfo[action.payload.key] = action.payload.value;
		},
		getSocialSettings: (state, action) => {
			state.socialSettings[action.payload.key] = action.payload.value;
		},
		getName: (state, action) => {
			state.name = action.payload;
		},
		getCompany: (state, action) => {
			state.company = action.payload;
		},
		getPosition: (state, action) => {
			state.position = action.payload;
		},
		getPhonenumber: (state, action) => {
			state.phonenumber = action.payload;
		},
		getWebsite: (state, action) => {
			state.website = action.payload;
		},
		getEmail: (state, action) => {
			state.email = action.payload;
		},
		getAddersh: (state, action) => {
			state.address = action.payload;
		},
		getFacebookLink: (state, action) => {
			state.facebookLink = action.payload;
		},
		getstackoverflowLink: (state, action) => {
			state.stackoverflowLink = action.payload;
		},
		getinstagramLink: (state, action) => {
			state.instagramLink = action.payload;
		},
		getPinterestLink: (state, action) => {
			state.pinterestLink = action.payload;
		},
		getLinkedInLink: (state, action) => {
			state.linkedInLink = action.payload;
		},
		gettwitterLink: (state, action) => {
			state.twitterLink = action.payload;
		},
		getyoutubeLink: (state, action) => {
			state.youtubeLink = action.payload;
		},
		getYoutubeSocial: (state, action) => {
			state.youtubeSocial = action.payload;
		},
		getyoutubeTitle: (state, action) => {
			state.youtubeTitle = action.payload;
		},
		getyoutubeUrl: (state, action) => {
			state.youtubeUrl = action.payload;
		},
		getyoutubeLinkdesc: (state, action) => {
			state.youtubeLinkdesc = action.payload;
		},
		getquoteTitle: (state, action) => {
			state.quoteTitle = action.payload;
		},
		gettwitterLinkA: (state, action) => {
			state.twitterLinkA = action.payload;
		},
		gettwitterLinkB: (state, action) => {
			state.twitterLinkB = action.payload;
		},
		gettwitterLinkC: (state, action) => {
			state.twitterLinkC = action.payload;
		},
		getSignOffImage: (state, action) => {
			console.log(action);
			state.signOffImage.name = action.payload;
			state.signOffImage.image = getImage(action.payload);
		},

		getTemplateA: state => {
			state.Templates = <TemplateA />;
		},
		getTemplateB: state => {
			state.Templates = <TemplateB />;
		},
		getTemplateC: state => {
			state.Templates = <TemplateC />;
		},
		getTemplateD: state => {
			state.Templates = <TemplateD />;
		},
		getTemplateE: state => {
			state.Templates = <TemplateE />;
		},
		getTemplateF: state => {
			state.Templates = <TemplateF />;
		},
		getTemplateG: state => {
			state.Templates = <TemplateG />;
		},
		getTemplateH: state => {
			state.Templates = <TemplateH />;
		},

		// template A reducer end
		getTemplateBName: (state, action) => {
			state.TemplateBName = action.payload;
		},
		getTemplateBCompany: (state, action) => {
			state.TemplateBCompany = action.payload;
		},
		getTemplateBPhonenumber: (state, action) => {
			state.TemplateBPhonenumber = action.payload;
		},
		getTemplateBPosition: (state, action) => {
			state.TemplateBPosition = action.payload;
		},

		// users reducer action

		getData: (state, action) => {
			state.user = action.payload;
		},

		//  design tab
		getCounts: (state, action) => {
			state.counter = action.payload;
		},

		getColors: (state, action) => {
			state.colors = action.payload;
		},
		getFontsizeChange: (state, action) => {
			state.FontsizeChange = action.payload;
		},

		getSpacing: (state, action) => {
			state.spacings = action.payload;
		},
		getCompactMargins: (state, action) => {
			state.Compactmargins = action.payload;
		},
	},
});

export const {
	getBannerImg,
	getVideoConference,
	getGreenMessageImage,
	getctaButton,
	getGreenMessage,
	getDisclaimer,
	getName,
	getCompany,
	getPosition,
	getAddersh,
	getEmail,
	getWebsite,
	getPhonenumber,
	getFacebookLink,
	getstackoverflowLink,
	getinstagramLink,
	gettwitterLink,
	getyoutubeLink,
	getyoutubeLinkdesc,
	getYoutubeSocial,
	gettwitterLinkA,
	gettwitterLinkB,
	gettwitterLinkC,
	getyoutubeTitle,
	getyoutubeUrl,
	getquoteTitle,
	getLinkedInLink,
	getInstagramLink,
	getTemplateA,
	getPinterestLink,
	getTemplateB,
	getTemplateC,
	getTemplateD,
	getTemplateE,
	getTemplateF,
	getTemplateG,
	getTemplateH,

	// template b values
	getTemplateBName,
	getTemplateBCompany,
	getTemplateBPhonenumber,
	getTemplateBPosition,
	getSignOffImage,

	// export for user
	getData,

	// design tab

	getCounts,
	getColors,
	getFontsizeChange,
	getSpacing,
	getCompactMargins,
	getSocialSettings,
} = counterSlice.actions;

function getImage(name) {
	switch (name) {
		case "happy_holidays":
			return HappyHolidays;
		case "kind_regards":
			return KindRegards;
		case "best_regards":
			return BestRegards;
		default:
			return KindRegards;
	}
}

export default counterSlice.reducer;
