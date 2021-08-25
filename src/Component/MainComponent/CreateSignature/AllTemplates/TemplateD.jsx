import React from "react";
import Logo from "../../../image/your-logo.png";
import ProfileImage from "../../../image/default-sig-photo.jpg";
import Signature from "../../../image/kind_regards.png";
import Footer from "../../../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";

const TemplateD = () => {
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
        <div class=" ">
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
                <img src={ProfileImage} alt="" class="w-50 mr-10" />
              </a>
            </div>
            <div class="px-2 pb-2">
              <div class="bg-blue-900 float-left w-full py-2 px-2">
                <span class="font-bold text-white text-sm float-left mt-1 pb-2 w-full">
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
                <h4 class="font-bold text-white text-lg leading-none">
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
              </div>
              <ul class="text-sm mt-1 float-left">
                <li class="float-left">
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
                <li class="float-left">
                  <a href="jason@je-marketing.com">
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
              <div class="mt-4 float-left">
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
                    src="https://cdn.gifo.wisestamp.com/social/facebook/3b5998/48/0/transparent.png"
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
                    src="https://cdn.gifo.wisestamp.com/social/linkedin/0077b5/48/0/transparent.png"
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
                    src="https://cdn.gifo.wisestamp.com/social/twitter/55acee/48/0/transparent.png"
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
                    src="https://cdn.gifo.wisestamp.com/social/instagram/E4405F/48/0/transparent.png"
                    style={{ float: "left", border: "none", border: "0" }}
                  />{" "}
                </a>
                <img src={Logo} alt="logo" class="pt-4 w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default TemplateD;
