import { PriceProps } from "./Price.props";
import styles from "./Price.module.css";
import cn from "classnames";

export const Price = ({ size = "xs", children }: PriceProps): JSX.Element => {
  return (
    <p
      className={cn(styles.price, {
        [styles.sm]: size === "sm",
        [styles.xs]: size === "xs",
      })}
    >
      {children}
    </p>
  );
};
