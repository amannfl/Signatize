import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { useSelector, useDispatch } from "react-redux";
import { getSignOffImage } from "../../../../redux/CounterSlice";

const SignOff = () => {
  const [button, setbutton] = useState(false);
  const signOffImage = useSelector(state => state.counter.signOffImage);
  const dispatch = useDispatch();

  return (
    <>
      <article className="">
        <hr />
        <section className="grid items-center justify-items-center mt-7 ">
          {/* FIRST TOGGLE */}
          <div>
            <input
              class="shadow appearance-none border rounded-full w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
            <div className="flex  gap-10 mt-6">
              <ul class="list-none grid gap-2 text-gray-600 ">
                <button onClick={() => setbutton(!button)}>
                  <li className="flex items-center gap-2">
                    <input
                      checked={signOffImage.name === "happy_holidays"}
                      type="radio"
                      onClick={event => {
                        dispatch(getSignOffImage("happy_holidays"));
                      }}
                      id="contactChoice1"
                    />
                    Happy Holidays!
                  </li>
                </button>
                <li className="flex items-center gap-2">
                  <input
                    checked={signOffImage.name === "best_regards"}
                    type="radio"
                    onClick={event => {
                      dispatch(getSignOffImage("best_regards"));
                    }}
                    id="contactChoice2"
                  />
                  Best regards,
                </li>
                <li className="flex items-center gap-2">
                  <input
                    checked={signOffImage.name === "sincerely"}
                    onClick={event => {
                      dispatch(getSignOffImage("sincerely"));
                    }}
                    type="radio"
                    id="contactChoice3"
                  />
                  Sincerely,
                </li>
                <li className="flex items-center gap-2">
                  <input
                    checked={signOffImage.name === "regards"}
                    onClick={event => {
                      dispatch(getSignOffImage("regards"));
                    }}
                    type="radio"
                    id="contactChoice4"
                  />
                  Regards
                </li>
              </ul>
              <ul class="list-none grid gap-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <input
                    checked={signOffImage.name === "best"}
                    onClick={event => {
                      dispatch(getSignOffImage("best"));
                    }}
                    type="radio"
                    id="contactChoice1"
                  />
                  Best
                </li>
                <li className="flex items-center gap-2">
                  <input
                    checked={signOffImage.name === "kind_regards"}
                    onClick={event => {
                      dispatch(getSignOffImage("kind_regards"));
                    }}
                    type="radio"
                    id="contactChoice2"
                  />
                  Kind regards,
                </li>
                <li className="flex items-center gap-2">
                  <input
                    checked={signOffImage.name === "thanks"}
                    onClick={event => {
                      dispatch(getSignOffImage("thanks"));
                    }}
                    type="radio"
                    id="contactChoice3"
                  />
                  Thanks,
                </li>
                <li className="flex items-center gap-2">
                  <input
                    checked={signOffImage.name === "best_wishes"}
                    onClick={event => {
                      dispatch(getSignOffImage("best_wishes"));
                    }}
                    type="radio"
                    id="contactChoice4"
                  />
                  Best wishes
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="flex items-center px-8 ">
            <div className="flex-1 text-gray-600 text-lg">font style</div>
            <div class="relative inline-block text-gray-700 ">
              <select
                class="w-full h-8 pl-3 pr-12  placeholder-gray-600 border rounded-full appearance-none outline-none"
                placeholder="Regular input"
              >
                <option>Arial</option>
                <option>Courier New</option>
                <option>Georgia</option>
                <option>Georgia</option>
                <option>Georgia</option>
                <option>Georgia</option>
                <option>Georgia</option>
                <option>Georgia</option>
                <option>Georgia</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center px-8  mt-10">
            <div className="flex-1 text-gray-600 text-lg">font size</div>
            <div className="w-44">
              <Slider color="primary" defaulValue={1} step={3} max={100} />
            </div>
          </div>

          <div className="flex px-8 items-center mt-6 mb-2">
            <div className="flex-1 text-gray-600">Font color</div>
            {/* RADIO BUTTONS */}
            <div class="mr-40">
              <label>
                <input type="radio" class=" h-10 w-10 text-gray-600" checked />
              </label>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default SignOff;
