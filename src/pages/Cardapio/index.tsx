import { useState } from 'react';
import Buscador from './Buscador';
import styles from './Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';

export default function Cardapio() {
    const [busca, setBusca] = useState("");

    return (
        <main>
            <nav className={styles.menu}>
                <Logo width={100} height={100}/>
                Davs Restaurante
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa da massa italiana
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
            </section>
        </main>
    )
}