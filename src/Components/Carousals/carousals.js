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
} from 'react-native';

const data = [
    {
      id: '1',
      title: 'HOMES FOR SALE',
      para: 'In Green Park City'
    },
    {
      id: '2',
      title: 'HOMES FOR SALE',
      para: 'In Karachi'

    },
    {
      id: '3',
      title: 'HOMES FOR RENT',
      para: 'In Quaidabad and Umar Marvi Goth'

    },
    {
        id: '4',
        title: 'HOMES FOR Rent',
        para: 'In Samu Goth '
  
      },

  ]

const Item = ({ title , para }) => (
        <TouchableOpacity style={styles.item}>
            <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.para}>{para}</Text>
            </View>
            <Text style={styles.lastPara}>
               120 to 120 Sq. Yd Up to PKR 30 Lac
            </Text>
        </TouchableOpacity>


);

const Carousal =()=>{
    const renderItem = ({ item }) => (
        <Item title={item.title} para={item.para} />
    );
  
return(
    <View style={styles.mainContainer}>
         <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    // numColumns={3}

                />
    </View>
)    
}

export default Carousal;