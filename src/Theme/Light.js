import {Platform} from 'react-native';

export const LightColors = {
    primary: '#428cff',
    secondary: '#50c8ff',
    tertiary: '#6a64ff',
    success: '#2fdf75',
    warning: '#ffd534',
    danger: '#ff4961',
    dark: '#222428',
    medium: '#92949c',
    light: '#f4f5f8',
    textColor: '#222',
    borderColor: '#222222',
    toolbarBackground: '#428cff',
    itemBackground: Platform.select({
        ios: '#fff',
        android: '#fefefe'
    }),
    backgroundColor: Platform.select({
        ios: '#fff',
        android: '#fff'
    }),
};
