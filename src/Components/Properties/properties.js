//Import React and Hook we needed
import React, { useState, useEffect } from 'react';
import styles from './css/style';
// import CardView from 'react-native-cardview';

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
    Animated
} from 'react-native';






const Properties = (props) => {

    const [clickdBtn, setClickdBtn] = useState('type');

    const Item = ({ id, title, city, area }) => (
        <View style={styles.itemsContainer}>
            {
                props.screenType == 'Home' && clickdBtn == 'type' && title !== '' ?
                    <TouchableOpacity
                    onPress={()=>props.getDataProperties(props.screenType , title)} 
                    style={styles.item} key={id}
                    >
                        <Text style={styles.title}>{title}</Text>
                        {/* <Text style={styles.para}>{para}</Text> */}
                    </TouchableOpacity>
                    : props.screenType == 'Home' && clickdBtn == 'location' ?
                        <View>
                            <TouchableOpacity 
                              onPress={()=>props.getDataProperties(props.screenType , city)}
                            style={styles.item} 
                            key={id}>
                                <Text style={styles.title}>{city}</Text>
                            </TouchableOpacity>
                        </View>
                        : props.screenType == 'Home' && clickdBtn == 'area' && area !== '' ?
                            <View>
                                <TouchableOpacity 
                                 onPress={()=>props.getDataProperties(props.screenType , area)}
                                style={styles.item} 
                                key={id}>
                                    <Text style={styles.title}>{area}</Text>
                                    <Text style={styles.para}>Homes</Text>
                                </TouchableOpacity>
                            </View>
                            : props.screenType == 'Plots' && clickdBtn == 'type' && title !== '' ?
                            <TouchableOpacity 
                            onPress={()=>props.getDataProperties(props.screenType , title)}
                            style={styles.item} 
                            key={id}>
                                <Text style={styles.title}>{title}</Text>
                                {/* <Text style={styles.para}>{para}</Text> */}
                            </TouchableOpacity>
                            :props.screenType == 'Plots' && clickdBtn == 'location' ?
                            <View>
                                <TouchableOpacity 
                                 onPress={()=>props.getDataProperties(props.screenType , city)}
                                style={styles.item}
                                key={id}>
                                    <Text style={styles.title}>{city}</Text>
                                </TouchableOpacity>
                            </View>
                            :props.screenType == 'Plots' && clickdBtn == 'area' && area !== '' ?
                            <View>
                                <TouchableOpacity 
                                 onPress={()=>props.getDataProperties(props.screenType , area)}
                                style={styles.item} 
                                key={id}>
                                    <Text style={styles.title}>{area}</Text>
                                    <Text style={styles.para}>Plots</Text>
                                </TouchableOpacity>
                            </View>
                            :props.screenType == 'Commercial' && clickdBtn == 'type' && title !== '' ?
                            <TouchableOpacity
                            onPress={()=>props.getDataProperties(props.screenType , title)} 
                            style={styles.item}
                            key={id}>
                                <Text style={styles.title}>{title}</Text>
                                {/* <Text style={styles.para}>{para}</Text> */}
                            </TouchableOpacity>
                            :props.screenType == 'Commercial' && clickdBtn == 'location' ?
                            <View>
                                <TouchableOpacity
                                 onPress={()=>props.getDataProperties(props.screenType , city)} 
                                style={styles.item} 
                                key={id}>
                                    <Text style={styles.title}>{city}</Text>
                                </TouchableOpacity>
                            </View>
                            :props.screenType == 'Commercial' && clickdBtn == 'area' && area !== '' ?
                            <View>
                                <TouchableOpacity 
                                 onPress={()=>props.getDataProperties(props.screenType , area)}
                                style={styles.item}
                                 key={id}>
                                    <Text style={styles.title}>{area}</Text>
                                    <Text style={styles.para}>Shops</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            null

            }

        </View>

    );

    const renderItem = ({ item }) => (
        <Item title={item.title} city={item.city} area={item.area} id={item.id} />
    );
    //    useEffect(()=>{
    //        console.log('clickdBtn >>', clickdBtn)
    //    })
    return (
        <View style={styles.mainContainer}>
            <View style={styles.butnsContainer}>
                {/* <TouchableOpacity
                onPress={()=>setClickdBtn('popular')} 
                style={[clickdBtn !=='popular' ? styles.btnStyle : styles.clickdBtn ]}
                >
                    <Text style={[clickdBtn !== 'popular' ? styles.btnText : styles.clickdBtnText]}>Popular</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                    onPress={() => setClickdBtn('type')}
                    style={[clickdBtn !== 'type' ? styles.btnTypeStyle : styles.clickdTypeBtn]}
                >
                    <Text style={[clickdBtn !== 'type' ? styles.btnText : styles.clickdBtnText]}>Type</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setClickdBtn('location')}
                    style={[clickdBtn !== 'location' ? styles.btnStyle : styles.clickdBtn]}
                >
                    <Text style={[clickdBtn !== 'location' ? styles.btnText : styles.clickdBtnText]}>Location</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setClickdBtn('area')}
                    style={[clickdBtn !== 'area' ? styles.btnStyle : styles.clickdBtn]}
                >
                    <Text style={[clickdBtn !== 'area' ? styles.btnText : styles.clickdBtnText]}>Area Size</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.propertyNamesContainer}> */}
            <FlatList
                data={props.data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                // horizontal={true}
                numColumns={3}

            />
            {/* </View> */}
        </View>
    );
}

export default Properties;