import React from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdKeyboardBackspace } from "react-icons/md";
const Login = () => {
  return (
    <>
      <main>
        <div
          class="bg-no-repeat bg-cover bg-center relative"
          style={{ background: "skyblue" }}
        >
          <div class="min-h-screen sm:flex  justify-end">
            <form class=" self-center  z-20">
              <div class="p-4 bg-white mx-auto rounded-l-lg w-full min-h-screen">
                <div class="text-center mt-6">
                  <h3 class="text-4xl text-gray-800 font-bold">SIGNATIZE</h3>
                </div>
                <div class="space-y-5 mt-10 ">
                  <div>
                    <p className="text-gray-500 text-sm mt-5">
                      Enter your Email and instructions will be sent to
                      <br /> you!
                    </p>
                  </div>
                  <div>
                    <input
                      class=" w-96 text-base px-4 py-2 border  border-gray-300 rounded-lg  focus:outline-none focus:border-red-400 transition "
                      type="email"
                      placeholder="EMAIL"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="w-96 flex items-center gap-2 bg-red-600  hover:bg-white text-xl text-gray-100 hover:text-red-600  p-3 px-16 font-semibold shadow-lg cursor-pointer transition ease-in duration-200"
                    >
                      <FaLock />
                      RECOVER PASSWORD
                    </button>
                  </div>
                  <Link
                    to="/login"
                    class="flex items-center  gap-1 text-gray-400 hover:text-red-500 "
                  >
                    <MdKeyboardBackspace fontSize="20" className="mt-1" />
                    <span className="text-sm">BACK TO LOGIN</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
