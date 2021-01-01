
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import HomeScreen from '../HomeScreen/HomeScreen';
import PlotsScreen from '../PlotScreen/PlotScreen';
import CommercialScreen from '../CommercialScreen/CommercialScreen';
import { Provider } from '../../../Context';


const TopTabs = (props) => {
    return (
        <Provider value={props.getDataProperties}>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#32CD32',
                    inactiveTintColor: 'gray',

                }}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Plots" component={PlotsScreen} />
                <Tab.Screen name="Commercial" component={CommercialScreen} />
            </Tab.Navigator>
        </Provider>

    );
}

export default TopTabs;