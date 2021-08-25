import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { AiTwotoneStar } from "react-icons/ai";
import day from "../../../Images/30day.png";
import day2 from "../../../Images/ssl.png";
import PaymentMenu from "./PaymentMenu";
const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function UpgradeMenu() {
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
        className=" text-xs font-bold px-4 py-2 bg-pink-500 hover:bg-pink-800 text-white rounded-md flex gap-1"
      >
        <AiTwotoneStar fontSize="17" />
        Upgrade Now
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
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
            <div className="inline-block align-middle bg-white overflow-hidden shadow-md rounded-sm ">
              <div className="flex ">
                <div className="bg-gray-900 px-16 py-12">
                  <h1 className="text-3xl text-white font-semibold">
                    Get WiseStamp PRO
                  </h1>
                  {/* billed  */}
                  <div>
                    <div className="flex mt-4 ml-16">
                      <h1 className="text-5xl text-white">$5</h1>
                      <span className="text-white text-xs mt-2 ">80/mo</span>
                    </div>
                    <h1 className="text-white text-sm ml-16 mt-1">
                      billed annually
                    </h1>
                  </div>
                  <ul className="mt-8 grid gap-2">
                    <li className="flex gap-2 items-center text-white align-middle ">
                      <AiTwotoneStar />
                      Premium Templates
                    </li>
                    <li className="flex gap-2 items-center text-white align-middle">
                      <AiTwotoneStar />
                      Advanced style & design
                    </li>
                    <li className="flex gap-2 items-center text-white align-middle">
                      <AiTwotoneStar />
                      Unlimited signatures
                    </li>
                    <li className="flex gap-2 items-center text-white align-middle">
                      <AiTwotoneStar />
                      Remove WiseStamp branding
                    </li>
                    <li className="flex gap-2 items-center text-white align-middle">
                      <AiTwotoneStar />
                      Add animation & effects to your imag
                    </li>
                    <li className="flex gap-2 items-center text-white align-middle">
                      <AiTwotoneStar />
                      Export to iPhone, Outlook etc.
                    </li>
                  </ul>
                  <h1 className="text-green-500 font-semibold ml-16 mt-5">
                    Enter promo code
                  </h1>
                  <div className="flex gap-3 -ml-8 mt-6">
                    <img src={day} alt="" />
                    <img src={day2} alt="" />
                  </div>
                </div>
                {/* Second item  */}
                <div>
                  <PaymentMenu handleClose={handleClose} />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
