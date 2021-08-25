import React from "react";

import Logo from "../../../image/your-logo.png";
import ProfileImage from "../../../image/default-sig-photo.jpg";
import Signature from "../../../image/kind_regards.png";
import Footer from "../../../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";

const TemplateE = () => {
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
    spacings,
    colors,
    FontsizeChange,
    CompactMargins,
  } = useSelector(state => state.counter);
  const signOffImage = useSelector(state => state.counter.signOffImage.image);

  return (
    <div>
      <body class="w-full">
        <div class="">
          <div class=" h-10 bg-gray-300   flex rounded-t pt-2 px-4">
            <span>JASON ERICKSON</span>
          </div>

          <div class=" bg-white pt-2 px-4">
            <a href="#">
              <img src={signOffImage} alt="img" class="w-1/4 py-3" />
            </a>
          </div>
          <div class="flex px-4 bg-white">
            <div class="">
              <a href="#">
                <img src={ProfileImage} alt="" class="w-50 px-1" />
              </a>
            </div>
            <div class=" w-full pb-5">
              <div class="px-4 float-left">
                <span class="font-bold text-gray-500 text-xs float-left mt-1 pb-1">
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
                <h4 class="font-bold text-gray-700 text-lg leading-none">
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

                <div class=" pt-5 float-left">
                  <ul class="text-sm mt-1 float-left">
                    <span class="float-left text-gray-600 font-bold mt-1 mr-2">
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-phone-3/45668E/13/trans.png"
                        style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                      />
                    </span>
                    <li class="px-3">
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
                    <span class="float-left text-gray-600 font-bold mt-1 mr-2">
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                        style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                      />
                    </span>
                    <li class=" px-3">
                      <a href="#">
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
                      </a>
                    </li>
                    <span class="float-left text-gray-600 font-bold mt-1 mr-2">
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                        style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                      />
                    </span>
                    <li class=" px-3">
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
                    <li class="">
                      <a href="#">
                        <span class="float-left text-gray-600 font-bold mt-1 mr-2">
                          <img
                            src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
                            style={{
                              verticalAlign: "-2px",
                              lineHeight: "1.2",
                            }}
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
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white float-left w-full flex pb-5">
            <div class="bg-blue-400 float-left w-11/12 m-auto pt-3 pb-3 pr-5">
              <a
                href={facebookLink}
                target="_blank"
                style={{
                  fontSize: "11px",
                  color: "#444",
                  textDecoration: "none",
                  width: `${spacings}px`,
                  height: `${spacings}`,
                }}
                class="float-right"
              >
                {" "}
                <img
                  width="24"
                  height="24"
                  src="https://cdn.gifo.wisestamp.com/social/facebook/FFFFFF/48/circle/border.png"
                  style={{ float: "left", border: "none", border: "0" }}
                />{" "}
              </a>

              <a
                href={twitterLink}
                target="_blank"
                style={{
                  fontSize: "11px",
                  color: "#444",
                  textDecoration: "none",
                  width: `${spacings}px`,
                  height: `${spacings}`,
                }}
                class="float-right mr-2 ml-2"
              >
                {" "}
                <img
                  width="24"
                  height="24"
                  src="https://cdn.gifo.wisestamp.com/social/linkedin/FFFFFF/48/circle/border.png"
                  style={{ float: "left", border: "none", border: "0" }}
                />{" "}
              </a>

              <a
                href={twitterLinkA}
                target="_blank"
                style={{
                  fontSize: "11px",
                  color: "#444",
                  textDecoration: "none",
                  width: `${spacings}px`,
                  height: `${spacings}`,
                }}
                class="float-right"
              >
                {" "}
                <img
                  width="24"
                  height="24"
                  src="https://cdn.gifo.wisestamp.com/social/twitter/FFFFFF/48/circle/border.png"
                  style={{ float: "left", border: "none", border: "0" }}
                />{" "}
              </a>

              <a
                href={twitterLinkB}
                target="_blank"
                style={{
                  fontSize: "11px",
                  color: "#444",
                  textDecoration: "none",
                  width: `${spacings}px`,
                  height: `${spacings}`,
                }}
                class="float-right mr-2"
              >
                {" "}
                <img
                  width="24"
                  height="24"
                  src="https://cdn.gifo.wisestamp.com/social/instagram/FFFFFF/48/circle/border.png"
                  style={{ float: "left", border: "none", border: "0" }}
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default TemplateE;
