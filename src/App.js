import {Navigation} from 'react-native-navigation';

import registerScreen from './Screens/index';
import {SCREEN_NAMES} from './Environments';
import {Colors} from './Theme';

export class App {
    constructor() {
        Navigation.events().registerAppLaunchedListener(() => {
            registerScreen(this.start);
        });
    }

    start = () => {
        //Set basic colors
        Navigation.setDefaultOptions({
            statusBar: {
                style: "light"
            },
            topBar: {
                title: {
                    color: Colors.textColor,
                },
                background: {
                    color: Colors.light,
                },
            },
            bottomTabs: {
                backgroundColor: Colors.light,
            },
        });

        //Add your layout
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    id: 'BOTTOM_TABS_LAYOUT',
                    children: [
                        {
                            stack: {
                                id: 'TAB1',
                                children: [
                                    {
                                        component: {
                                            id: SCREEN_NAMES.TAB1,
                                            name: SCREEN_NAMES.TAB1,
                                        },
                                    },
                                ],
                                options: {
                                    bottomTab: {
                                        text: 'Tab1',
                                        textColor: Colors.textColor,
                                        selectedTextColor: Colors.dark,
                                    },
                                },
                            },
                        },
                        {
                            stack: {
                                id: 'TAB2',
                                children: [
                                    {
                                        component: {
                                            id: SCREEN_NAMES.TAB2,
                                            name: SCREEN_NAMES.TAB2,
                                        },
                                    },
                                ],
                                options: {
                                    bottomTab: {
                                        text: 'Tab2',
                                        textColor: Colors.textColor,
                                        selectedTextColor: Colors.dark,
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        });
    };
}
