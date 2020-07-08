import {Navigation} from 'react-native-navigation';

import registerScreen from './Screens/index';
import {SCREEN_NAMES} from './Environments';
import {Colors} from './Theme';
import Ionicons  from "react-native-vector-icons/Ionicons";

export class App {
    constructor() {
        Navigation.events().registerAppLaunchedListener(() => {
            registerScreen(this.start);
        });
    }

    start = async () => {
        //Set basic colors
        Navigation.setDefaultOptions({
            statusBar: {
                style: "light"
            },
            topBar: {
                title: {
                    color: Colors.textColor,
                    alignment: 'center'
                },
                background: {
                    color: Colors.light,
                },
            },
            bottomTabs: {
                backgroundColor: Colors.light,
                titleDisplayMode: 'alwaysHide'
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
                                        icon: await Ionicons.getImageSource('home-outline', 30),
                                        iconColor: Colors.dark,
                                        selectedIcon: await Ionicons.getImageSource('home', 30),
                                        selectedIconColor: Colors.dark,
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
                                        icon: await Ionicons.getImageSource('search-outline', 30),
                                        iconColor: Colors.dark,
                                        selectedIcon: await Ionicons.getImageSource('search', 30),
                                        selectedIconColor: Colors.dark,
                                    },
                                },
                            },
                        },
                        {
                            stack: {
                                id: 'TAB3',
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
                                        icon: await Ionicons.getImageSource('add-circle-outline', 30),
                                        iconColor: Colors.dark,
                                        selectedIcon: await Ionicons.getImageSource('add-circle', 30),
                                        selectedIconColor: Colors.dark,
                                    },
                                },
                            },
                        },
                        {
                            stack: {
                                id: 'TAB4',
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
                                        icon: await Ionicons.getImageSource('heart-outline', 30),
                                        iconColor: Colors.dark,
                                        selectedIcon: await Ionicons.getImageSource('heart', 30),
                                        selectedIconColor: Colors.dark,
                                    },
                                },
                            },
                        },
                        {
                            stack: {
                                id: 'TAB5',
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
                                        icon: await Ionicons.getImageSource('person-outline', 30),
                                        iconColor: Colors.dark,
                                        selectedIcon: await Ionicons.getImageSource('person', 30),
                                        selectedIconColor: Colors.dark,
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
