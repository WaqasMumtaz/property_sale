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
    const [userSelectProperty, setUserSelectProperty] = useState('residential');
    const [userSelectPropertyCategory, setUserSelectPropertyCategory] = useState('');
    const [screen, setScreen] = useState(false);

    props.navigation.addListener('focus', () => {
        setUserSelectPropertyCategory(props.route.name);
        setScreen(true)
    })
    // const userProperty = {
    //     userSelectPropertyCategory: userSelectPropertyCategory,
    //     userSelectProperty: userSelectProperty
    // }
    useEffect(()=>{
        setUserSelectPropertyCategory('')
    },[userSelectPropertyCategory])
    
    return (
        <View style={styles.mainContainer}>
            {/* <View>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('all')}
                    style={[userSelectProperty !== 'all' ? styles.iconBtn : styles.iconBtnSelectd]}
                >
                    <Icon name="clone" size={20} style={[userSelectProperty !== 'all' ?
                        styles.iconStyle : styles.selctdIcon]} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('all')}
                    style={styles.textContainer}
                
                >
                    <Text style={[userSelectProperty !== 'all' ? styles.textStyle : styles.slctTextStyle]}>All</Text>
                </TouchableOpacity>
            </View> */}
            <View>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('residential')}
                    style={[userSelectProperty !== 'residential' ? styles.iconBtn : styles.iconBtnSelectd]}
                >
                    <Icon name="home" size={20} style={[userSelectProperty !== 'residential' ? styles.iconStyle : styles.selctdIcon]} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('residential')}
                    style={styles.textContainer}

                >
                    <Text style={[userSelectProperty !== 'residential' ? styles.textStyle : styles.slctTextStyle]}>Residential</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('comercialPlot')}
                    style={[userSelectProperty !== 'comercialPlot' ? styles.iconBtn : styles.iconBtnSelectd]}
                >
                    <Icon name="building" size={20} style={[userSelectProperty !== 'comercialPlot' ? styles.iconStyle : styles.selctdIcon]} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('comercialPlot')}
                    style={styles.textContainer}

                >
                    <Text style={[userSelectProperty !== 'comercialPlot' ? styles.textStyle : styles.slctTextStyle]}>Commercial</Text>
                </TouchableOpacity>
            </View>

            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('agricultural')}
                    style={[userSelectProperty !== 'agricultural' ? styles.iconBtn : styles.iconBtnSelectd]}
                >
                    <Icon name="university" size={20} style={[userSelectProperty !== 'agricultural' ? styles.iconStyle : styles.selctdIcon]} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('agricultural')}
                    style={styles.textContainer}

                >
                    <Text style={[userSelectProperty !== 'agricultural' ? styles.textStyle : styles.slctTextStyle]}>Agricultural </Text>
                </TouchableOpacity>
            </View>
            {/* Cosumer use for calling function who passed from parent component where call "TabTopNav" */}
            {screen !== false ?
                <Consumer>
                    {({ myFunc }) => myFunc(userSelectPropertyCategory, userSelectProperty)}
                </Consumer>
                :
                null
            }

        </View>
    );
}


export default PlotsScreen;