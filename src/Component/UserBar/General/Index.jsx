import React, { useState } from "react";
import UserModal from "./UserModal";
import AddFileModal from "./AddFileModal";
import AnimateModal from "./AnimateModal";
import TextField from "@material-ui/core/TextField";

import { useDispatch, useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import {
  getCompany,
  getName,
  getAddersh,
  getEmail,
  getPhonenumber,
  getPosition,
  getWebsite,
} from "../../../redux/CounterSlice";

const Index = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const {
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
  } = useSelector(state => state.counter);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <main className="flex gap-7 ml-2 ">
        <div>
          <h1 className="font-semibold">SIGNATURE GENERAL</h1>
          <ul className="grid gap-1">
            <TextField
              id="standard-basic"
              label="Name"
              value={name}
              style={{ width: "280px" }}
              inputProps={{
                maxlength: 18,
              }}
              onChange={e => dispatch(getName(e.target.value))}
            />
            <TextField
              id="standard-basic"
              label="Company"
              value={company}
              style={{ width: "280px" }}
              inputProps={{
                maxlength: 25,
              }}
              onChange={e => dispatch(getCompany(e.target.value))}
            />
            {/* <TextField
              id="standard-basic"
              label="Position"
              value={position}
              style={{ width: "280px" }}
              inputProps={{
                maxlength: 25,
              }}
              onChange={e => dispatch(getPosition(e.target.value))}
            /> */}
            <TextField
              id="standard-basic"
              label="Department"
              style={{ width: "280px" }}
            />
            <TextField
              id="standard-basic"
              label="Phone"
              value={phonenumber}
              style={{ width: "280px" }}
              inputProps={{
                maxlength: 10,
              }}
              onChange={e => dispatch(getPhonenumber(e.target.value))}
            />
            <TextField
              id="standard-basic"
              label="Mobile"
              style={{ width: "280px" }}
            />
            <TextField
              id="standard-basic"
              label="Website"
              value={website}
              style={{ width: "280px" }}
              inputProps={{
                maxlength: 25,
              }}
              onChange={e => dispatch(getWebsite(e.target.value))}
            />
            <TextField
              id="standard-basic"
              label="Email"
              value={email}
              style={{ width: "280px" }}
              inputProps={{
                maxlength: 20,
              }}
              onChange={e => dispatch(getEmail(e.target.value))}
            />
            <TextField
              id="standard-basic"
              label="Address"
              value={address}
              style={{ width: "280px" }}
              inputProps={{
                maxlength: 30,
              }}
              onChange={e => dispatch(getAddersh(e.target.value))}
            />
            <TextField
              id="standard-basic"
              label="Skype"
              style={{ width: "280px" }}
            />
          </ul>
          {/* ADD FILE MODAL */}
          <div>{/* <AddFileModal /> */}</div>
        </div>
        {/* USER BUTTON*/}
        <div>
          <div className="w-32 h-28 border-2 mt-16 ">
            <button className="absolute mt-8 ml-10" onClick={handleOpen}>
              <FaUserAlt fontSize="50" />
            </button>
            <UserModal open={open} handleClose={handleClose} />
          </div>
          <AnimateModal />
        </div>
      </main>
    </>
  );
};

export default Index;
