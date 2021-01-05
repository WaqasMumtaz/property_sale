import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import { Consumer } from '../../../../Context';
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


const HomeScreen = (props) => {
    //const [userSelectPropertyCategory, setUserSelectPropertyCategory] = useState('Home');
    const [userSelectProperty, setUserSelectProperty] = useState('houses');
    const [screen, setScreen] = useState(true);
    const [screenType, setScreenType] = useState('Home');
    props.navigation.addListener('focus', () => {
        setUserSelectProperty('')
      });
  

    // console.log('Route Name>>', userSelectPropertyCategory)
// useEffect(()=>{
//     setScreenType(props.route.name);
// },[])
// value(screenType, userSelectProperty)
    return (
        <View style={styles.mainContainer}>
            <Consumer>
                {(value) => (
                    <>
                        <View >
                            <TouchableOpacity
                                onPress={() => {value(screenType, 'houses') , setUserSelectProperty('houses')}}
                                style={[userSelectProperty !== 'houses' ? styles.iconBtn : styles.iconBtnSelectd]}
                            >
                                <Icon name="home" size={20} style={[userSelectProperty !== 'houses' ? styles.iconStyle : styles.selctdIcon]} />
                            </TouchableOpacity>
                            <TouchableOpacity
                               // onPress={() => setUserSelectProperty('houses')}
                                style={styles.textContainer}
                            >
                                <Text style={[userSelectProperty !== 'houses' ? styles.textStyle : styles.slctTextStyle]}>Houses</Text>
                            </TouchableOpacity>
                        </View>

                        <View >
                            <TouchableOpacity
                                onPress={() => {value(screenType, 'flats') , setUserSelectProperty('flats')}}
                                style={[userSelectProperty !== 'flats' ? styles.iconBtn : styles.iconBtnSelectd]}
                            >
                                <Icon name="building" size={20} style={[userSelectProperty !== 'flats' ? styles.iconStyle : styles.selctdIcon]} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                //onPress={() => setUserSelectProperty('flats')}
                                style={styles.textContainer}
                            >
                                <Text style={[userSelectProperty !== 'flats' ? styles.textStyle : styles.slctTextStyle]}>Flats</Text>
                            </TouchableOpacity>
                        </View>

                        <View >
                            <TouchableOpacity
                                onPress={() => {value(screenType, 'uper portion') , setUserSelectProperty('uper portion')}}
                                style={[userSelectProperty !== 'uper portion' ? styles.iconBtn : styles.iconBtnSelectd]}
                            >
                                <Icon name="university" size={20} style={[userSelectProperty !== 'uper portion' ? styles.iconStyle : styles.selctdIcon]} />
                            </TouchableOpacity>
                            <TouchableOpacity
                               // onPress={() => setUserSelectProperty('uperPortion')}
                                style={styles.textContainer}
                            >
                                <Text style={[userSelectProperty !== 'uper portion' ? styles.textStyle : styles.slctTextStyle]}>Uper{"\n"}Portion</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Consumer>
        </View>

    );
}

export default HomeScreen;