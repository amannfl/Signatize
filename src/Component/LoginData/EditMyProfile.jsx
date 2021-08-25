import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import { baseUrl } from "./BaseUrl";
import { useSelector } from "react-redux";

const EditMyProfile = () => {
  const user_data = useSelector((state) => state.counter.userDetail);
  const { name, password } = user_data;
  const [names, setNames] = useState(name);
  const [passwords, setPasswords] = useState(password);
  const [loading, setLoading] = useState(false);

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(baseUrl + "/end point", {
        name,
        password,
        error,
      });

      console.log(response);
      if (response.data.status == 200) {
        setLoading(false);
        history.push("/");
      } else {
        setLoading(false);
        setError(response.data.error);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <main>
        <div
          class="bg-no-repeat bg-cover bg-center relative"
          style={{ background: "skyblue" }}
        >
          <div class="min-h-screen sm:flex  justify-end">
            <form class="z-20">
              <div class="p-4 bg-white mx-auto rounded-l-lg w-full min-h-screen ">
                <div class="text-center mt-6">
                  <h3 class="text-4xl text-gray-800 font-bold">
                    Edit your Profile
                  </h3>
                </div>
                <div class="space-y-5 mt-14">
                  {/* SIGN DATA */}
                  <div className="grid gap-6">
                    <input
                      class=" w-96 text-base px-4 py-2 border  border-gray-300 border-t-0 border-r-0 border-l-0  focus:outline-none focus:border-gray-400"
                      type="text"
                      placeholder="NAME"
                      value={names}
                      onChange={(e) => setNames(e.target.value)}
                    />
                    <input
                      class="w-96 content-center text-base px-4 py-2 border  border-gray-300 border-t-0 border-r-0 border-l-0  focus:outline-none focus:border-gray-400"
                      type="password"
                      placeholder="PASSWORD"
                      value={passwords}
                      onChange={(e) => setPasswords(e.target.value)}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="w-full flex justify-center bg-green-600  hover:bg-white text-xl text-gray-100 hover:text-red-500  p-3    font-semibold  shadow-lg cursor-pointer transition ease-in duration-200"
                    >
                      {loading ? (
                        <Loading
                          color="red"
                          height={30}
                          weight={30}
                          type="ThreeDots"
                        />
                      ) : (
                        "Edit My Profile"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default EditMyProfile;
