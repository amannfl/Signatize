import React from "react";
import { ImInsertTemplate } from "react-icons/im";
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
import {
  getTemplateA,
  getTemplateB,
  getTemplateC,
  getTemplateD,
  getTemplateE,
  getTemplateF,
  getTemplateG,
  getTemplateH,
} from "../../../redux/CounterSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import TemplateModal from "./TemplateModal";

const TemplateMenu = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="px-4  overflow-y-auto" style={{ height: "599px" }}>
        <h1 className="font-semibold text-md uppercase">Free Templates</h1>

        <div className="flex gap-3 mt-3 ">
          <button
            className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl"
            onClick={() => dispatch(getTemplateA())}
          >
            <img src={Template1} alt="" />
            <span className="text-sm font-semibold ">classic</span>
          </button>
          <button
            className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
            onClick={() => dispatch(getTemplateB())}
          >
            <img src={Template2} alt="" />
            <span className="text-sm font-semibold  ">Horizontal</span>
          </button>
        </div>

        <h1 className="font-semibold text-md uppercase mt-5">PRO Templates</h1>
        {/* SECOND TEMPLATE GROUP */}
        <div className="flex gap-3 mt-3">
          <button
            className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
            onClick={() => dispatch(getTemplateC())}
          >
            <img src={Template3} alt="" />
            <div className="ml-12 inline-flex  items-center gap-1">
              <span className="text-xs font-semibold  ">Wide</span>
              <button className="bg-pink-600 text-white text-xs rounded px-1">
                PROs
              </button>
            </div>
          </button>
          <button
            className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
            onClick={() => dispatch(getTemplateD())}
          >
            <img src={Template4} alt="" />
            <div className="ml-12 inline-flex items-center gap-1">
              <span className="text-xs font-semibold">Compact</span>
              <button className="bg-pink-600 text-white text-xs rounded px-1">
                PRO
              </button>
            </div>
          </button>
        </div>

        {/* THIRD TEMPLATE GROUP */}
        <div className="flex gap-3 mt-6">
          <button
            className="w-52 h-48 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
            onClick={() => dispatch(getTemplateE())}
          >
            <img src={Template5} alt="" />
            <div className="ml-12 inline-flex  items-center gap-1">
              <span className="text-xs font-semibold  ">Stacked</span>
              <button className="bg-pink-600 text-white text-xs rounded px-1">
                PRO
              </button>
            </div>
          </button>
          <button
            className="w-52 h-48 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
            onClick={() => dispatch(getTemplateF())}
          >
            <img src={Template6} alt="" />
            <div className="ml-12 inline-flex  items-center gap-1">
              <span className="text-xs font-semibold  ">Social</span>
              <button className="bg-pink-600 text-white text-xs rounded px-1">
                PRO
              </button>
            </div>
          </button>
        </div>

        {/* THIRD TEMPLATE GROUP */}
        <div className="flex gap-3 mt-6">
          <button
            className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
            onClick={() => dispatch(getTemplateG())}
          >
            <img src={Template7} alt="" />
            <div className="ml-12 inline-flex items-center gap-1">
              <span className="text-xs font-semibold">Strip</span>
              <button className="bg-pink-600 text-white text-xs rounded px-1">
                PRO
              </button>
            </div>
          </button>
          <button
            className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
            onClick={() => dispatch(getTemplateH())}
          >
            <img src={Template8} alt="" />
            <div className="ml-8 inline-flex items-center gap-1">
              <span className="text-xs font-semibold">Right side</span>
              <button className="bg-pink-600 text-white text-xs rounded px-1">
                PRO
              </button>
            </div>
          </button>
        </div>

        {/* FOURTH TEMPLATE GROUP */}
        <div className="flex gap-3 mt-6">
          <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl">
            <img src={Template9} alt="" />
            <div className="ml-8 inline-flex items-center gap-1">
              <span className="text-xs font-semibold">Central</span>
              <button className="bg-pink-600 text-white text-xs rounded px-1">
                PRO
              </button>
            </div>
          </button>
          <button className="w-52 h-40 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl">
            <img src={Template10} alt="" />
            <div className="ml-11 inline-flex items-center gap-1">
              <span className="text-xs font-semibold">TopBar</span>
              <button className="bg-pink-600 text-white text-xs rounded px-1">
                PRO
              </button>
            </div>
          </button>
        </div>

        {/* FIFTH TEMPLATE GROUP */}
        <div className="flex gap-3 mt-6 mb-6">
          <button className="w-52 h-48 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl">
            <img src={Template11} alt="" />
            <div className="ml-8 inline-flex items-center gap-1">
              <span className="text-xs font-semibold">Corporate</span>
              <button className="bg-pink-600 text-white text-xs rounded px-1">
                PRO
              </button>
            </div>
          </button>
          <button className="w-52 h-48 border-2 border-solid py-6 px-4 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl">
            <img src={Template12} alt="" />
            <div className="ml-8 inline-flex items-center gap-1">
              <span className="text-xs font-semibold">Footer</span>
              <button classNameName="bg-pink-600 text-white text-xs rounded px-1">
                PRO
              </button>
            </div>
          </button>
        </div>

        <section>
          <button
            className="font-bold py-2 px-8 rounded inline-flex gap-3 text-white hover:text-white bg-blue-500 hover:bg-blue-900 ml-16 border-2 border-dotted border-yellow mt-6 mb-6"
            onClick={handleOpen}
          >
            <ImInsertTemplate fontSize="30" />
            <span className="text-lg">MORE TEMPLATES</span>
          </button>
          <TemplateModal open={open} handleClose={handleClose} />
        </section>
      </div>
    </>
  );
};

export default TemplateMenu;
