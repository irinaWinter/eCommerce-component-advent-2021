import { ProductProps } from './Product.props';
import styles from './Product.module.css';

import { Htag, Button } from '..';

export const Product = ({ product }: ProductProps): JSX.Element => {
    const {name, price, img} = product;
    
    return (
        <li className={styles.product}>
            <div className={styles.description}>
                <Htag tag="h3">{name}</Htag>
                <p className={styles.price}>{price}</p>
                <Button className={styles.button}> Add to Cart </Button>
            </div>
            <img className={styles.img} src={img} alt={name} />
        </li>
    )
};