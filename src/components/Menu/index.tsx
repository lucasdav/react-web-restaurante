import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';

export default function Menu() {
    const rotas = [{
        label: 'Início',
        to: '/'
    }, {
        label: 'Cardápio',
        to: '/cardapio'
    }, {
        label: 'Sobre',
        to: '/sobre'
    }];
    return (
        <nav className={styles.menu}>
            <Logo width={100} height={100} />
            <ul className={styles.menu__list}>
                {rotas.map((rota, index) => (
                    <li key={index}>
                        <a href={rota.to} className={styles.menu__link}>
                            {rota.label}
                        </a>
                    </li>
                ))

                }
            </ul>
        </nav>
    );
}