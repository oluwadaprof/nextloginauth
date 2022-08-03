import React from "react";
import { getServerSidePropsWrapper, withPageAuthRequired } from "@auth0/nextjs-auth0";

const index = () => {
  return <h1>MEMBERS ONLY!!</h1>;
};

export default index;

export const getServerSidePropsWrapper = withPageAuthRequired();