/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../constants';

// navigation stacks
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackLibrary from './StackLibrary';

// icons
import SvgTabHome from '../icons/Svg.TabHome';
import SvgTabLibrary from '../icons/Svg.TabLibrary';
import SvgTabSearch from '../icons/Svg.TabSearch';
import DrawerHeader from '../components/DrawerHeader';
import { getHeaderTitle } from '@react-navigation/elements';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {


    return (
        <Drawer.Navigator
            screenOptions={({ route }) => ({
                drawerType: 'slide',
                defaultStatus: 'close',
                header: ({options}) => {
                    const titles = options.drawerLabel ?? getHeaderTitle(options, route.name);
                    
                    return (
                        <DrawerHeader title={titles}/>
                    )
                },
                // headerShown: false,
                drawericon: ({ active }) => {
                    let icon = <SvgTabHome active={active} />;

                    if (route.name === 'StackSearch') {
                        icon = <SvgTabSearch active={active} />;
                    } 
                    else if (route.name === 'StackLibrary') {
                        icon = <SvgTabLibrary active={active} />;
                    }

                    return icon;
                },
                drawerActiveTintColor: colors.white,
                drawerInactiveTintColor: colors.greyInactive
            })}
        >
            <Drawer.Screen
                name="StackHome"
                component={StackHome}
                options={{
                    drawerLabel: 'Home',
                }}
            />
            <Drawer.Screen
                name="StackSearch"
                component={StackSearch}
                options={{
                    drawerLabel: 'Search',
                }}
            />
            <Drawer.Screen
                name="StackLibrary"
                component={StackLibrary}
                options={{
                    drawerLabel: 'Library',
                }}
            />            
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;
