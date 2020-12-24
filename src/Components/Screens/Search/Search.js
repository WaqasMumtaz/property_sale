import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
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
    {
     popularCities:{
         id:'1', title:'Islamabad',
         id:'2', title:'Karachi',
         id:'3', title:'Lahore',
         id:'4', title:'Rawalpindi'
         },
    },
    {
        otherCities:{
            id:'1', title:'Abbottabad',
            id:'2', title:'Karachi',
            id:'3', title:'Lahore',
            id:'4', title:'Rawalpindi'
        }
    }
    
]

const Search = ({ route, navigation }) => {

    const paramsData = route.params.name;
    const [inputValue , setInputValue] = useState('');

    // useEffect(() => {
    //     console.log('Params DAta Search Screen >>', paramsData)
    // })


    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{ flex: 1, height: scrolHeight }}
                contentContainerStyle={{ flexGrow: 1 }}
                automaticallyAdjustContentInsets="automatic"
            >
                {paramsData === 'Search Location' ?
                    <>
                        <View style={{ marginTop: 10, marginHorizontal: 12 }}>
                            <TextInput
                                onChangeText={text => setInputValue(text)}
                                placeholder="Search Location"
                                style={styles.inputText}
                                value={inputValue}
                            />
                        </View>
                        <View style={styles.borderLine}></View>
                    </>
                    :
                    <>
                        <View style={{ marginTop: 10, marginHorizontal: 12 }}>
                            <TextInput
                                onChangeText={text => setInputValue(text)}
                                placeholder="Enter Location"
                                style={styles.inputText}
                                value={inputValue}
                            />
                        </View>
                        <View style={styles.borderLine}></View>
                        <View style={styles.mainLocationBody}>
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>Popular Cities</Text>
                            </View>
                            <TouchableOpacity 
                            onPress={()=>setInputValue('Islamabad')}
                            style={styles.cityNamesContainer}
                            >
                                <Text>Islamabad</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={()=>setInputValue('Karachi')}
                            style={styles.cityNamesContainer}
                            >
                                <Text>Karachi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={()=>setInputValue('Lahore')}
                            style={styles.cityNamesContainer}
                            >
                                <Text>Lahore</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={()=>setInputValue('Rawalpindi')}
                            style={styles.cityNamesContainer}
                            >
                                <Text>Rawalpindi</Text>
                            </TouchableOpacity>
                            <View style={{ marginTop: 12 }}>
                                <Text style={{ fontWeight: 'bold' }}>Other Cities</Text>
                            </View>
                            <TouchableOpacity 
                            onPress={()=>setInputValue('Abbottabad')}
                            style={styles.cityNamesContainer}
                            >
                                <Text>Abbottabad</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={()=>setInputValue('Abdul Hakim')}
                            style={styles.cityNamesContainer}
                            >
                                <Text>Abdul Hakim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={()=>setInputValue('Ahmedpur East')}
                            style={styles.cityNamesContainer}
                            >
                                <Text>Ahmedpur East</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={()=>setInputValue('Ali Pur')}
                            style={styles.cityNamesContainer}
                            >
                                <Text>Ali Pur</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }

            </ScrollView>
        </View>
    )
}

export default Search;