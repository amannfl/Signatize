import React from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
const Signup = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSignup = async e => {
    e.preventDefault();
    if (name == "") {
      setNameError("Please enter name");
    } else if (email == "") {
      setEmailError("Please enter email");
    } else if (password == "") {
      setPasswordError("Please enter Password");
    } else {
      try {
        setLoading(true);
        const response = await axios.post(
          "https://netforcelabs.com/signature/api/signup",
          { name, email, password, error }
        );

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
                  <h3 class="text-4xl text-gray-800 font-bold">SIGNATIZE</h3>
                </div>
                <div class="space-y-5 mt-14">
                  {/* SIGN DATA */}
                  <div className="grid gap-6">
                    <input
                      class=" w-96 text-base px-4 py-2 border  border-gray-300 border-t-0 border-r-0 border-l-0  focus:outline-none focus:border-gray-400"
                      type="text"
                      placeholder="NAME"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                    {error ? (
                      <h1 className="text-red-400">{error.name}</h1>
                    ) : (
                      <h1 className="text-red-400">{nameError}</h1>
                    )}
                    <input
                      class=" w-96 text-base px-4 py-2 border  border-gray-300 border-t-0 border-r-0 border-l-0  focus:outline-none focus:border-gray-400"
                      type="email"
                      placeholder="EMAIL"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    {error ? (
                      <h1 className="text-red-400">{error.email}</h1>
                    ) : (
                      <h1 className="text-red-400">{emailError}</h1>
                    )}
                    <input
                      class="w-96 content-center text-base px-4 py-2 border  border-gray-300 border-t-0 border-r-0 border-l-0  focus:outline-none focus:border-gray-400"
                      type="password"
                      placeholder="PASSWORD"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    {error ? (
                      <h1 className="text-red-400">{error.password}</h1>
                    ) : (
                      <h1 className="text-red-400">{passwordError}</h1>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="w-full flex justify-center bg-green-600  hover:bg-white text-xl text-gray-100 hover:text-red-500  p-3    font-semibold  shadow-lg cursor-pointer transition ease-in duration-200"
                      onClick={handleSignup}
                    >
                      {loading ? (
                        <Loading
                          color="red"
                          height={30}
                          weight={30}
                          type="ThreeDots"
                        />
                      ) : (
                        "SIGNUP"
                      )}
                    </button>
                  </div>
                  <div class="  float-right ">
                    <Link
                      to="/login"
                      class="flex items-center gap-2 text-gray-400 hover:text-red-500 font-semibold"
                    >
                      <VscAccount />
                      ALREADY HAVE AN ACCOUNT?
                    </Link>
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

export default Signup;
