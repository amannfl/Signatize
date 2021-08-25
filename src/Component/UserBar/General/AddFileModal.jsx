import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ImCross } from "react-icons/im";
import { FiPlus } from "react-icons/fi";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function LoginMenu() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState("");
  // const [name, setName] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        className="inline-flex  items-center mt-4"
        style={{ color: "#3284e7" }}
        onClick={handleOpen}
      >
        <FiPlus fontSize="12" />
        <span className=" font-semibold">Add a field</span>
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
          <div className="my-24">
            <button
              onClick={handleClose}
              className="transition duration-300 ease-in-out  transform hover:-rotate-180 ml-72 mb-3 text-white"
            >
              <ImCross fontSize="20" />
            </button>
            <div className="   p-6  bg-white  shadow-lg  rounded-lg text-center ">
              <h1 className="text-2xl  font-semibold">Add s Field </h1>
              <div className="grid  mt-6">
                <select class=" w-64 border-b-2 border-solid  border-gray-500 outline-white font-semibold text-gray-600 ">
                  <option value={0}>Choose field label</option>
                  <option value={0}>No</option>
                  <option value={2}>Maybe</option>
                  <option value={3}>Maybe</option>
                  <option value={4}>Maybe</option>
                  <option value={5}>Maybe</option>
                  <option value={6}>Maybe</option>
                  <option value={7}>Maybe</option>
                  <option value={8}>Maybe</option>
                </select>
                <div className="w-64  py-2 bg-blue-400   rounded-md shadow-sm hover:shadow-2xl border-2 border-opacity-100 hover:border-opacity-20 mt-6">
                  <button
                    href=""
                    className=" px-16 font-bold  text-white text-md"
                  >
                    Add d field
                  </button>
                </div>
                <div className="mt-5 text-center">
                  <button className="text-gray-400 font-bold">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
