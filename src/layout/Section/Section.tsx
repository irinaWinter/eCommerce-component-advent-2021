import { SectionProps } from './Section.props';
import styles from './Section.module.css';

const Section = ({ children }: SectionProps): JSX.Element => {
    return (
        <section className={styles.section}>
            {children}
        </section>
    );
};

export default Section;
