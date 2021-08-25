import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ImFilesEmpty } from "react-icons/im";
import { AiOutlineLink } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiFillCamera } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const Demo = props => {
  const [tabIndex, setTabIndex] = useState(0);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index);
  };

  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div>
            <div className="inline-block  bg-white overflow-hidden shadow-md rounded-sm ">
              {/* TAB LISTS */}
              <div style={{ background: "white" }} className="flex">
                <div className="w-64 bg-gray-300" style={{ height: "600px" }}>
                  <div className="grid bg-gray-300  ">
                    <section>
                      <div className="w-full">
                        <button
                          className={
                            toggleState === 1
                              ? "font-bold py-4 px-4 rounded inline-flex gap-4 text-gray-800 hover:text-blue-600 bg-white w-full"
                              : "font-bold py-4 px-4 rounded inline-flex gap-4 text-gray-800 hover:text-blue-600 "
                          }
                          onClick={() => toggleTab(1)}
                        >
                          <ImFilesEmpty
                            fontSize="30"
                            className="text-gray-500 "
                          />
                          <span className="text-xl">Local Files</span>
                        </button>
                      </div>
                      <div className="w-full">
                        <button
                          className={
                            toggleState === 2
                              ? "font-bold py-4 px-4 rounded inline-flex gap-4 text-gray-800 hover:text-blue-600 bg-white w-full"
                              : "font-bold py-4 px-4 rounded inline-flex gap-4 text-gray-800 hover:text-blue-600 "
                          }
                          onClick={() => toggleTab(2)}
                        >
                          <AiOutlineLink
                            fontSize="30"
                            className="  text-gray-500 "
                          />
                          <span className="text-xl">Direct Link</span>
                        </button>
                      </div>
                      <div className="w-full">
                        <button
                          className={
                            toggleState === 3
                              ? "font-bold py-4 px-4 rounded inline-flex gap-4 text-gray-800 hover:text-blue-600 bg-white w-full"
                              : "font-bold py-4 px-4 rounded inline-flex gap-4 text-gray-800 hover:text-blue-600 "
                          }
                          onClick={() => toggleTab(3)}
                        >
                          <FaFacebook
                            fontSize="30"
                            className="  text-gray-500 "
                          />
                          <span className="text-xl">Facebook</span>
                        </button>
                      </div>
                      <div className="w-full">
                        <button
                          className={
                            toggleState === 4
                              ? "font-bold py-4 px-4 rounded inline-flex gap-4 text-gray-800 hover:text-blue-600 bg-white w-full"
                              : "font-bold py-4 px-4 rounded inline-flex gap-4 text-gray-800 hover:text-blue-600 "
                          }
                          onClick={() => toggleTab(4)}
                        >
                          <GrInstagram
                            fontSize="30"
                            className="  text-gray-500 "
                          />
                          <span className="text-xl">Instagram</span>
                        </button>
                      </div>
                      <div className="w-full">
                        <button
                          className={
                            toggleState === 5
                              ? "font-bold py-4 px-4 rounded inline-flex gap-4 text-gray-800 hover:text-blue-600 bg-white w-full"
                              : "font-bold py-4 px-4 rounded inline-flex gap-4 text-gray-800 hover:text-blue-600 "
                          }
                          onClick={() => toggleTab(5)}
                        >
                          <AiFillCamera
                            fontSize="30"
                            className="  text-gray-500 "
                          />
                          <span className="text-xl">Camera</span>
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
                {/* TAB PANELS */}
                <div className="" style={{ width: "800px" }}>
                  <div className="float-right mr-8 mt-6 text-gray-400 hover:text-blue-500">
                    <button onClick={props.handleClose}>
                      <ImCross fontSize="24" />
                    </button>
                  </div>

                  {toggleState === 1 ? (
                    <section className="text-center mt-52 ">
                      <h1 className="text-5xl">Drag & drop</h1>
                      <h1 className="text-5xl">any files</h1>
                      <span className="text-md">or</span>
                      <br />
                      <br />
                      <button class="bg-blue-500 hover:bg-blue-700 text-white text-xl font-semibold py-2 px-4 rounded w-60">
                        Choose a local file
                      </button>
                    </section>
                  ) : null}

                  {toggleState === 2 ? (
                    <section className="text-center mt-52 ">
                      <h1 className="text-2xl font-bold">File from the Web</h1>
                      <h1 className="text-xl">Grab any file off the web.</h1>
                      <span className="xl">Just provide the link.</span>
                      <br />
                      <br />
                      <input
                        className=" border border-black rounded py-3 px-3 
                           text-gray-700 mb-3 leading-tight focus:outline-ring focus:shadow-outline w-72"
                        id="password"
                        type="password"
                        placeholder="Past Your link here"
                      />
                      <br />
                      <button class="bg-gray-400 hover:bg-blue-700 text-white text-xl  py-2 px-4 rounded ">
                        Upload
                      </button>
                    </section>
                  ) : null}

                  {toggleState === 3 ? (
                    <section className="text-center mt-52 ">
                      <h1 className="text-2xl font-bold">
                        Upload a file from Facebook
                      </h1>
                      <h1 className="text-lg">
                        Get images from your albums.
                        <br /> We play nice. You just need to login.
                      </h1>
                      <br />
                      <button class="bg-blue-500 hover:bg-blue-700 text-white text-xl font-semibold py-2 px-4 rounded w-60">
                        Connect to Facebook
                      </button>
                      <br />
                      <br />
                      <span className="text-gray-400 font-semibold">
                        We will open a new page to connect your Facebook
                        account.
                      </span>
                    </section>
                  ) : null}

                  {toggleState === 4 ? (
                    <section className="text-center mt-52 ">
                      <h1 className="text-2xl font-bold">
                        Upload a file from Instagram
                      </h1>
                      <h1 className="text-lg">
                        Get images from your albums.
                        <br /> We play nice. You just need to login.
                      </h1>
                      <br />
                      <button class="bg-blue-500 hover:bg-blue-700 text-white text-xl font-semibold py-2 px-4 rounded w-60">
                        Connect to Instagram
                      </button>
                      <br />
                      <br />
                      <span className="text-gray-400 font-semibold">
                        We will open a new page to connect your Instagram
                        account.
                      </span>
                    </section>
                  ) : null}

                  {toggleState === 5 ? (
                    <section className="text-center mt-52 ">
                      <h1 className="text-2xl font-bold">
                        File from web camer
                      </h1>

                      <br />
                      <button
                        style={{ border: "1px solid skyblue" }}
                        class="bg-white text-blue-400 font-bold py-2 px-4 border-2  border-blue-700 rounded"
                      >
                        Request permission again
                      </button>
                    </section>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default Demo;
