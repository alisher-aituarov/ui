import { ComponentProps, PropsWithChildren } from "react";
import styles from "./styles.module.css";
import { paddingSwitch, fontSwitch, radiusSwitch } from "../common/styles";
import { CommonComponentProps } from "../common/types";

type Props = PropsWithChildren &
  CommonComponentProps &
  ComponentProps<"button"> & {};

export const Button = ({
  children,
  size = "medium",
  style,
  ...props
}: Props) => {
  const css = {
    ...paddingSwitch[size],
    ...fontSwitch[size],
    ...radiusSwitch[size],
    ...style,
  };

  return (
    <button className={styles.button} style={css} {...props}>
      {children}
    </button>
  );
};
