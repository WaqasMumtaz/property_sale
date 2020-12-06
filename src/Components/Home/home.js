//Import React and Hook we needed
import React, { useState , useEffect } from 'react';
import styles from './css/style';

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
  Dimensions
} from 'react-native';
// import Loader from '../../Loader';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import Icon from 'react-native-vector-icons/FontAwesome';
//const image = { uri: "https://reactjs.org/logo-og.png" };
const { scrolHeight } = Dimensions.get('window').height;

const Home = () => {

  const [userSelectType , setUserSelectType] = useState('buy');

  useEffect(()=>{
    console.log('State Value >>', userSelectType);
  })

  return (
    <KeyboardAwareView animated={true}>
    <View style={styles.mainContainer}>
     <ScrollView style={{ flex: 1, backgroundColor: 'white', height: scrolHeight }}
      contentContainerStyle={{ flexGrow: 1 }}
      automaticallyAdjustContentInsets="automatic"
      > 
        <View style={styles.toggleContainer}>
         {/* <ImageBackground source={require('../Images/sale.png')} 
            style={styles.imageStyle}
            resizeMode='stretch'
            > */}
           <View style={styles.toggleButton}>
             <TouchableOpacity
             onPress={()=>setUserSelectType('buy')}
             style={[userSelectType !== 'rent' ? styles.selectdBuyBtn : styles.buyBtn]}
             >
               <Text style={[userSelectType !== 'rent' ? styles.selectdTextBtn : styles.textStyle]}>Buy</Text>
             </TouchableOpacity>
             <TouchableOpacity 
             onPress={()=>setUserSelectType('rent')}
             style={[userSelectType !== 'buy' ? styles.selectdRentBtn : styles.rentBtn]}
             >
               <Text style={[userSelectType !== 'buy' ? styles.selectdTextBtn : styles.textStyle]}>Rent</Text>
             </TouchableOpacity>
           </View>
         {/* </ImageBackground> */}
           <View style={styles.searchContainer}>
            <TouchableOpacity style={styles.cityBtn}>
              <Text style={{color:'#307ecc', fontWeight:'bold'}}>Karachi</Text>
            </TouchableOpacity>
            <Icon name="arrow-circle-right" size={15}  
              style={styles.iconStyle}
            />
            <View style={styles.line}></View>
            <TextInput
            placeholder="Search Properties for Sale "
            style={styles.inputTexts}
            />
           </View>

        </View>


     </ScrollView> 
    </View>
    </KeyboardAwareView>
  )

}

export default Home;
