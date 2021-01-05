import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Consumer } from '../../../../Context';
//import DropDownPicker from 'react-native-dropdown-picker';
//import SliderRange from '../Slider/slider';
//Import all required component
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';


const CommercialScreen = (props) => {
    const [userSelectProperty, setUserSelectProperty] = useState('');
    // const [userSelectPropertyCategory, setUserSelectPropertyCategory] = useState('');
    // const [screen, setScreen] = useState(false);
    props.navigation.addListener('focus', () => {
        setUserSelectProperty('')
      });
    const screenType = props.route.name;
    
    return (
        <View style={styles.mainContainer}>
            <Consumer>
                {(value) => (
                    <>
                        <View style={{ justifyContent: 'center' }}>
                            <TouchableOpacity
                                onPress={() => {value(screenType , 'office'),setUserSelectProperty('office')}}
                                style={[userSelectProperty !== 'office' ? styles.iconBtn : styles.iconBtnSelectd]}
                            >
                                <Icon name="home" size={20} style={[userSelectProperty !== 'office' ? styles.iconStyle : styles.selctdIcon]} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                //onPress={() => setUserSelectProperty('office')}
                                style={styles.textContainer}

                            >
                                <Text style={[userSelectProperty !== 'office' ? styles.textStyle : styles.slctTextStyle]}>Office</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <TouchableOpacity
                                onPress={() => {value(screenType , 'shop'),setUserSelectProperty('shop')}}
                                style={[userSelectProperty !== 'shop' ? styles.iconBtn : styles.iconBtnSelectd]}
                            >
                                <Icon name="building" size={20} style={[userSelectProperty !== 'shop' ? styles.iconStyle : styles.selctdIcon]} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                //onPress={() => setUserSelectProperty('shop')}
                                style={styles.textContainer}

                            >
                                <Text style={[userSelectProperty !== 'shop' ? styles.textStyle : styles.slctTextStyle]}>Shop</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'center' }}>
                            <TouchableOpacity
                                onPress={() => {value(screenType , 'warehouse'),setUserSelectProperty('warehouse')}}
                                style={[userSelectProperty !== 'warehouse' ? styles.iconBtn : styles.iconBtnSelectd]}
                            >
                                <Icon name="university" size={20} style={[userSelectProperty !== 'warehouse' ? styles.iconStyle : styles.selctdIcon]} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                //onPress={() => setUserSelectProperty('warehouse')}
                                style={styles.textContainer}
                            >
                                <Text style={[userSelectProperty !== 'warehouse' ? styles.textStyle : styles.slctTextStyle]}>Warehouse</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Consumer>

        </View>
    );
}


export default CommercialScreen;