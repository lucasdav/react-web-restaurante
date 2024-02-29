import classNames from 'classnames';
import styles from './TagsPrato.module.scss';
import { Prato } from 'types/Prato';

export default function TagsPrato({
    category,
    size,
    serving,
    price
}: Prato) {
    return (
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags_tipo]: true,
                [styles[`tags_tipo__${category.label.toLowerCase()}`]]: true
            })}>
                {category.label}
            </div>
            <div className={styles.tags_porcao}>
                {size}g
            </div>
            <div className={styles.tags_qtdpessoas}>
                Serve {serving} pessoa{serving === 1 ? '' : 's'}
            </div>
            <div className={styles.tags_valor}>
                R$ {price.toFixed(2)}
            </div>
        </div>
    );
}