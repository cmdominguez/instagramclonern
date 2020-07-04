import {Appearance} from 'react-native';
import {DarkColors} from './Dark';
import {LightColors} from './Light';

const colorScheme = Appearance.getColorScheme();
const Colors = colorScheme === 'dark' ? DarkColors : LightColors;
export {
    LightColors,
    DarkColors,
    Colors
}
// TODO - Agregar un listener para escuchar cuando cmabio el scheme de colores del OS
