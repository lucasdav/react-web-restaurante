import cardapio from 'data/cardapio.json';
import Prato from '../pages/Prato/index';

export type Cardapio = typeof cardapio;

export type Prato = typeof cardapio[0];