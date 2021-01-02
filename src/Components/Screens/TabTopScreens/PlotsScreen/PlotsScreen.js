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


const PlotsScreen = (props) => {
    const [userSelectProperty, setUserSelectProperty] = useState('');
    //const [userSelectPropertyCategory, setUserSelectPropertyCategory] = useState('');
    const screenType = props.route.name;

    return (
        <View style={styles.mainContainer}>
            <Consumer>
                {(value) => (
                    <>
                        <View>
                            <TouchableOpacity
                                onPress={() => {value(screenType , 'residential'),setUserSelectProperty('residential')}}
                                style={[userSelectProperty !== 'residential' ? styles.iconBtn : styles.iconBtnSelectd]}
                            >
                                <Icon name="home" size={20} style={[userSelectProperty !== 'residential' ? styles.iconStyle : styles.selctdIcon]} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                //onPress={() => setUserSelectProperty('residential')}
                                style={styles.textContainer}

                            >
                                <Text style={[userSelectProperty !== 'residential' ? styles.textStyle : styles.slctTextStyle]}>Residential</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => {value(screenType , 'commercial'),setUserSelectProperty('commercial')}}
                                style={[userSelectProperty !== 'commercial' ? styles.iconBtn : styles.iconBtnSelectd]}
                            >
                                <Icon name="building" size={20} style={[userSelectProperty !== 'commercial' ? styles.iconStyle : styles.selctdIcon]} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                //onPress={() => setUserSelectProperty('comercial')}
                                style={styles.textContainer}

                            >
                                <Text style={[userSelectProperty !== 'commercial' ? styles.textStyle : styles.slctTextStyle]}>Commercial</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'center' }}>
                            <TouchableOpacity
                                onPress={() => {value(screenType , 'agricultural'),setUserSelectProperty('agricultural')}}
                                style={[userSelectProperty !== 'agricultural' ? styles.iconBtn : styles.iconBtnSelectd]}
                            >
                                <Icon name="university" size={20} style={[userSelectProperty !== 'agricultural' ? styles.iconStyle : styles.selctdIcon]} />
                            </TouchableOpacity>
                            <TouchableOpacity
                               // onPress={() => setUserSelectProperty('agricultural')}
                                style={styles.textContainer}

                            >
                                <Text style={[userSelectProperty !== 'agricultural' ? styles.textStyle : styles.slctTextStyle]}>Agricultural </Text>
                            </TouchableOpacity>
                        </View>

                    </>
                )}
            </Consumer>


        </View>
    );
}


export default PlotsScreen;