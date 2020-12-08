//Import React and Hook we needed
import React, { useState, useEffect } from 'react';
import styles from './css/style';
import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';



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
} from 'react-native';
const { scrolHeight } = Dimensions.get('window').height;

const FilterScreen =(props)=>{
    const [userSelectType , setUserSelectType] = useState('buy');

    const shadowStyle={
        shadowOpacity:1
    }

  return(
    <>
     <View style={styles.mainContainer}>
         <ScrollView style={{ flex: 1, height: scrolHeight }}
          contentContainerStyle={{ flexGrow: 1 }}
          automaticallyAdjustContentInsets="automatic"
        >
        <View style={[styles.wantContainer, shadowStyle]}>
            <Icon name="check-circle" size={25} color='gray' style={{marginTop:5}}/>
            <Text style={{marginRight:62, marginTop:8}}>i want to</Text>
            {/* <Icon name="angle-right" size={20}/> */}
            <View style={{flexDirection:'row', marginLeft:22,}}>
            <RadioButton
             value={userSelectType}
             status={ userSelectType === 'buy' ? 'checked' : 'unchecked' }
             onPress={() => setUserSelectType('buy')}
             color='#7DE24E'
            />
            <Text style={[userSelectType !== 'buy' ? styles.unCheck : styles.check]}>Buy</Text>
            </View>
            <View style={{flexDirection:'row', marginRight:5}}>
            <RadioButton
             value={userSelectType}
             status={ userSelectType === 'rent' ? 'checked' : 'unchecked' }
             onPress={() => setUserSelectType('rent')}
             color='#7DE24E'
            />
            <Text style={[userSelectType !== 'rent' ? styles.unCheck : styles.check]}>Rent</Text>
            </View>
        </View> 
        <View style={styles.cityContainer}>
            <TouchableOpacity style={styles.selectCity}>
            <Icon name="map-marker" color='gray' size={25}/>
              <Text style={{marginRight:225}}>City{"\n"}Karachi</Text>
            <Icon name="angle-right" color='gray' size={25}/>
           </TouchableOpacity>
            {/* <Text style={{marginLeft:38, color:'#307ecc'}}>Karachi</Text> */}
        </View>
        <View style={styles.locationContainer}>
           <TouchableOpacity style={styles.iconOrText}>
             <Icon name="building-o" color="gray" size={20}/>
             <Text style={{marginLeft:20}}>Select Locations</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.iconRight}>
             <Icon name="angle-right" color="gray" size={25}/>
           </TouchableOpacity>
           {/* <Text>Icon</Text> */}
        </View>
        <View style={styles.browsPropertyContainer}>
           
        </View>
           
        </ScrollView>
     </View>
     <View style={styles.bottomContainer}>
          <View style={styles.btnsContainer}>
          <TouchableButton 
           title='Reset'
           touchBtnStyle={styles.resetBtnStyle}
           textStyle={styles.resetText}
          />
           <TouchableButton 
           title='Show 1000+ Ads'
           touchBtnStyle={styles.adsBtnStyle}
           textStyle={styles.adsText}
          />
          </View>
          
     </View>
    </> 
  )
}

export default FilterScreen;