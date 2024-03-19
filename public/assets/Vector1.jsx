import React from "react";

const Vector1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="auto"
    height="100vh"
    viewBox="0 0 467 401"
    fill="none"
    {...props}
  >
    {/* <path
      fill="#6DFF6D"
      stroke="#6DFF6D"
      d="M144.077 129.5S138.399 3 1 1v399h465s0-48.5-7.381-74-19.373-40.29-47.124-54c-46.557-23-105.037 9.5-105.037 9.5s2.839-9.5 9.652-28c6.813-18.5 21.007-51-27.821-103.5-48.827-52.5-144.212-20.5-144.212-20.5Z"
    /> */}
    <text x="50%" y="50%" textAnchor="middle" fontSize="24">
      This text scales with the SVG
    </text>
  </svg>
);

export default Vector1;
