import { PriceProps } from "./Price.props";
import styles from "./Price.module.css";
import cn from "classnames";

export const Price = ({
  size = "xs",
  appearance = "default",
  children,
}: PriceProps): JSX.Element => {
  return (
    <p
      className={cn(styles.price, {
        [styles.accent]: appearance === "accent",
        [styles.sm]: size === "sm",
        [styles.xs]: size === "xs",
      })}
    >
      {children}
    </p>
  );
};
