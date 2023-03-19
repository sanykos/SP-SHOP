import React, { ReactNode, FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface MainProps {
  className?: string;
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children, className }) => {
  return <main className={cn(styles.main, className)}>{children}</main>;
};
