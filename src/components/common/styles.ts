import React from "react";
import { Size } from "./types";

export const paddingSwitch: Record<Size, React.CSSProperties> = {
  small: { padding: "6px 12px" },
  medium: { padding: "8px 16px" },
  large: { padding: "10px 22px" },
  huge: {},
};

export const fontSwitch: Record<Size, React.CSSProperties> = {
  small: { fontSize: "12px" },
  medium: { fontSize: "16px" },
  large: { fontSize: "20px" },
  huge: {},
};

export const radiusSwitch: Record<Size, React.CSSProperties> = {
  small: { borderRadius: "4px" },
  medium: { borderRadius: "8px" },
  large: { borderRadius: "12px" },
  huge: {},
};
