import { Link, useHistory } from "react-router-dom";

import { Popover, Transition } from "@headlessui/react";
import { FaUserAlt } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

function Change() {
  const history = useHistory();
  var name = localStorage.getItem("name");
  var account = name;
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <Popover>
      <Popover.Button>
        <div>
          <button className="inline-flex gap-3 items-center justify-center">
            <span className="font-semibold text-lg">
              {account ? <div>{name}</div> : <div>Make an Account</div>}
            </span>
            <IoIosArrowDown />
          </button>
        </div>
      </Popover.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel>
          <main className="absolute -ml-24 z-20 mt-4">
            <section className="grid gap-2 bg-gray-700 w-44 py-8 px-8 rounded-md">
              <Link
                to="/edit"
                className="flex gap-2 items-center text-white hover:text-gray-300"
              >
                <FaUserAlt />
                <span className=" text-md font-semibold">Edit profile</span>
              </Link>
              {name ? (
                <button
                  className="flex gap-2 items-center text-white hover:text-gray-300"
                  onClick={handleLogout}
                >
                  <BiLogOutCircle fontSize="22" />
                  <h1 className="text-md font-semibold">Logout</h1>
                </button>
              ) : (
                ""
              )}
            </section>
          </main>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
export default Change;
