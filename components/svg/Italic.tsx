import React from "react";
import { SvgProps } from "../../types/types";

const SvgItalic = ({ height, width, viewBox = "0 0 12 12" }: SvgProps) => (
  <svg height={height} width={width} viewBox={viewBox}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" />
  </svg>
);

export default SvgItalic;
