import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
//import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-community/async-storage';
//import { Consumer } from '../../../Context';
import { updateCity } from '../../Redux/Actions/authAction';
import { connect } from 'react-redux';


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
    Button
} from 'react-native';
const { scrolHeight } = Dimensions.get('window').height;

const citiesData = [
    { id: '1', title: 'Islamabad' },
    { id: '2', title: 'Karachi' },
    { id: '3', title: 'Lahore' },
    { id: '4', title: 'Abbottabad' },
    { id: '5', title: 'Rawalpindi' },
    { id: '7', title: 'Peshawar' },
    { id: '9', title: 'Faislabad' },
    { id: '10', title: 'Hyderabad' },
    { id: '11', title: 'Rahim Yar Khan' },
    { id: '12', title: 'Bahawalpur' },
    { id: '13', title: 'Sakhar' },

]

const Search = (props) => {

    // const selectCity = () => {
    //     console.log('user select city >>', data);
    //     //AsyncStorage.setItem('userSelectedLocation', data);
    //     //props.navigation.goBack();
    // }

    const Item = ({ title, id }) => (
        <View>
            <TouchableOpacity
                onPress={() => {props.updateCity(title), props.navigation.goBack()}}
                style={styles.item} id={id}
            >
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
    const renderItem = ({ item }) => (
        //console.log('Render Items data >>', item)
        <Item title={item.title} id={item.id} />
    );


    //const paramsData = route.params.name;
    const [inputValue, setInputValue] = useState('');
    const [cityData, setCityData] = useState([]);




    const searchFilterFunction = (text) => {
        const newDAta = citiesData.filter(items => {
            const itemData = items.title.toUpperCase();
            const textData = text.toUpperCase();
            //console.log('item data >>',itemData)

            //console.log('indexOf >>', itemData.indexOf(textData) > -1);
            return itemData.indexOf(textData) > -1
        })
        // console.log('New DAta >>', newDAta);
        setCityData(newDAta)
    }

useEffect(()=>{
console.log('props >>', props);
},[])

useEffect(()=>{
    console.log('city name from redux >>', props.city);
})

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{ flex: 1, height: scrolHeight }}
                contentContainerStyle={{ flexGrow: 1 }}
                automaticallyAdjustContentInsets="automatic"
            >
                {/* {paramsData === 'Search Location' ?
                    <> */}
                <View style={{ marginTop: 10, marginHorizontal: 12 }}>
                    <TextInput
                        onChangeText={text => searchFilterFunction(text)}
                        placeholder="Search Location"
                        style={styles.inputText}
                    //value={cityData}
                    />
                </View>
                <View style={styles.borderLine}></View>
                {cityData.length > 0 ?
                    
                    <FlatList
                        data={cityData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    :
                    <View style={styles.mainLocationBody}>
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>Popular Cities</Text>
                        </View>
                        <FlatList
                            data={citiesData}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                }




            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state)=>{
    console.log('MapStateToProps State Value ..>>>', state);
      return {
        city:state.authReducer.city
      }
    }
    
    const mapDispatchToProps = (dispatch)=>{
    return {
        updateCity:(city)=>dispatch(updateCity(city))
    }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Search);