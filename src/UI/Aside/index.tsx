import React, { ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface AsideProps {
  children: ReactNode;
  className?: string;
}

export const Aside: React.FC<AsideProps> = ({ children, className = "" }) => {
  return <aside className={cn(styles.aside, className)}>{children}</aside>;
};
