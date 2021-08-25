import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ImCross } from "react-icons/im";

import Template1 from "../../../Images/classic_v2.svg";
import Template2 from "../../../Images/horizontal_v2.svg";
import Template3 from "../../../Images/wide_v2.svg";
import Template4 from "../../../Images/compact_v2.svg";
import Template5 from "../../../Images/stacked_v2.svg";
import Template6 from "../../../Images/social_v2.svg";
import Template7 from "../../../Images/strip_v2.svg";
import Template8 from "../../../Images/rightside_v2.svg";
import Template9 from "../../../Images/central_v2.svg";
import Template10 from "../../../Images/topbar_v2.svg";
import Template11 from "../../../Images/corporate_v2.svg";
import Template12 from "../../../Images/footer_v2.svg";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function AnimateModal(props) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <main className="bg-gray-700 border-0 ">
            <div className="float-right mr-5 mt-5">
              <button
                onClick={props.handleClose}
                className=" text-white transition duration-400 ease-in-out  transform hover:-rotate-180"
              >
                <ImCross fontSize="24" />
              </button>
            </div>
            <h1 className="text-center mt-10 uppercase font-bold text-2xl text-green-400">
              All templates
            </h1>

            <hr className="bg-primary h-2 mt-6" />
            <section
              className="grid px-28 border-0 bg-white overflow-y-auto "
              style={{ height: "670px" }}
            >
              <div className="flex py-8 gap-12">
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template1} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template2} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template3} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template4} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
              </div>
              <div className="flex gap-12 py-8">
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template5} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template5} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template7} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template8} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
              </div>
              <div className="flex gap-12 py-8">
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template9} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template10} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template12} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template1} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
              </div>
              <div className="flex gap-12 py-8">
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template7} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template2} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template3} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
                <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                  <img src={Template4} alt="" />
                  <span className="text-sm font-semibold ">classic</span>
                </button>
              </div>
            </section>
          </main>
        </Fade>
      </Modal>
    </div>
  );
}
