import { useState } from "react";

import General from "../UserBar/General/Index";
import SocialMenu from "./SocialMenu/SocialMenu.";
import DesignMenu from "./DesignMenu/DesignMenu";
import TemplateMenu from "./TemplateMenu/TemplateMenu";
import "./MainElement.css";
import Widgets from "../UserBar/widgets/index";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { RiPencilFill } from "react-icons/ri";
import { BiShareAlt } from "react-icons/bi";
import { CgTemplate } from "react-icons/cg";
import { RiPaintFill } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
// import { useDispatch, useSelector } from 'react-redux'
// import { getCompany,getName,getAddersh,getEmail,getPhonenumber,getPosition,getWebsite } from '../../redux/CounterSlice';

const MainModal = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <main
      style={{ width: "", height: "694px" }}
      className="shadow-2xl bg-white"
    >
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <div
          style={{ width: "480px", background: "#F8F9FB" }}
          className="shadow-md "
        >
          <TabList>
            <div className="flex gap-6 ml-4 py-4 ">
              <Tab>
                <div className=" grid w-9 h-7 justify-center">
                  <RiPencilFill fontSize="21" className="text-gray-500 ml-3" />
                  <p className="text-sm text-gray-500 ">General</p>
                </div>
              </Tab>
              <Tab>
                <div className="w-10 h-10 ">
                  <BiShareAlt fontSize="23" className="text-gray-500 ml-2" />
                  <p className="text-sm text-gray-500">Social</p>
                </div>
              </Tab>
              <Tab>
                <div className="w-10 h-10 ">
                  <CgTemplate fontSize="22" className="text-gray-500 ml-2" />
                  <p className="text-sm text-gray-500 -ml-2">Template</p>
                </div>
              </Tab>
              <Tab>
                <div className="w-10 h-10 ">
                  <RiPaintFill fontSize="23" className="text-gray-500 ml-2" />
                  <p className="text-sm text-gray-500">Design</p>
                </div>
              </Tab>
              <Tab>
                <div className="w-10 h-10 ">
                  <AiOutlineAppstoreAdd
                    fontSize="21"
                    className="text-gray-500 ml-2"
                  />
                  <p className="text-sm text-gray-500 -ml-1">Widgets</p>
                </div>
              </Tab>
            </div>
          </TabList>
        </div>
        {/* FIRST TAB PANEL */}
        <TabPanel>
          <General />
        </TabPanel>

        {/* SECOND TAB PANEL */}
        <TabPanel>
          <SocialMenu />
        </TabPanel>

        {/* THIRD TAB PANEL */}
        <TabPanel>
          <TemplateMenu />
        </TabPanel>
        {/* FOURTH TAB PANEL */}
        <TabPanel>
          <DesignMenu />
        </TabPanel>
        {/* FIFTH TAB PANEL */}
        <TabPanel>
          <Widgets />
        </TabPanel>
      </Tabs>
    </main>
  );
};
export default MainModal;
