import React from "react";
import { Helmet } from "react-helmet";
const Meta = ({ title, desc, icon }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="icon" href={icon} />
    </Helmet>
  );
};

export default Meta;
