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





const Carousal = (props) => {
    // console.log('Carousal props function matchCarouselData>>', props.matchCarouselData);
    const Item = ({ title, para, detail, price, id, item, propertyImages }) => (
        <TouchableOpacity key={id}
            onPress={() => props.matchCarouselData(item)}
            style={[propertyImages.length !== 0 ? styles.itemWithImg : styles.item]}
        >
            {propertyImages.length !== 0 ?
                <View>
                    <Image
                        source={{ uri: `${propertyImages[0]}` }}
                        style={{ width: '100%', height: 100 }}
                        resizeMode='stretch'
                    />
                </View>
                :
                null
            }
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.para}>{para}</Text>
            </View>
            <Text style={styles.lastPara}>
                {detail}
            </Text>
            <Text style={styles.lastPara}>
                {price}
            </Text>

        </TouchableOpacity>


    );

    const renderItem = ({ item }) => (
        <Item
            item={item}
            id={item._id}
            title={`${item.propertyTypeData.nameOfUserProperty.toUpperCase()} FOR ${item.purposeValue.toUpperCase()}`}
            para={`In ${item.cityName}`}
            detail={`${item.areaSizeValue} ${item.areaSizeUnit}`}
            price={`${item.priceValue} ${item.priceUnit}`}
            propertyImages={item.propertyImages !== undefined ? item.propertyImages : []}
        />
    );

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={props.data}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                horizontal={true}
            // numColumns={3}

            />
        </View>
    )
}

export default Carousal;