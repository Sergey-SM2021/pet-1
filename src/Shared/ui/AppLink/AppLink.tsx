import { FC, PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";
import cn from "classnames";
import style from "./AppLink.module.scss";

interface IAppLink extends LinkProps {
  theme: "primary" | "secondary";
}

export const AppLink: FC<PropsWithChildren<IAppLink>> = (props) => {
  const { to, theme, className, children, ...rest } = props;
  return (
    <Link to={to} className={cn(className, style[theme])} {...rest}>
      {children}
    </Link>
  );
};
