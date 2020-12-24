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
    TouchableOpacity,
} from 'react-native';


const PlotsScreen = (props) => {
    // console.log('Route Name >>', props.route.isFo);
     props.navigation.addListener('focus', ()=>{
         //console.log('Plot Screen Is Focused Successfully');
         console.log('Route Name >>', props.route.name);
     })
    const [userSelectProperty, setUserSelectProperty] = useState('residential');
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






        </View>
    );
}


export default PlotsScreen;