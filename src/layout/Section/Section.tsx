import { SectionProps } from './Section.props';
import styles from './Section.module.css';

const Section = ({ children }: SectionProps): JSX.Element => {
    return (
        <div className={styles.section}>
            {children}
        </div>
    );
};

export default Section;
