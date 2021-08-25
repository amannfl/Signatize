import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { baseUrl } from "../../LoginData/BaseUrl";
import { FaPen } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Footer from "../../Footer/Footer";

const User = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}/get_user_data`).then((res) => setData(res.data.data));
  }, []);
  return (
    <main>
      <table className="rounded-t-lg  w-4/6 mx-auto bg-gray-200 text-gray-800 mt-10">
        <tr className="text-left border-b-2 border-gray-300">
          <th className="px-4 py-3  text-gray-400">Name</th>
          <th className="px-4 py-3 text-gray-400">Email</th>
          <th className="px-4 py-3 text-gray-400">Profile</th>
          <th className="px-4 py-3 text-gray-400">Action</th>
        </tr>
        {data.map((items) => (
          <tr className="bg-gray-100 border-b-2 border-gray-200 h-20 ">
            <td className="px-2  text-lg font-semibold ">{items.name}</td>
            <td className="  text-lg font-semibold ">{items.email}</td>
            <td className="px-2 font-semibold ">
              <img src={items.profile} alt="" className="h-24 " />
            </td>
            <td className="">
              <button className="font-bold py-2 px-5 rounded items-center gap-1 text-white hover:text-white bg-blue-500 hover:bg-blue-900 rounded-r-none">
                <FaPen fontSize="22" />
              </button>
              <button className="font-bold py-2 px-5 rounded items-center gap-1 text-white hover:text-white bg-red-500 hover:bg-red-900 rounded-l-none">
                <AiFillDelete fontSize="22" />
              </button>
            </td>
          </tr>
        ))}
      </table>
      <footer className="mt-44">
        <Footer />
      </footer>
    </main>
  );
};

export default User;
