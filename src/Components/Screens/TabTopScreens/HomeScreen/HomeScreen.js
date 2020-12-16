import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
//import DropDownPicker from 'react-native-dropdown-picker';
//import SliderRange from '../Slider/slider';
//Import all required component
import {
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    Keyboard,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Dimensions,
    FlatList,
    Animated,
    Button
} from 'react-native';


const HomeScreen = () => {
    const [userSelectProperty, setUserSelectProperty] = useState('all');
    return (
        <View style={styles.mainContainer}>
                <View >
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('all')}
                        style={[userSelectProperty !== 'all' ? styles.iconBtn : styles.iconBtnSelectd]}
                    >
                        <Icon name="clone" size={20} style={[userSelectProperty !== 'all' ? styles.iconStyle : styles.selctdIcon]} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('all')}
                        style={styles.textContainer}
                    >
                        <Text style={[userSelectProperty !== 'all' ? styles.textStyle : styles.slctTextStyle]}>All</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('home')}
                        style={[userSelectProperty !== 'home' ? styles.iconBtn : styles.iconBtnSelectd]}
                    >
                        <Icon name="home" size={20} style={[userSelectProperty !== 'home' ? styles.iconStyle : styles.selctdIcon]} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('home')}
                        style={styles.textContainer}
                    >
                        <Text style={[userSelectProperty !== 'home' ? styles.textStyle : styles.slctTextStyle]}>Houses</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('building')}
                        style={[userSelectProperty !== 'building' ? styles.iconBtn : styles.iconBtnSelectd]}
                    >
                        <Icon name="building" size={20} style={[userSelectProperty !== 'building' ? styles.iconStyle : styles.selctdIcon]} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('building')}
                        style={styles.textContainer}
                    >
                        <Text style={[userSelectProperty !== 'building' ? styles.textStyle : styles.slctTextStyle]}>Flats</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('uperPortion')}
                        style={[userSelectProperty !== 'uperPortion' ? styles.iconBtn : styles.iconBtnSelectd]}
                    >
                        <Icon name="university" size={20} style={[userSelectProperty !== 'uperPortion' ? styles.iconStyle : styles.selctdIcon]} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('uperPortion')}
                        style={styles.textContainer}
                    >
                        <Text style={[userSelectProperty !== 'uperPortion' ? styles.textStyle : styles.slctTextStyle]}>Uper{"\n"}Portion</Text>
                    </TouchableOpacity>
                </View>
            </View>

    );
}

export default HomeScreen;