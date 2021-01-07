import React, { useState, useEffect, useRef } from 'react';
import styles from './css/style';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


//Import all required component
import {
    StyleSheet,
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
    Modal
} from 'react-native';

const ModalScreen = (props) => {

    return (
        <View>
            <Modal
                animationType={props.animationType}
                transparent={props.transparent}
                visible={props.visible}
            //supportedOrientations={props.}
            // onRequestClose={() => {
            //   Alert.alert("Modal has been closed.");
            // }}
            >
                <View style={props.centeredView}>
                    <View style={props.modalView}>
                        {props.userSelectUnit === 'area-size' ?
                            <>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                                    <Text style={{ fontWeight: 'bold' }}>Change Area Size</Text>
                                    <TouchableOpacity
                                        // style={{ backgroundColor: "#2196F3" }}
                                        onPress={() => {
                                            props.setModalVisible(!props.visible);
                                        }}
                                    >
                                        <Icon name="times" size={23} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <View style={props.borderLine}></View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                                    <Text>Square Yard </Text>
                                    <RadioButton
                                        value={props.areaUnit}
                                        status={props.areaUnit === 'Sq. Yd.' ? 'checked' : 'unchecked'}
                                        onPress={() => props.setAreaUnit('Sq. Yd.')}
                                        color='#7DE24E'
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                                    <Text>Square Yard Meter</Text>
                                    <RadioButton
                                        value={props.areaUnit}
                                        status={props.areaUnit === 'Sq. Ym.' ? 'checked' : 'unchecked'}
                                        onPress={() => props.setAreaUnit('Sq. Ym.')}
                                        color='#7DE24E'
                                    />
                                </View>
                            </>
                            : props.userSelectUnit === 'price-unit' ?
                                <>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                                        <Text style={{ fontWeight: 'bold' }}>Change Currency</Text>
                                        <TouchableOpacity
                                            // style={{ backgroundColor: "#2196F3" }}
                                            onPress={() => {
                                                props.setModalVisible(!props.visible);
                                            }}
                                        >
                                            <Icon name="times" size={23} color="black" />

                                        </TouchableOpacity>
                                    </View>
                                    <View style={props.borderLine}></View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                                        <Text>Pakistan (PKR)</Text>
                                        <RadioButton
                                            value={props.priceUnit}
                                            status={props.priceUnit === 'PKR' ? 'checked' : 'unchecked'}
                                            onPress={() => props.setPriceUnit('PKR')}
                                            color='#7DE24E'
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                                        <Text>United States (USA)</Text>
                                        <RadioButton
                                            value={props.priceUnit}
                                            status={props.priceUnit === 'USA' ? 'checked' : 'unchecked'}
                                            onPress={() => props.setPriceUnit('USA')}
                                            color='#7DE24E'
                                        />
                                    </View>
                                </>
                                :
                                null
                        }



                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default ModalScreen;