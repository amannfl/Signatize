import React, { useState } from "react";
import MainModal from "../../UserBar/MainModal";
import img1 from "../../../Images/default-sig-photo.jpg";
import img2 from "../../../Images/kind_regards.png";
import img3 from "../../../Images//your-logo.png";
import Footer from "../../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const [showAlert, setShowAlert] = useState(false);
  const name = useSelector(state => state.counter.name);
  const company = useSelector(state => state.counter.company);
  const position = useSelector(state => state.counter.position);
  const email = useSelector(state => state.counter.email);
  const phonenumber = useSelector(state => state.counter.phonenumber);
  const website = useSelector(state => state.counter.website);
  const address = useSelector(state => state.counter.address);
  const facebookLink = useSelector(state => state.counter.facebookLink);
  const instagramLink = useSelector(state => state.counter.instagramLink);
  const twitterLink = useSelector(state => state.counter.twitterLink);
  const youtubeLink = useSelector(state => state.counter.youtubeLink);
  const twitterLinkA = useSelector(state => state.counter.twitterLinkA);
  const twitterLinkB = useSelector(state => state.counter.twitterLinkB);
  const twitterLinkC = useSelector(state => state.counter.twitterLinkC);
  const Templates = useSelector(state => state.counter.Templates);

  const copyToClip = () => {
    setShowAlert(!showAlert);
    setTimeout(() => {
      setShowAlert(false);
    }, 1100);
    // var sel, range;
    // var el = document.getElementById("elementID"); //get element id
    // if (window.getSelection && document.createRange) {
    //   //Browser compatibility
    //   sel = window.getSelection();
    //   if (sel.toString() == "") {
    //     //no text selection
    //     window.setTimeout(function () {
    //       range = document.createRange(); //range object
    //       range.selectNodeContents(el); //sets Range
    //       sel.removeAllRanges(); //remove all ranges from selection
    //       sel.addRange(range); //add Range to a Selection.
    //       document.execCommand("copy"); //make selection.
    //     }, 1);
    //   }
    // } else if (document.selection) {
    //   //older ie
    //   sel = document.selection.createRange();
    //   if (sel.text == "") {
    //     //no text selection
    //     range = document.body.createTextRange(); //Creates TextRange object
    //     range.moveToElementText(el); //sets Range
    //     range.select();
    //     document.execCommand("copy"); //make selection.
    //   }
    // }
  };
  return (
    <>
      <main className="flex bg-gray-200">
        <MainModal />
        {/* <section className="px-10">
          <div className="m-auto  shadow-2xl rounded-md">
            <div className=" h-7 bg-gray-300  mt-12 flex rounded-t pt-2 px-4">
              <div className="h-56 bg-black-300 flex w-full">
                <div className="bg-gray-200 w-3 h-3 rounded-full"></div>
                <div className="bg-gray-200 w-3 h-3 rounded-full mr-2 ml-2"></div>
                <div className="bg-gray-200 w-3 h-3 rounded-full"></div>
              </div>
            </div>
            <div className=" bg-white pt-2 px-4">
              <div className="text-gray-400 text-sm border-b-2 py-1">
                To:
                <span className="border-solid border-2 border-light-blue-500 font-medium text-gray-600 rounded-full px-2">
                  Troy McLaughlin
                </span>
              </div>
            </div>
            <div className=" bg-white pt-2 px-4">
              <div className="text-gray-400 text-sm border-b-2 py-1">
                Subject:
                <span className="font-medium text-gray-600 rounded-full px-2">
                  Check out my new email signature
                </span>
              </div>
              <a href="#">
                <img src={img2} alt="img" className="w-1/4 py-3" />
              </a>
            </div>
            <div className="flex px-4 bg-white" id="elementID">
              <div className="border-r-2 border-gray-500">
                <a href="#">
                  <img src={img1} alt="" className="w-50 mr-10 px-2" />
                </a>
              </div>
              <div className="px-4">
                <h4 className="font-bold text-gray-500 text-lg leading-none">
                  <h1>{name}</h1>
                
                </h4>
                <span className="font-bold text-gray-400 text-sm">
                  {position}
                  <h1>{company}</h1>
                </span>
                <ul className="text-sm mt-1 float-left">
                  <li className="float-left">
                    <a href="tel:212-931-0000">{phonenumber}</a>
                  </li>
                  <li className="float-left px-3">
                    <a href="#">{website}</a>
                  </li>
                  <li className="float-left">
                    <a href="jason@je-marketing.com">{email}</a>
                  </li>
                  <li className="float-left">
                    <a href="#">{address}</a>
                  </li>
                </ul>
                <div className="mt-4 float-left">
                  <a href="" onClick={facebookLink}>
                    <img
                      width="16"
                      height="16"
                      src="https://cdn.gifo.wisestamp.com/social/facebook/3b5998/32/0/background.png"
                      style={{ float: " left", border: "none", border: "0" }}
                    />
                  </a>
                  <a href="">
                    <a href="">
                      <a href="" onClick={twitterLink}>
                        <img
                          width="16"
                          height="16"
                          src="https://cdn.gifo.wisestamp.com/social/linkedin/0077b5/32/0/background.png"
                          style={{
                            float: " left",
                            border: "none",
                            border: "0",
                          }}
                          className="mr-2 ml-2"
                        />
                      </a>
                    </a>
                  </a>
                  <a href="">
                    <a href="" onClick={twitterLinkA}>
                      <img
                        width="16"
                        height="16"
                        src="https://cdn.gifo.wisestamp.com/social/twitter/55acee/32/0/background.png"
                        style={{ float: " left", border: "none", border: "0" }}
                        className="mr-2"
                      />
                    </a>
                  </a>
                  <a href="" onClick={twitterLinkB}>
                    <img
                      width="16"
                      height="16"
                      src="https://cdn.gifo.wisestamp.com/social/instagram/E4405F/32/0/background.png"
                      style={{ float: " left", border: "none", border: "0" }}
                    />
                  </a>
                  <img src={img3} alt="logo" className="pt-4 w-3/4" />
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-800 px-4 float-left w-full pt-3 pb-4 bg-white">
              <span className="float-left w-100">
                Create your own{" "}
                <code className="text-red-900">email signature</code>
              </span>
            </div>
          </div>
        </section> */}
        <div style={{ marginLeft: "3rem", marginTop: "2rem", width: "50rem" }}>
          {<h1>{Templates}</h1>}

          {showAlert ? (
            <div class="alert alert-success mt-4 w-8/12 ">
              <div class="flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 mx-2 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                <label>Copied to Clipboard Successfully</label>
              </div>
            </div>
          ) : (
            <button
              onClick={copyToClip}
              class=" float-right mt-4 inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-green-500 rounded-md cursor-pointer hover:bg-green-600"
            >
              Click to Copy
            </button>
          )}

          {/* <button onClick={copyToClip} className="  mt-7 bg-green-400 px-4 py-2 text-white rounded-xl shadow-2xl hover:bg-green-600">Click to Copy</button> */}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Index;
