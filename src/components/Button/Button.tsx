import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ appearance = "primary", arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.inCart]: appearance === 'inCart',
            [styles.arrow]: arrow !== 'none',
            [styles.left]: arrow === "left",
            [styles.right]: arrow === "right"
        })}
            {...props}>
            {children}
        </button >
    )
};