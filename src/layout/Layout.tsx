import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
