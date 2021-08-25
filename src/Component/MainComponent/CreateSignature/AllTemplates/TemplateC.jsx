import React from "react";
import Logo from "../../../image/your-logo.png";
import ProfileImage from "../../../image/default-sig-photo.jpg";
import Signature from "../../../image/kind_regards.png";
import Footer from "../../../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";

const TemplateC = () => {
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
    colors,
    FontsizeChange,
    spacings,
    CompactMargins,
  } = useSelector(state => state.counter);

  const signOffImage = useSelector(state => state.counter.signOffImage.image);

  return (
    <div>
      <div>
        <body class="w-full">
          <div class="">
            <div class="h-10 bg-gray-300   flex rounded-t pt-2 px-4">
              <span>JASON ERICKSON</span>
            </div>

            <div class=" bg-white pt-2 px-4">
              <a href="#">
                <img src={signOffImage} alt="img" class="w-1/4 py-3" />
              </a>
            </div>
            <div class="flex px-4 bg-white">
              <div class=" w-full pb-5">
                <div class="px-4 float-left w-4/12 md:px-2">
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
                  <span class="font-bold text-gray-500 text-xs mt-1 float-left">
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

                    <br class="font-bold" />
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
                  <div class="float-left mt-2">
                    <a
                      href="http://www.facebook.com/username"
                      target="_blank"
                      style={{
                        fontSize: "11px",
                        color: "#444",
                        textDecoration: "none",
                      }}
                    >
                      {" "}
                      <img
                        width="24"
                        height="24"
                        src="https://cdn.gifo.wisestamp.com/social/facebook/45668E/48/circle/border.png"
                        style={{ float: "left", border: "none", border: "0" }}
                      />{" "}
                    </a>

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
                    >
                      {" "}
                      <img
                        width="24"
                        height="24"
                        src="https://cdn.gifo.wisestamp.com/social/linkedin/45668E/48/circle/border.png"
                        style={{ float: "left", border: "none", border: "0" }}
                        class="mr-2 ml-2"
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
                    >
                      {" "}
                      <img
                        width="24"
                        height="24"
                        src="https://cdn.gifo.wisestamp.com/social/twitter/45668E/48/circle/border.png"
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
                    >
                      {" "}
                      <img
                        width="24"
                        height="24"
                        src="https://cdn.gifo.wisestamp.com/social/instagram/45668E/48/circle/border.png"
                        style={{ float: "left", border: "none", border: "0" }}
                        class="ml-2"
                      />{" "}
                    </a>
                  </div>
                </div>
                <div class="float-left">
                  <a href="">
                    <img src={ProfileImage} alt="" class="w-50 rounded-sm" />
                  </a>
                  <img src={Logo} alt="logo" class="pt-4 w-50" />
                </div>
                <div class="ml-20 float-left md:ml-10">
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
                          {website}
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
        </body>
      </div>
    </div>
  );
};

export default TemplateC;
