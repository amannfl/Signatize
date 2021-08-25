import React from "react";
import Logo from "../../../image/your-logo.png";
import ProfileImage from "../../../image/default-sig-photo.jpg";
import Signature from "../../../image/kind_regards.png";
import Footer from "../../../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";

const TemplateB = () => {
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
    twitterLink,
    twitterLinkA,
    twitterLinkB,
    FontsizeChange,
    colors,
    spacings,
    CompactMargins,
  } = useSelector(state => state.counter);
  const signOffImage = useSelector(state => state.counter.signOffImage.image);

  return (
    <div>
      <section class="w-full shadow-2xl rounded-md h-72">
        <div class=" h-10 bg-gray-300  rounded-t pt-2 px-4">
          <span>JASON ERICKSON</span>
        </div>

        <div class=" bg-white  px-4">
          <a href="#">
            <img src={signOffImage} alt="img" class="w-1/4 " />
          </a>
        </div>
        <div class="flex px-4 bg-white">
          <div class="w-60">
            <a href="#">
              <img src={ProfileImage} alt="" class="w-50 px-1" />
            </a>
            <div class="">
              <h4 class="font-bold text-gray-700 text-lg leading-none mt-3">
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
                    padding: `${CompactMargins}`,
                  }}
                >
                  {position}
                </h1>
                <br class="text-blue-300" />
                <h1
                  style={{
                    fontSize: `${counter}px`,
                    color: colors,
                    fontFamily: FontsizeChange,
                    padding: `${CompactMargins}`,
                  }}
                >
                  {company}
                </h1>
              </span>
            </div>
          </div>
          <div class=" w-full pb-5">
            <div class="ml-56 float-left">
              <img src={Logo} alt="logo" class=" w-20" />
            </div>
          </div>
        </div>
        <div class="w-full float-left px-4 bg-white pb-3">
          <ul class="text-sm mt-1 mb-2 float-left">
            <span class="float-left text-gray-600 font-bold mt-1">
              <img
                src="https://cdn.gifo.wisestamp.com/social/rich-field-phone-3/45668E/13/trans.png"
                style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
              />
            </span>
            <li class="float-left px-3">
              <a href="tel:212-931-0000">
                <h1
                  style={{
                    fontSize: `${counter}px`,
                    color: colors,
                    fontFamily: FontsizeChange,
                    padding: `${CompactMargins}`,
                  }}
                >
                  {phonenumber}
                </h1>
              </a>
            </li>
            <span class="float-left text-gray-600 font-bold mt-1">
              <img
                src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
              />
            </span>
            <li class="float-left px-3">
              <a href="#">
                <h1
                  style={{
                    fontSize: `${counter}px`,
                    color: colors,
                    fontFamily: FontsizeChange,
                    padding: `${CompactMargins}`,
                  }}
                >
                  {website}
                </h1>
              </a>
            </li>
            <span class="float-left text-gray-600 font-bold mt-1">
              <img
                src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
              />
            </span>
            <li class="float-left px-3">
              <a href="#">
                <h1
                  style={{
                    fontSize: `${counter}px`,
                    color: colors,
                    fontFamily: FontsizeChange,
                    padding: `${CompactMargins}`,
                  }}
                >
                  {email}
                </h1>
              </a>
            </li>
            <li class="float-left">
              <a href="#">
                <span class="float-left text-gray-600 font-bold mr-1">
                  <img
                    src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
                    style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
                  />
                </span>
                <h1
                  style={{
                    fontSize: `${counter}px`,
                    color: colors,
                    fontFamily: FontsizeChange,
                    padding: `${CompactMargins}`,
                  }}
                >
                  {address}
                </h1>
              </a>
            </li>
          </ul>
          <div class="">
            <a href={facebookLink}>
              <img
                width="24"
                height="24"
                src="https://cdn.gifo.wisestamp.com/social/facebook/45668E/48/4/background.png"
                style={{
                  float: " left",
                  border: "none",
                  border: "0",
                  width: `${spacings}px`,
                  height: `${spacings}`,
                }}
              />
            </a>
            <a href={twitterLink}>
              <img
                width="24"
                height="24"
                src="https://cdn.gifo.wisestamp.com/social/linkedin/45668E/48/4/background.png"
                style={{
                  float: " left",
                  border: "none",
                  border: "0",
                  width: `${spacings}px`,
                  height: `${spacings}`,
                }}
                class="mr-2 ml-2"
              />
            </a>
            <a href={twitterLinkA}>
              <img
                width="24"
                height="24"
                src="https://cdn.gifo.wisestamp.com/social/twitter/45668E/48/4/background.png"
                style={{
                  float: " left",
                  border: "none",
                  border: "0",
                  width: `${spacings}px`,
                  height: `${spacings}`,
                }}
                class="mr-2 "
              />
            </a>
            <a href={twitterLinkB}>
              <img
                width="24"
                height="24"
                src="https://cdn.gifo.wisestamp.com/social/instagram/45668E/48/4/background.png"
                style={{
                  float: " left",
                  border: "none",
                  border: "0",
                  width: `${spacings}px`,
                  height: `${spacings}`,
                }}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TemplateB;
