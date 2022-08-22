import { Button, Checkbox, Navbar } from "flowbite-react";
import type { NextComponentType, NextPage } from "next";
import Head from "next/head";
import NextpassLogo from "./nextpass-logo";

const Nav: NextComponentType = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <div className="flex flex-row items-end">
        <NextpassLogo />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-center">
          Nextpass
        </span>
      </div>
    </Navbar>
  );
};

export default Nav;
