import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View , Text } from 'react-native';

const FilterScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text>Filter Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

const StackNav = () => {
    return (
            <Stack.Navigator initialRouteName="Filter">
                <Stack.Screen name="Filter" component={FilterScreen} />
            </Stack.Navigator>
    )
}

export default StackNav;

