import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { useEffect } from "react";
const Login = () => {
  const token = localStorage.getItem("token");
  const history = useHistory();
  useEffect(() => {
    if (token) {
      history.push("/home");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  const handleLogin = async e => {
    e.preventDefault();
    if (email == "") {
      setEmailError("Please enter email");
    } else if (password == "") {
      setPasswordError("Please enter password");
    } else {
      try {
        setLoading(true);
        const response = await axios.post(
          "https://netforcelabs.com/signature/api/signin",
          {
            email,
            password,
            error,
          }
        );
        console.log(response);
        if (response.data.status == 200) {
          setLoading(false);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("name", response.data.user.name);
          history.push("/home");
        } else {
          setLoading(false);
          setError(response.data.error);
        }
      } catch (error) {
        setLoading(false);
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
                  {/* LOGIN DATA */}
                  <div className="grid gap-6">
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
                      class="w-full flex justify-center bg-green-600  hover:bg-green-900 text-xl text-gray-100 hover:text-white p-3 font-semibold shadow-lg cursor-pointer transition ease-in duration-200"
                      onClick={handleLogin}
                    >
                      {loading ? (
                        <Loading
                          color="white"
                          height={30}
                          weight={30}
                          type="ThreeDots"
                        />
                      ) : (
                        "LOG IN"
                      )}
                    </button>
                  </div>
                  <div class=" float-right grid gap-3">
                    <Link
                      to="/repass"
                      class="flex items-center gap-2 text-gray-400 hover:text-red-500 font-semibold text-sm"
                    >
                      <FaLock />
                      Forgot password?
                    </Link>
                    <Link
                      to="/signup"
                      class="flex items-center gap-2 text-blue hover:text-red-500 text-xs"
                    >
                      DON'T HAVE AN ACCOUNT?
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

export default Login;
