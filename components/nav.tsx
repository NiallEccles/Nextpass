import { Button, Checkbox, Navbar } from "flowbite-react";
import type { NextComponentType, NextPage } from "next";
import Head from "next/head";

const Nav: NextComponentType = () => {
  return (
    <Navbar fluid={true} rounded={true}>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-center">
          Nextpass
        </span>
    </Navbar>
  );
};

export default Nav;
