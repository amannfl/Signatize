import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGoogleCircle } from "react-icons/ai";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function LoginMenu() {
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
        onClick={handleOpen}
        type="button"
        className="text-xs font-bold px-6  py-2 bg-black hover:bg-white hover:text-black text-white border 
            border-white rounded-md flex gap-1 align-middle items-center"
      >
        Login
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <div>
            <div className="inline-block align-middle max-w-md p-6 my-20 bg-white overflow-hidden shadow-md rounded-sm ">
              <div className="grid gap-5">
                <h1 className="text-2xl font-bold">Sign in to WiseStamp</h1>
                <div className="w-72  py-2 bg-blue-500  rounded-md shadow-sm hover:shadow-2xl border-2 border-opacity-100 hover:border-opacity-20">
                  <a href="" className="flex gap-8 px-4 align-middle">
                    <AiFillGoogleCircle fontSize="30" className="text-white" />
                    <span className="text-md text-white">
                      Sign in with Google
                    </span>
                  </a>
                </div>
                <div className="w-72  py-2 bg-white border-blue-700 rounded-md shadow-sm hover:shadow-2xl border-2 border-opacity-100 hover:border-opacity-20">
                  <a href="" className="flex gap-8 px-4 align-middle  ">
                    <FaFacebookF fontSize="24" className="text-blue-600" />
                    <span className="text-md text-blue-700">
                      Sign in with Facebook
                    </span>
                  </a>
                </div>
                <div className="w-72 py-2   border-blue-400  rounded-md  shadow-sm hover:shadow-2xl border-2 border-opacity-100 hover:border-opacity-20">
                  <a href="" className="flex gap-8 px-4 align-middle ">
                    <HiOutlineMail fontSize="24" className=" text-blue-600" />
                    <span className="text-md text-blue-400">
                      Sign in with email
                    </span>
                  </a>
                </div>
                <div className="mt-10 text-center">
                  <button className="text-blue-500 font-semibold">
                    Create an account
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
