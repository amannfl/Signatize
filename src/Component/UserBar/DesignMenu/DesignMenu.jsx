import React, { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import Slider from "@material-ui/core/Slider";
import { BiCircle } from "react-icons/bi";
import { BiSquareRounded } from "react-icons/bi";
import { BiSquare } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import {
  getCounts,
  getColors,
  getFontsizeChange,
  getSpacing,
  getCompactMargins,
} from "../../../redux/CounterSlice";
import { useDispatch, useSelector } from "react-redux";
import "./DesignFonts.css";
import Select from "react-select";

const DesignMenu = () => {
  const [spacing, setSpacing] = useState(false);
  const { colors } = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(getCounts(newValue));
  };

  const handleSpaciing = (e, newSpacing) => {
    dispatch(getSpacing(newSpacing));
    // console.log(dispatch(getSpacing(newSpacing)));
  };

  // fontstyle change

  const fontTypes = [
    {
      id: 1,
      label: "Raleway",
    },
    {
      id: 2,
      label: "Palette Mosaic",
    },
    {
      id: 3,
      label: "Style Script",
    },
    {
      id: 4,
      label: "Open Sans Condensed",
    },
    {
      id: 5,
      label: "Pacifico",
    },
    {
      id: 6,
      label: "Indie Flower",
    },
  ];

  return (
    <>
      <main className="px-4  overflow-y-auto" style={{ height: "599px" }}>
        <section className="flex px-4 ">
          <h1 className="font-semibold text-md flex-1"> LAYOUT</h1>

          <button
            className=" text-md font-semibold flex items-center gap-1"
            style={{ color: "#2ca2f1" }}
          >
            <CgCloseR />
            Reset to Default
          </button>
        </section>

        {/* FIRST SECTION */}
        <section className="grid gap-7 mt-6">
          <div className="flex px-4 ">
            <div className="flex-1 text-gray-600 ">font family</div>

            <div className="">
              <Select
                className=" w-48  border-solid  border-gray-500 font-semibold text-gray-600"
                options={fontTypes}
                onChange={e => dispatch(getFontsizeChange(e.label))}
              ></Select>
            </div>
          </div>

          <div className="flex px-4">
            <div className="flex-1 text-gray-600 ">font size</div>
            <div className="w-48">
              <Slider
                defaultValue={1}
                aria-labelledby="discrete-slider-always"
                onChange={handleChange}
                min={16}
                max={32}
              />{" "}
            </div>
          </div>

          <div className="flex px-4">
            <div className="flex-1 text-gray-600 ">spacing</div>
            <div class="inline-flex">
              <button
                className={
                  spacing === 1
                    ? "text-xs font-semibold bg-gray-100  text-blue-300  px-2 border border-gray-300"
                    : "text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-2 border border-gray-300"
                }
                onClick={e => dispatch(getCompactMargins("10"))}
              >
                Compact
              </button>
              <button
                className={
                  spacing === 2
                    ? "text-xs font-semibold bg-gray-100  text-blue-300  px-2 border border-gray-300"
                    : "text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-2 border border-gray-300"
                }
                onClick={e => dispatch(getCompactMargins("15"))}
              >
                Normal
              </button>
              <button
                className={
                  spacing === 3
                    ? "text-xs font-semibold bg-gray-100  text-blue-300  px-2 border border-gray-300"
                    : "text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-2 border border-gray-300"
                }
                onClick={e => dispatch(getCompactMargins("20"))}
              >
                Spacious
              </button>
            </div>
          </div>

          <div className="flex px-4  items-center">
            <div className="flex-1 text-gray-600">Font color</div>

            {/* RADIO BUTTONS */}
            <div class="inline-flex gap-2">
              <div
                class="w-5 h-5 bg-gray-700 rounded-full"
                onClick={() => dispatch(getColors("#374151"))}
              ></div>
              <div
                class="w-5 h-5 bg-red-700 rounded-full"
                onClick={() => dispatch(getColors("#B91C1C"))}
              ></div>
              <div
                class="w-5 h-5 bg-blue-700 rounded-full"
                onClick={() => dispatch(getColors("#1D4ED8"))}
              ></div>
              <div
                class="w-5 h-5 bg-pink-600 rounded-full"
                onClick={() => dispatch(getColors("#DB2777"))}
              ></div>
              <div
                class="w-5 h-5 bg-blue-600 rounded-full"
                onClick={() => dispatch(getColors("#D97706"))}
              ></div>
              <div
                class="w-5 h-5 bg-yellow-600 rounded-full"
                onClick={() => dispatch(getColors("#059669"))}
              ></div>
              <div
                class="w-5 h-5 bg-green-600 rounded-full"
                onClick={() => dispatch(getColors("#2563EB"))}
              ></div>
              <div
                class="w-5 h-5 bg-green-600 rounded-full"
                onClick={() => dispatch(getColors("#008000"))}
              ></div>
              <div>
                <input
                  style={{ width: "20px", height: "25px", borderRadius: "8px" }}
                  type="color"
                  value={colors}
                  onChange={e => dispatch(getColors(e.target.value))}
                />
              </div>
            </div>
          </div>
        </section>
        {/* IMAGES */}
        <h1 className="font-semibold text-md mt-10 ml-4"> IMAGES</h1>

        <h1 className="text-md font-semibold text-gray-400 ml-4 mt-4">Photo</h1>

        <section className="grid gap-5 mt-6">
          <div className="flex px-4">
            <div className="flex-1 text-gray-600 ">spacing</div>
            <div className="inline-flex">
              <button
                onClick={e => dispatch(getCompactMargins("15"))}
                className={
                  spacing === 1
                    ? " text-xs font-semibold bg-gray-100  text-blue-300  px-5 py-1 border border-gray-300"
                    : " text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-5 py-1 border border-gray-300"
                }
              >
                <BiSquare fontSize="22" />
              </button>
              <button
                className={
                  spacing === 2
                    ? " text-xs font-semibold bg-gray-100  text-blue-300  px-5 py-1 border border-gray-300"
                    : " text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-5 py-1 border border-gray-300"
                }
                onClick={() => setSpacing(2)}
              >
                <BiSquareRounded fontSize="22" />
              </button>
              <button
                className={
                  spacing === 3
                    ? " text-xs font-semibold bg-gray-100  text-blue-300  px-5 py-1 border border-gray-300"
                    : " text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-5 py-1 border border-gray-300"
                }
                onClick={() => setSpacing(3)}
              >
                <BiCircle fontSize="22" />
              </button>
            </div>
          </div>

          <div className="flex px-4">
            <div className="flex-1 text-gray-600 ">Size</div>
            <div className="w-48">
              <Slider
                color="primary"
                defaultValue={40}
                aria-labelledby="discrete-slider-always"
                onChange={handleSpaciing}
                min={15}
                max={40}
              />
            </div>
          </div>

          <div className="flex px-4 items-center">
            <div className="flex-1 text-gray-600 ">Image link</div>
            <div className="flex items-center border-b border-gray-500 ">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none"
                type="text"
                placeholder="www.mywebsite.com"
                aria-label="Full name"
              />
            </div>
          </div>
        </section>

        {/* SOCIAL ICONS */}
        <h1 className="font-semibold text-md mt-10 ml-4"> SOCIAL ICONS</h1>

        <section className="grid gap-6 mt-6 ">
          <div className="flex px-4 ">
            <div className="flex-1 text-gray-600 ">Style</div>
            <div className="inline-flex">
              <button className=" text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-5 py-1 border border-gray-300">
                <FaTwitterSquare fontSize="22" />
              </button>
              <button className=" text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-5 py-1 border border-gray-300">
                <TiSocialTwitterCircular fontSize="32" />
              </button>
              <button className=" text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-5 py-1 border border-gray-300">
                <FaTwitter fontSize="22" />
              </button>
            </div>
          </div>

          <div className="flex px-4 items-center">
            <div className="flex-1 text-gray-600 ">Shape</div>
            <div className="inline-flex">
              <button
                onChange
                className=" text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-5 py-1 border border-gray-300"
              >
                <BiSquare fontSize="22" />
              </button>
              <button className=" text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-6 py-1 border border-gray-300">
                <BiSquareRounded fontSize="22" />
              </button>
              <button className=" text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-6 py-1 border border-gray-300">
                <BiCircle fontSize="22" />
              </button>
            </div>
          </div>
          <div className="flex px-8 items-center">
            <div className="flex-1 text-gray-600 ">Size</div>
            <div className="w-48">
              <Slider color="primary" defaulValue={1} step={3} max={100} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DesignMenu;
