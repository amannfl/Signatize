import React from "react";

import Logo from "../../image/your-logo.png";
import ProfileImage from "../../image/default-sig-photo.jpg";
import Signature from "../../image/kind_regards.png";
import Footer from "../../Footer/Footer";

const TemplateBox = () => {
  return (
    <>
      <main class="bg-gray-200">
        <article class="flex w-full px-16 gap-10 py-6">
          {/* TEMPLATE NO:1 */}
          <section class=" shadow-2xl rounded-md h-72 w-full">
            <div class=" h-10 bg-gray-300  flex rounded-t pt-2 px-4">
              <span>JASON ERICKSON</span>
            </div>
            <div class=" bg-white pt-2 px-4">
              <a href="#">
                <img src={Signature} alt="img" class="w-1/4 py-3" />
              </a>
            </div>
            <div class="flex px-4 bg-white py-9">
              <div class="">
                <a href="#">
                  <img src={ProfileImage} alt="" class="w-50 px-1" />
                </a>
              </div>
              <div class=" w-full ">
                <div class="px-4 float-left md:px-2">
                  <h4 class="font-bold text-blue-700 text-lg leading-none">
                    Jason Erickson
                  </h4>
                  <span class="font-bold text-gray-500 text-xs float-left mt-1 pb-2">
                    Online marketer, <br class="font-bold" />
                    JE marketing
                  </span>
                </div>
                <div class="ml-20 float-left md:ml-2">
                  <ul class="text-sm mt-1 float-left">
                    <span class="float-left text-gray-600 font-bold mt-1 mr-2">
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-phone-3/45668E/13/trans.png"
                        style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
                      />
                    </span>
                    <li class="px-3">
                      <a href="tel:212-931-0000">212-931-0000</a>
                    </li>

                    <span class="float-left text-gray-600 font-bold mt-1 mr-2">
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                        style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
                      />
                    </span>
                    <li class=" px-3">
                      <a href="#">www.je-marketing.com</a>
                    </li>

                    <span class="float-left text-gray-600 font-bold mt-1 mr-2">
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                        style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
                      />
                    </span>
                    <li class=" px-3">
                      <a href="#">www.je-marketing.com</a>
                    </li>

                    <li class="">
                      <a href="#">
                        <span class="float-left text-gray-600 font-bold mt-1 mr-2">
                          <img
                            src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
                            style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
                          />
                        </span>
                        1937 Fieldcrest Road, NY 10011
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="float-left mt-2">
                  <a href="">
                    <img
                      width="25"
                      height="25"
                      src="https://cdn.gifo.wisestamp.com/social/facebook/3b5998/32/0/background.png"
                      style={{ float: " left", border: "none", border: "0" }}
                    />
                  </a>
                  <a href="">
                    <a href="">
                      <a href="">
                        <img
                          width="25"
                          height="25"
                          src="https://cdn.gifo.wisestamp.com/social/linkedin/0077b5/32/0/background.png"
                          style={{
                            float: " left",
                            border: "none",
                            border: "0",
                          }}
                          class="mr-2 ml-2"
                        />
                      </a>
                    </a>
                  </a>
                  <a href="">
                    <a href="">
                      <img
                        width="25"
                        height="25"
                        src="https://cdn.gifo.wisestamp.com/social/twitter/55acee/32/0/background.png"
                        style={{ float: " left", border: "none", border: "0" }}
                        class="mr-2"
                      />
                    </a>
                  </a>
                  <a href="">
                    <img
                      width="25"
                      height="25"
                      src="https://cdn.gifo.wisestamp.com/social/instagram/E4405F/32/0/background.png"
                      style={{ float: " left", border: "none", border: "0" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* TEMPLATE NO:5*/}

          <section class="w-full shadow-2xl rounded-md h-72">
            <div class=" h-10 bg-gray-300  rounded-t pt-2 px-4">
              <span>JASON ERICKSON</span>
            </div>

            <div class=" bg-white  px-4">
              <a href="#">
                <img src={Signature} alt="img" class="w-1/4 " />
              </a>
            </div>
            <div class="flex px-4 bg-white">
              <div class="w-60">
                <a href="#">
                  <img src={ProfileImage} alt="" class="w-50 px-1" />
                </a>
                <div class="">
                  <h4 class="font-bold text-gray-700 text-lg leading-none mt-3">
                    Jason Erickson
                  </h4>
                  <span class="font-bold text-gray-500 text-xs float-left mt-1 pb-2">
                    Online marketer, <br class="text-blue-300" />
                    JE marketing
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
                  <a href="tel:212-931-0000">212-931-0000</a>
                </li>
                <span class="float-left text-gray-600 font-bold mt-1">
                  <img
                    src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                    style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
                  />
                </span>
                <li class="float-left px-3">
                  <a href="#">www.je-marketing.com</a>
                </li>
                <span class="float-left text-gray-600 font-bold mt-1">
                  <img
                    src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                    style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
                  />
                </span>
                <li class="float-left px-3">
                  <a href="#">www.je-marketing.com</a>
                </li>
                <li class="float-left">
                  <a href="#">
                    <span class="float-left text-gray-600 font-bold mr-1">
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
                        style={{ verticalAlign: "-2px", lineHeight: 1.2 }}
                      />
                    </span>
                    1937 Fieldcrest Road, NY 10011
                  </a>
                </li>
              </ul>
              <div class="">
                <a href="">
                  <img
                    width="24"
                    height="24"
                    src="https://cdn.gifo.wisestamp.com/social/facebook/45668E/48/4/background.png"
                    style={{ float: " left", border: "none", border: "0" }}
                  />
                </a>
                <a href="">
                  <img
                    width="24"
                    height="24"
                    src="https://cdn.gifo.wisestamp.com/social/linkedin/45668E/48/4/background.png"
                    style={{ float: " left", border: "none", border: "0" }}
                    class="mr-2 ml-2"
                  />
                </a>
                <a href="">
                  <img
                    width="24"
                    height="24"
                    src="https://cdn.gifo.wisestamp.com/social/twitter/45668E/48/4/background.png"
                    style={{ float: " left", border: "none", border: "0" }}
                    class="mr-2 "
                  />
                </a>
                <a href="">
                  <img
                    width="24"
                    height="24"
                    src="https://cdn.gifo.wisestamp.com/social/instagram/45668E/48/4/background.png"
                    style={{ float: " left", border: "none", border: "0" }}
                  />
                </a>
              </div>
            </div>
          </section>
        </article>

        {/* SECOND SECTION */}
        <article className="flex px-16 gap-10 py-10">
          {/* TEMPLATE NO:2 */}
          <body class="w-full">
            <div class="">
              <div class="h-10 bg-gray-300   flex rounded-t pt-2 px-4">
                <span>JASON ERICKSON</span>
              </div>

              <div class=" bg-white pt-2 px-4">
                <a href="#">
                  <img src={Signature} alt="img" class="w-1/4 py-3" />
                </a>
              </div>
              <div class="flex px-4 bg-white">
                <div class=" w-full pb-5">
                  <div class="px-4 float-left w-4/12 md:px-2">
                    <h4 class="font-bold text-blue-700 text-lg leading-none">
                      Jason Erickson
                    </h4>
                    <span class="font-bold text-gray-500 text-xs mt-1 float-left">
                      Online marketer, <br class="font-bold" />
                      JE marketing
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
                        href="http://us.linkedin.com/username"
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
                          src="https://cdn.gifo.wisestamp.com/social/linkedin/45668E/48/circle/border.png"
                          style={{ float: "left", border: "none", border: "0" }}
                          class="mr-2 ml-2"
                        />{" "}
                      </a>

                      <a
                        href="http://twitter.com/username"
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
                          src="https://cdn.gifo.wisestamp.com/social/twitter/45668E/48/circle/border.png"
                          style={{ float: "left", border: "none", border: "0" }}
                        />{" "}
                      </a>

                      <a
                        href="http://instagram.com/username"
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
                          src="https://cdn.gifo.wisestamp.com/social/instagram/45668E/48/circle/border.png"
                          style={{ float: "left", border: "none", border: "0" }}
                          class="ml-2"
                        />{" "}
                      </a>
                    </div>
                  </div>
                  <div class="float-left">
                    <a href="#">
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
                        <a href="tel:212-931-0000">212-931-0000</a>
                      </li>

                      <span class="float-left text-gray-600 font-bold mt-1 mr-2">
                        <img
                          src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                          style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                        />
                      </span>
                      <li class=" px-3">
                        <a href="#">www.je-marketing.com</a>
                      </li>

                      <span class="float-left text-gray-600 font-bold mt-1 mr-2">
                        <img
                          src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                          style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                        />
                      </span>
                      <li class=" px-3">
                        <a href="#">www.je-marketing.com</a>
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
                          1937 Fieldcrest Road, NY 10011
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </body>

          <body class="w-full">
            <div class=" ">
              <div class=" h-10 bg-gray-300   flex rounded-t pt-2 px-4">
                <span>JASON ERICKSON</span>
              </div>

              <div class=" bg-white pt-2 px-4">
                <a href="#">
                  <img src={Signature} alt="img" class="w-1/4 py-3" />
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
                      Online marketer, JE marketing
                    </span>
                    <h4 class="font-bold text-white text-lg leading-none">
                      Jason Erickson
                    </h4>
                  </div>
                  <ul class="text-sm mt-1 float-left">
                    <li class="float-left">
                      <a href="tel:212-931-0000">212-931-0000</a>
                    </li>
                    <li class="float-left px-3">
                      <a href="#">www.je-marketing.com</a>
                    </li>
                    <li class="float-left">
                      <a href="jason@je-marketing.com">
                        jason@je-marketing.com
                      </a>
                    </li>
                    <li class="float-left">
                      <a href="#">1937 Fieldcrest Road, NY 10011</a>
                    </li>
                  </ul>
                  <div class="mt-4 float-left">
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
                        src="https://cdn.gifo.wisestamp.com/social/facebook/3b5998/48/0/transparent.png"
                        style={{ float: "left", border: "none", border: "0" }}
                      />{" "}
                    </a>

                    <a
                      href="http://us.linkedin.com/username"
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
                        src="https://cdn.gifo.wisestamp.com/social/linkedin/0077b5/48/0/transparent.png"
                        style={{ float: "left", border: "none", border: "0" }}
                      />{" "}
                    </a>

                    <a
                      href="http://twitter.com/username"
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
                        src="https://cdn.gifo.wisestamp.com/social/twitter/55acee/48/0/transparent.png"
                        style={{ float: "left", border: "none", border: "0" }}
                      />{" "}
                    </a>

                    <a
                      href="http://instagram.com/username"
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
        </article>

        {/* SECTION THREE */}
        <article className="flex  px-16 gap-10 ">
          {/* TEMPLATE NO:2 */}
          <body class="w-full">
            <div class="">
              <div class=" h-10 bg-gray-300   flex rounded-t pt-2 px-4">
                <span>JASON ERICKSON</span>
              </div>

              <div class=" bg-white pt-2 px-4">
                <a href="#">
                  <img src={Signature} alt="img" class="w-1/4 py-3" />
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
                      Online marketer, JE marketing
                    </span>
                    <h4 class="font-bold text-gray-700 text-lg leading-none">
                      Jason Erickson
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
                          <a href="tel:212-931-0000">212-931-0000</a>
                        </li>
                        <span class="float-left text-gray-600 font-bold mt-1 mr-2">
                          <img
                            src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                            style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                          />
                        </span>
                        <li class=" px-3">
                          <a href="#">www.je-marketing.com</a>
                        </li>
                        <span class="float-left text-gray-600 font-bold mt-1 mr-2">
                          <img
                            src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                            style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                          />
                        </span>
                        <li class=" px-3">
                          <a href="#">www.je-marketing.com</a>
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
                            1937 Fieldcrest Road, NY 10011
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
                    href="http://www.facebook.com/username"
                    target="_blank"
                    style={{
                      fontSize: "11px",
                      color: "#444",
                      textDecoration: "none",
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
                    href="http://us.linkedin.com/username"
                    target="_blank"
                    style={{
                      fontSize: "11px",
                      color: "#444",
                      textDecoration: "none",
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
                    href="http://twitter.com/username"
                    target="_blank"
                    style={{
                      fontSize: "11px",
                      color: "#444",
                      textDecoration: "none",
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
                    href="http://instagram.com/username"
                    target="_blank"
                    style={{
                      fontSize: "11px",
                      color: "#444",
                      textDecoration: "none",
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

          <body class="w-full">
            <div class=" ">
              <div class=" h-10 bg-gray-300   flex rounded-t pt-2 px-4">
                <span>JASON ERICKSON</span>
              </div>

              <div class=" bg-white pt-2 px-4">
                <a href="#">
                  <img src={Signature} alt="img" class="w-1/4 py-3" />
                </a>
              </div>
              <div class="flex px-4 bg-white">
                <div class="w-full">
                  <a href="#">
                    <img src={ProfileImage} alt="" class="w-50 px-1" />
                  </a>
                  <div class="">
                    <h4 class="font-bold text-gray-700 text-lg leading-none mt-3">
                      Jason Erickson
                    </h4>
                    <span class="font-bold text-blue-700 text-sm float-left mt-1 pb-2">
                      Online marketer, JE marketing
                    </span>
                  </div>
                </div>
                <div class=" w-full pb-5">
                  <div class="ml-30 float-left">
                    <img src={Logo} alt="logo" class=" w-20" />
                  </div>
                </div>
              </div>
              <div class="w-full float-left px-4 bg-white pb-3">
                <ul class="text-sm mt-1 mb-2 float-left w-96">
                  <span class="float-left text-gray-600 font-bold mt-1">
                    <img
                      src="https://cdn.gifo.wisestamp.com/social/rich-field-phone-3/45668E/13/trans.png"
                      style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                    />
                  </span>
                  <li class="float-left px-3">
                    <a href="tel:212-931-0000">212-931-0000</a>
                  </li>
                  <span class="float-left text-gray-600 font-bold mt-1">
                    <img
                      src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                      style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                    />
                  </span>
                  <li class="float-left px-3">
                    <a href="#">www.je-marketing.com</a>
                  </li>
                  <span class="float-left text-gray-600 font-bold mt-1">
                    <img
                      src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                      style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                    />
                  </span>
                  <li class="float-left px-3">
                    <a href="#">www.je-marketing.com</a>
                  </li>
                  <li class="float-left">
                    <a href="#">
                      <span class="float-left text-gray-600 font-bold mr-1">
                        <img
                          src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
                          style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                        />
                      </span>
                      1937 Fieldcrest Road, NY 10011
                    </a>
                  </li>
                </ul>
                <div class="float-left ml-7">
                  <a href="">
                    <img
                      width="24"
                      height="24"
                      src="https://cdn.gifo.wisestamp.com/social/facebook/45668E/48/4/background.png"
                      style={{ border: "none" }}
                    />
                  </a>
                  <a href="">
                    <img
                      width="24"
                      height="24"
                      src="https://cdn.gifo.wisestamp.com/social/linkedin/45668E/48/4/background.png"
                      style={{ border: "none" }}
                      class="pt-1 pb-1"
                    />
                  </a>
                  <a href="">
                    <img
                      width="24"
                      height="24"
                      src="https://cdn.gifo.wisestamp.com/social/twitter/45668E/48/4/background.png"
                      style={{ border: "none" }}
                      class="pb-1 "
                    />
                  </a>
                  <a href="">
                    <img
                      width="24"
                      height="24"
                      src="https://cdn.gifo.wisestamp.com/social/instagram/45668E/48/4/background.png"
                      style={{ border: "none" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </body>
        </article>

        {/* SECTION 4 */}
        <article className="flex px-16 gap-10 py-6">
          {/* TEMPLATE NO:2 */}
          <body class="w-full">
            <div class="">
              <div class=" h-10 bg-gray-300   flex rounded-t pt-2 px-4">
                <span>JASON ERICKSON</span>
              </div>

              <div class=" bg-white pt-2 px-4">
                <a href="#">
                  <img src={Signature} alt="img" class="w-1/4 py-3" />
                </a>
              </div>
              <div class="flex px-4 bg-white">
                <div class="w-60">
                  <a href="#">
                    <img
                      src="images/default-sig-photo.jpg"
                      alt=""
                      class="w-50 px-1"
                    />
                  </a>
                  <div class="">
                    <h4 class="font-bold text-gray-700 text-lg leading-none mt-3">
                      Jason Erickson
                    </h4>
                    <span class="font-bold text-gray-500 text-xs float-left mt-1 pb-2">
                      Online marketer, JE marketing
                    </span>
                  </div>
                </div>
                <div class=" w-full pb-5">
                  <div class="ml-36 float-left">
                    <img src={ProfileImage} alt="logo" class=" w-20" />
                  </div>
                </div>
              </div>
              <div class="w-full float-left px-4 bg-white pb-3">
                <div class="bg-blue-900 float-left text-white px-3 py-3">
                  <ul class="text-sm mt-1 mb-2 float-left">
                    <span class="float-left text-gray-600 font-bold mt-1 mr-2 ">
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-phone-3/45668E/13/trans.png"
                        style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                      />
                    </span>
                    <li class=" px-3">
                      <a href="tel:212-931-0000">212-931-0000</a>
                    </li>
                    <span class="float-left text-gray-600 font-bold mt-1 mr-2 ">
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                        style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                      />
                    </span>
                    <li class=" px-3">
                      <a href="#">www.je-marketing.com</a>
                    </li>
                    <span class="float-left text-gray-600 font-bold mt-1 mr-2 ">
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                        style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                      />
                    </span>
                    <li class=" px-3">
                      <a href="#">www.je-marketing.com</a>
                    </li>
                    <li class="">
                      <a href="#">
                        <span class="float-left text-gray-600 font-bold mr-2 mt-1">
                          <img
                            src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
                            style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                          />
                        </span>
                        1937 Fieldcrest Road, NY 10011
                      </a>
                    </li>
                  </ul>
                  <div class="mt-2 float-left w-full">
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
                        src="https://cdn.gifo.wisestamp.com/social/facebook/FFFFFF/48/0/transparent.png"
                        style={{ float: "left", border: "none", border: "0" }}
                      />{" "}
                    </a>

                    <a
                      href="http://us.linkedin.com/username"
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
                        src="https://cdn.gifo.wisestamp.com/social/linkedin/FFFFFF/48/0/transparent.png"
                        style={{ float: "left", border: "none", border: "0" }}
                      />{" "}
                    </a>

                    <a
                      href="http://twitter.com/username"
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
                        src="https://cdn.gifo.wisestamp.com/social/twitter/FFFFFF/48/0/transparent.png"
                        style={{ float: "left", border: "none", border: "0" }}
                      />{" "}
                    </a>

                    <a
                      href="http://instagram.com/username"
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
                        src="https://cdn.gifo.wisestamp.com/social/instagram/FFFFFF/48/0/transparent.png"
                        style={{ float: "left", border: "none", border: "0" }}
                      />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </body>

          <body class="w-full">
            <div class="">
              <div class=" h-10 bg-gray-300   flex rounded-t pt-2 px-4">
                <span>JASON ERICKSO</span>
              </div>

              <div class=" bg-white pt-2 px-4">
                <a href="#">
                  <img src={Signature} alt="img" class="w-1/4 py-3" />
                </a>
              </div>
              <div class="flex px-4 bg-white text-center justify-center">
                <div class="w-60">
                  <div class="">
                    <h4 class="font-bold text-gray-700 text-lg leading-none mt-3">
                      Jason Erickson
                    </h4>
                    <span class="font-bold text-gray-500 text-xs  mt-1 pb-2">
                      Online marketer, JE marketing
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
                      <a href="tel:212-931-0000">212-931-0000</a>
                    </li>
                    <span class="float-left text-gray-600 font-bold mt-1 mr-2 ">
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                        style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                      />
                    </span>
                    <li class=" px-3">
                      <a href="#">www.je-marketing.com</a>
                    </li>
                    <span class="float-left text-gray-600 font-bold mt-1 mr-2 ">
                      <img
                        src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                        style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                      />
                    </span>
                    <li class=" px-3">
                      <a href="#">www.je-marketing.com</a>
                    </li>
                    <li class="">
                      <a href="#">
                        <span class="float-left text-gray-600 font-bold mr-2 mt-1">
                          <img
                            src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
                            style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                          />
                        </span>
                        1937 Fieldcrest Road, NY 10011
                      </a>
                    </li>
                  </ul>
                  <div class="mt-2 float-left w-full">
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
                        src="https://cdn.gifo.wisestamp.com/social/facebook/FFFFFF/48/0/transparent.png"
                        style={{ float: "left", border: "none", border: "0" }}
                      />{" "}
                    </a>

                    <a
                      href="http://us.linkedin.com/username"
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
                        src="https://cdn.gifo.wisestamp.com/social/linkedin/FFFFFF/48/0/transparent.png"
                        style={{ float: "left", border: "none", border: "0" }}
                      />{" "}
                    </a>

                    <a
                      href="http://twitter.com/username"
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
                        src="https://cdn.gifo.wisestamp.com/social/twitter/FFFFFF/48/0/transparent.png"
                        style={{ float: "left", border: "none", border: "0" }}
                      />{" "}
                    </a>

                    <a
                      href="http://instagram.com/username"
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
                        src="https://cdn.gifo.wisestamp.com/social/instagram/FFFFFF/48/0/transparent.png"
                        style={{ float: "left", border: "none", border: "0" }}
                      />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </article>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default TemplateBox;
