import styles from './Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';

export default function Cardapio() {
    return (
        <main>
            <nav className={styles.menu}>
                <Logo width={100} height={100} style={{ transform: 'rotate(90deg)' }}/>
                Davs Donuts
            </nav>
        </main>
    )
}