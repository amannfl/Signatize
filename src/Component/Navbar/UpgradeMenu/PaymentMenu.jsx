import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabPanel, TabList } from "react-tabs";
import pay from "../../../Images/payment-credit-card.png";

import pay2 from "../../../Images/payment-paypal.png";
import paypalImg from "../../../Images/paypal-button.png";

import { ImCross } from "react-icons/im";

const PaymentMenu = ({ handleClose }) => {
  const [visaResult, setVisaResult] = useState(true);
  return (
    <div>
      <div className="">
        <div className="float-right -mt-9 mr-6">
          <button
            onClick={handleClose}
            className="transition duration-400 ease-in-out transform hover:-rotate-180"
          >
            <ImCross />
          </button>
        </div>

        <section className="border-b-0">
          <div className="flex gap-8 px-4 items-center mt-12 border-0">
            <div className="border-none">
              <button
                className="flex items-center gap-2 bg-none"
                onClick={() => setVisaResult(!visaResult)}
              >
                {/* <input
                  type="radio"
                  className="h-4 w-4 text-blue-300 rounded shadow-xl"
                /> */}
                <img src={pay} alt="" width="202px" />
              </button>
            </div>
            <div className="border-none">
              <button className="flex h-6 gap-2 items-center">
                <input
                  type="radio"
                  className="h-4 w-4 text-blue-300 rounded shadow-xl"
                />
                <img src={pay2} alt="" width="90" height="30px" />
              </button>
            </div>
          </div>
        </section>

        <article>
          {visaResult ? (
            <div>
              <form className="px-5 ml-4 mt-6">
                <div className="grid gap-5">
                  <input
                    type="name"
                    placeholder="Name on Card"
                    required
                    className="w-96 h-12 p-3 border-2 border-gray-400 rounded-md mt-2 text-md"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="w-96 h-12 p-3 border-2 border-gray-400 rounded-md mt-2 text-lg"
                  />
                  {/* CREDIT CARD INPUT */}
                  <div class="flex border-2 border-gray-400 w-96 rounded-lg">
                    <input
                      type="text"
                      id="payment"
                      class="w-5/6 flex-1 text-md bg-grey-light text-grey-darkest rounded-l p-3 focus:outline-none"
                      placeholder="Card Number"
                    />
                    <input
                      type="text"
                      id="payment"
                      class="w-1/6 inline-block text-md bg-grey-light text-grey-darkest p-3 focus:outline-none"
                      placeholder="MM / YY"
                    />
                    <input
                      type="text"
                      id="payment"
                      class="w-1/6 inline-block text-md bg-grey-light text-grey-darkest rounded-r p-3 focus:outline-none"
                      placeholder="CVC"
                    />
                  </div>
                  {/* COUNTRY OPTION INPUT */}
                  <label className="block">
                    <select class="form-select  w-96 mt-1 h-12 border-2 border-gray-400 px-3 overflow-scroll overflow-y-auto">
                      <option>India</option>
                      <option>Option 2</option>
                      <option>Option 2</option>
                      <option>Option 2</option>
                      <option>Option 2</option>
                      <option>Option 2</option>
                      <option>Option 2</option>
                      <option>Option 2</option>
                      <option>Option 2</option>
                      <option>Option 2</option>
                      <option>Option 2</option>
                      <option>Option 2</option>
                      <option>Option 2</option>
                    </select>
                  </label>
                  <button className=" w-96 py-3 bg-green-400 hover:bg-green-800 rounded-md text-white text-lg font-semibold">
                    Complete purchase
                  </button>
                </div>
              </form>
            </div>
          ) : (
            ""
          )}
        </article>
        <article>
          <div>
            <form className="px-5 ml-4 mt-6">
              <div className="grid gap-5">
                <input
                  type="name"
                  placeholder="Name on Card"
                  required
                  className="w-96 h-12 p-3 border-2 border-gray-400 rounded-md mt-2 text-md"
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-96 h-12 p-3 border-2 border-gray-400 rounded-md mt-2 text-lg"
                />
                <button className="ml-16">
                  <img src={paypalImg} alt="" />
                </button>
              </div>
            </form>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PaymentMenu;

// import React from "react";
// import "react-tabs/style/react-tabs.css";
// import { Tab, Tabs, TabPanel, TabList } from "react-tabs";
// import pay from "../../../Images/payment-credit-card.png";

// import pay2 from "../../../Images/payment-paypal.png";
// import paypalImg from "../../../Images/paypal-button.png";

// import { ImCross } from "react-icons/im";

// const PaymentMenu = ({ handleClose }) => {
//   return (
//     <div>
//       <Tabs className="">
//         <div className="float-right -mt-9 mr-6">
//           <button
//             onClick={handleClose}
//             className="transition duration-400 ease-in-out transform hover:-rotate-180"
//           >
//             <ImCross />
//           </button>
//         </div>

//         <TabList className="border-b-0">
//           <div className="flex gap-8 px-4 items-center mt-12 border-0">
//             <Tab className="border-none">
//               <button className="flex items-center gap-2 bg-none">
//                 <input
//                   type="radio"
//                   className="h-4 w-4 text-blue-300 rounded shadow-xl"
//                 />
//                 <img src={pay} alt="" width="202px" />
//               </button>
//             </Tab>
//             <Tab className="border-none">
//               <button className="flex h-6 gap-2 items-center">
//                 <input
//                   type="radio"
//                   className="h-4 w-4 text-blue-300 rounded shadow-xl"
//                 />
//                 <img src={pay2} alt="" width="90" height="30px" />
//               </button>
//             </Tab>
//           </div>
//         </TabList>
//         <TabPanel>
//           <div>
//             <form className="px-5 ml-4 mt-6">
//               <div className="grid gap-5">
//                 <input
//                   type="name"
//                   placeholder="Name on Card"
//                   required
//                   className="w-96 h-12 p-3 border-2 border-gray-400 rounded-md mt-2 text-md"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   required
//                   className="w-96 h-12 p-3 border-2 border-gray-400 rounded-md mt-2 text-lg"
//                 />
//                 {/* CREDIT CARD INPUT */}
//                 <div class="flex border-2 border-gray-400 w-96 rounded-lg">
//                   <input
//                     type="text"
//                     id="payment"
//                     class="w-5/6 flex-1 text-md bg-grey-light text-grey-darkest rounded-l p-3 focus:outline-none"
//                     placeholder="Card Number"
//                   />
//                   <input
//                     type="text"
//                     id="payment"
//                     class="w-1/6 inline-block text-md bg-grey-light text-grey-darkest p-3 focus:outline-none"
//                     placeholder="MM / YY"
//                   />
//                   <input
//                     type="text"
//                     id="payment"
//                     class="w-1/6 inline-block text-md bg-grey-light text-grey-darkest rounded-r p-3 focus:outline-none"
//                     placeholder="CVC"
//                   />
//                 </div>
//                 {/* COUNTRY OPTION INPUT */}
//                 <label className="block">
//                   <select class="form-select  w-96 mt-1 h-12 border-2 border-gray-400 px-3 overflow-scroll overflow-y-auto">
//                     <option>India</option>
//                     <option>Option 2</option>
//                     <option>Option 2</option>
//                     <option>Option 2</option>
//                     <option>Option 2</option>
//                     <option>Option 2</option>
//                     <option>Option 2</option>
//                     <option>Option 2</option>
//                     <option>Option 2</option>
//                     <option>Option 2</option>
//                     <option>Option 2</option>
//                     <option>Option 2</option>
//                     <option>Option 2</option>
//                   </select>
//                 </label>
//                 <button className=" w-96 py-3 bg-green-400 hover:bg-green-800 rounded-md text-white text-lg font-semibold">
//                   Complete purchase
//                 </button>
//               </div>
//             </form>
//           </div>
//         </TabPanel>
//         <TabPanel>
//           <div>
//             <form className="px-5 ml-4 mt-6">
//               <div className="grid gap-5">
//                 <input
//                   type="name"
//                   placeholder="Name on Card"
//                   required
//                   className="w-96 h-12 p-3 border-2 border-gray-400 rounded-md mt-2 text-md"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   required
//                   className="w-96 h-12 p-3 border-2 border-gray-400 rounded-md mt-2 text-lg"
//                 />
//                 <button className="ml-16">
//                   <img src={paypalImg} alt="" />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// };

// export default PaymentMenu;
