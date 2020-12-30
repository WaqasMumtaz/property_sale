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
const Item = ({ title, id }) => (
    <View>
        <TouchableOpacity style={styles.item} id={id}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    </View>



);

const Search = ({ route, navigation }) => {
    const renderItem = ({ item }) => (
        //console.log('Render Items data >>', item)
        <Item title={item.title} id={item.id} />
    );


    const paramsData = route.params.name;
    const [inputValue, setInputValue] = useState('');
    const [cityData, setCityData] = useState([]);


    // useEffect(() => {
    //     console.log('Params DAta Search Screen >>', paramsData)
    // })

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
                <FlatList
                    data={cityData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                {/* </>
                    : */}
                {/* <>
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
                            <FlatList
                                data={cityData}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </>
                } */}

            </ScrollView>
        </View>
    )
}

export default Search;