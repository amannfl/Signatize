import React from "react";
import { useState } from "react";
import "./Tabs.css";
import MySignature from "../MainComponent/My Signature/index";
import CreateSignature from "../MainComponent/CreateSignature/index";
import ProfileM from "./ProfileMenu";
import { FaUserAlt } from "react-icons/fa";
import { FaSignature } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import User from "../MainComponent/User/Index";

export default function Navbar() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index);
  };

  return (
    <>
      <nav>
        <section className="bg-white px-6 py-4 flex items-center">
          <hr
            style={{
              color: "red",
              backgroundColor: " red",
              height: 2,
            }}
          />
          <div className="flex-1 items-center">
            <h1 className="font-bold text-5xl">Signatize</h1>
          </div>
          {/* USER PROFILE */}
          <div className="flex gap-3 items-center ">
            <FaUserAlt
              fontSize="30"
              className="backdrop-opacity-100 text-gray-400"
            />
            <div>
              <ProfileM />
            </div>
          </div>
        </section>

        <section className="bg-black flex border-b-4 border-green-600">
          <button
            className={`bg-black hover:bg-primary text-white hover:text-font-semibold py-5 px-7 inline-flex gap-5 items-center justify-center ${
              toggleState === 1 ? " tabs active-tabs " : "tabs"
            }`}
            onClick={() => toggleTab(1)}
          >
            <FaSignature fontSize="22" />
            <span className="text-xl">My Signatures</span>
          </button>
          <button
            className={`bg-black hover:bg-primary text-white hover:text- font-semibold py-5 px-7 inline-flex gap-5 items-center justify-center ${
              toggleState === 2 ? "tabs active-tabs" : "tabs"
            }`}
            onClick={() => toggleTab(2)}
          >
            <FaSignature fontSize="22" />
            <span className="text-xl ">Create Signature</span>
          </button>
          <button
            className={`bg-black hover:bg-primary text-white hover:text- font-semibold py-5 px-7 inline-flex gap-5 items-center justify-center ${
              toggleState === 3 ? "tabs active-tabs" : "tabs"
            }`}
            onClick={() => toggleTab(3)}
          >
            <FaUser fontSize="22" />
            <span className="text-xl -ml-10">Users</span>
          </button>
          <button
            className={`bg-black hover:bg-primary text-white hover:text- font-semibold py-5 px-7 inline-flex gap-5 items-center justify-center ${
              toggleState === 4 ? "tabs active-tabs" : "tabs"
            }`}
            onClick={() => toggleTab(4)}
          >
            <MdVideoLibrary fontSize="22" />
            <span className="text-xl -ml-10">Tutorials</span>
          </button>
          <button
            className={`bg-black hover:bg-primary text-white hover:text- font-semibold py-5 px-7 inline-flex gap-5 items-center justify-center ${
              toggleState === 5 ? "tabs active-tabs" : "tabs"
            }`}
            onClick={() => toggleTab(5)}
          >
            <IoMdHelpCircle fontSize="22" />
            <span className="text-xl -ml-10">Help</span>
          </button>
        </section>
        <section>
          <div className="">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <div>
                <MySignature />
              </div>
            </div>
            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <div>
                <CreateSignature />
              </div>
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <div>
                <User />
              </div>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}
