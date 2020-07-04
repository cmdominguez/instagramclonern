import {Platform} from 'react-native';

export const DarkColors = {
    primary: '#428cff',
    secondary: '#50c8ff',
    tertiary: '#6a64ff',
    success: '#2fdf75',
    warning: '#ffd534',
    danger: '#ff4961',
    dark: '#f4f5f8',
    medium: '#989aa2',
    light: '#222428',
    textColor: '#ffffff',
    borderColor: '#222222',
    toolbarBackground: Platform.select({
        ios: '#0d0d0d',
        android: '#1f1f1f'
    }),
    itemBackground: Platform.select({
        ios: '#000000',
        android: '#1e1e1e'
    }),
    backgroundColor: Platform.select({
        ios: '#000000',
        android: '#121212'
    }),
};
