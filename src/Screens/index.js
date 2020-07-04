/**
 * @flow
 */

import {Navigation} from 'react-native-navigation';
import {SCREEN_NAMES} from '../Environments';

import {Tab1} from '../Screens/Tab1';
import {Tab2} from '../Screens/Tab2';

/**
 * Register screens
 * Aca registramos todas las pantallas que vamos a usar
 * @param callback function
 * @return Llama al callback pasado por parametro una vez
 * que termina de registrar las pantallas
 */
export default (callback: () => {}) => {
    Navigation.registerComponent(SCREEN_NAMES.TAB1, () => Tab1);
    Navigation.registerComponent(SCREEN_NAMES.TAB2, () => Tab2);
    callback();
};
