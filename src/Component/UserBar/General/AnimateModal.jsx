import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { MdSlowMotionVideo } from "react-icons/md";
import { VscAdd } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import UpgradeMenu from "../../Navbar/UpgradeMenu/UpgradeMenu";
import Animate1 from "../../../Images/imgProfile.png";
import Animate2 from "../../../Images/example.png";
import Transition1 from "../../../Images/shadow.png";
import Transition2 from "../../../Images/ball.png";
import Transition3 from "../../../Images/stick.png";
import Transition4 from "../../../Images/dots.png";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function AnimateModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        class=" font-bold ml-4  inline-flex items-center gap-1 align-middle text-blue-400"
        onClick={handleOpen}
      >
        <MdSlowMotionVideo />
        <span>Animate</span>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="bg-white">
            <div className="float-right mr-2 mt-2">
              <button
                onClick={handleClose}
                className="transition duration-400 ease-in-out  transform hover:-rotate-180 "
              >
                <ImCross fontSize="20" />
              </button>
            </div>
            <div className="  w-full px-9 py-2">
              <h1 className="text-3xl text-center mt-9">Animation & Effects</h1>
              <h1 className="text-xl font-bold mt-5">
                Upload your photo / logo
              </h1>
              {/* UPLOAD ELEMENTS */}
              <div className="flex gap-20 mt-8">
                <div className="grid">
                  {/* GRID FIRST ITEM */}
                  <div className="flex gap-5">
                    <button
                      class="bg-white  py-3 px-2 rounded flex gap-9  "
                      style={{ border: "1px solid black" }}
                    >
                      <img src={Animate1} alt="" />
                      <div className="text-gray-500 ">
                        <VscAdd fontSize="32" className="font-bold ml-6" />
                        <span>Logo / Photo</span>
                      </div>
                    </button>
                    <button
                      class="bg-white  py-3 px-2 rounded flex gap-9  "
                      style={{ border: "1px solid black" }}
                    >
                      <img src={Animate1} alt="" />
                      <div className="text-gray-500 ">
                        <VscAdd fontSize="32" className="font-bold ml-6" />
                        <span>Logo / Photo</span>
                      </div>
                    </button>
                  </div>

                  <h1 className="text-xl font-semibold mt-5">Photo Effects</h1>
                  {/* GRID SECOND ITEM */}
                  <div className="flex gap-5 mt-5">
                    <button className="w-14 h-16 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                      <img src={Animate2} />
                    </button>
                    <button className="w-14 h-16 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                      <img src={Animate2} />
                    </button>
                    <button className="w-14 h-16 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                      <img src={Animate2} />
                    </button>
                    <button className="w-14 h-16 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                      <img src={Animate2} />
                    </button>
                    <button className="w-14 h-16 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                      <img src={Animate2} />
                    </button>
                    <button className="w-14 h-16 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                      <img src={Animate2} />
                    </button>
                  </div>
                  <p className="text-sm text-red-600 font-semibold">
                    Clear photo effects
                  </p>

                  <h1 className="text-xl font-semibold mt-5">
                    Transition effects
                  </h1>
                  <div className="flex gap-2 mt-1 ">
                    <button className="bg-gray-200 w-12 h-12 rounded-none p-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                      <img src={Transition1} alt="" width="30" className="" />
                    </button>
                    <button className="bg-gray-200 w-12 h-12 rounded-none p-4 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                      <img src={Transition2} alt="" width="20" className="" />
                    </button>
                    <button className="bg-gray-200 w-12 h-12 rounded-none transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                      <img
                        src={Transition3}
                        alt=""
                        width="10"
                        className="ml-9"
                      />
                    </button>
                    <button className="bg-gray-200 w-12 h-12 rounded-none p-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                      <img src={Transition4} alt="" width="30" className="" />
                    </button>
                  </div>
                </div>

                {/* SECOND ITEM */}
                <div>
                  <div className="bg-gray-200 w-64 h-56 rounded-md shadow-2xl px-9 py-5">
                    <img src={Animate2} alt="" width="190" className="" />
                  </div>
                  <button
                    className=" text-white font-bold py-3 px-8 rounded mt-11 ml-16 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
                    style={{ background: "#1CB7EB" }}
                  >
                    Unlock with PRO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
