import React from "react";
import { useState } from "react";
import { CgCopyright } from "react-icons/cg";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-white h-16"></div>

        <section className="bg-black flex h-16 items-center justify-center">
          <div className="flex text-white gap-2 items-center">
            <h1 className="font-bold text-xl">Signatize</h1>
            <CgCopyright fontSize="25" />
            <span className="text-lg">2021</span>
          </div>
        </section>
      </footer>
    </>
  );
}
