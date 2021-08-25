import React from "react";
import Logo from "../../../image/your-logo.png";
import ProfileImage from "../../../image/default-sig-photo.jpg";
import Signature from "../../../image/kind_regards.png";
import Footer from "../../../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";

const TemplateH = () => {
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
    spacings,
    CompactMargins,

    colors,
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
          <div class="flex px-4 bg-white text-center justify-center">
            <div class="w-60">
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
                <span class="font-bold text-gray-500 text-xs  mt-1 pb-2">
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
                </span>
                <a href="#">
                  <img
                    src="images/default-sig-photo.jpg"
                    alt=""
                    class="w-50 px-1 rounded-full m-auto mt-3"
                  />
                </a>
                <div class=" float-none w-50 mt-3">
                  <img src={ProfileImage} alt="logo" class=" w-20 m-auto" />
                </div>
              </div>
            </div>
          </div>
          <div class="w-full float-left px-40 pt-4 bg-white pb-3">
            <div class="bg-blue-900 float-left text-white px-3 py-3">
              <ul class="text-sm mt-1 mb-2 float-left">
                <span class="float-left text-gray-600 font-bold mt-1 mr-2 ">
                  <img
                    src="https://cdn.gifo.wisestamp.com/social/rich-field-phone-3/45668E/13/trans.png"
                    style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                  />
                </span>
                <li class=" px-3">
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
                <span class="float-left text-gray-600 font-bold mt-1 mr-2 ">
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
                      {email}
                    </h1>
                  </a>
                </li>
                <span class="float-left text-gray-600 font-bold mt-1 mr-2 ">
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
                      {website}
                    </h1>
                  </a>
                </li>
                <li class="">
                  <a href="#">
                    <span class="float-left text-gray-600 font-bold mr-2 mt-1">
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
                        style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
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
              <div class="mt-2 float-left w-full">
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
                    src="https://cdn.gifo.wisestamp.com/social/facebook/FFFFFF/48/0/transparent.png"
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
                >
                  {" "}
                  <img
                    width="24"
                    height="24"
                    src="https://cdn.gifo.wisestamp.com/social/linkedin/FFFFFF/48/0/transparent.png"
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
                    src="https://cdn.gifo.wisestamp.com/social/twitter/FFFFFF/48/0/transparent.png"
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
                >
                  {" "}
                  <img
                    width="24"
                    height="24"
                    src="https://cdn.gifo.wisestamp.com/social/instagram/FFFFFF/48/0/transparent.png"
                    style={{ float: "left", border: "none", border: "0" }}
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default TemplateH;
