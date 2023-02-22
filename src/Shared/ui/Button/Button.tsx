import classNames from "classnames";
import { ButtonHTMLAttributes, FC, HTMLProps } from "react";
import style from "./Button.module.scss";

type TTheme = "empty";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: TTheme;
}

export const Button: FC<IButton> = (props) => {
  const { theme, className, children, ...rest } = props;
  return (
    <button className={classNames(className, style[theme])} {...rest}>
      {children}
    </button>
  );
};
