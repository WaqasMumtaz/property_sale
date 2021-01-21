//import React and Hook we needed
import React, { useState, useEffect, useRef } from 'react';
import styles from './css/style';
import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import HttpUtilsFile from '../../Services/HttpUtils';
import ViewPropertyCarousal from '../../ViewProperties';
import { connect } from 'react-redux';


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

let userAddProperty = [];

const ProfileScreen = (props) => {
    const { navigate } = props.navigation;
    const [userData, setUserData] = useState();
    const [myAddedProperties, setMyAddedProperties] = useState([])

    props.navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity 
          onPress={()=>navigate('Edit Profile', {userData})}
          style={styles.editBtn}
          >
           <Icon name="pencil" size={25} color="#fff" />
          </TouchableOpacity>
        )  
      });

    
   // const userId = userData && userData._id;
    // const userProfileData = () => {
    //     AsyncStorage.getItem("currentUser").then(value => {
    //         if (value !== null) {
    //             let userDataStore = JSON.parse(value);
    //             console.log('User DAta >>', userDataStore);
    //             setUserData(userDataStore);
    //         }
    //         // console.log('Asynstorage Data >>', value);
    //         // else {
    //         //     navigate('Login',{routeName:'Add Property'});
    //         // }
    //     })
    // }

    const getAllProperties = async () => {
        let userId = '';
        AsyncStorage.getItem("currentUser").then(value => {
            if (value !== null) {
                let userDataStore = JSON.parse(value);
                console.log('User DAta >>', userDataStore);
                userId = userDataStore._id; 
                setUserData(userDataStore);
            }
        })
        const userData = await HttpUtilsFile.get('getproperties');
        //console.log('get properties data >>', userData);
        if (userData.code == 200) {
            //console.log('Data properties >>', userData.content);
            const allProperties = userData.content;
            //console.log('All Data >>', allProperties);
            //userAddProperty = allProperties.filter((item) => item.userId === userData._id && item.status === 'approved');
            allProperties.map(items => {
                if (items.userId === userId && items.status !== 'pending') {
                  // console.log('Rent Items >>', items);
                  userAddProperty.push(items);
                  console.log('my property >>', userAddProperty);
                  setMyAddedProperties(userAddProperty)
                  //console.log('Rent DAta >>', rentData);
                }
              })
        }
    }
    function showViewPropertyDetails(item){
        const propertyDetail = {
          price: item.priceValue,
          priceUnit: item.priceUnit,
          location: item.locationArea,
          cityName: item.cityName,
          areaSizeUnit: item.areaSizeUnit,
          areaSizeValue: item.areaSizeValue,
          baths: item.baths,
          bedRooms: item.bedRooms,
          countryCode: item.countryCode,
          date: item.date,
          email: item.email,
          latitude: item.latitude,
          longitude: item.longitude,
          mobileNo: item.mobileNo,
          month: item.month,
          propertyDescription: item.propertyDescription,
          propertyCategory: item.propertyTypeData.nameOfCategoryUserSelected,
          propertyType: item.propertyTypeData.nameOfUserProperty,
          purpose: item.purposeValue,
          status: item.status,
          whatsappNo: item.whatsappNo,
          year: item.year,
          propertyId: item._id,
          profile:true
        }
        navigate('Details', { propertyDetail: propertyDetail });
      }


    useEffect(() => {
        getAllProperties();
        //userProfileData();
    }, [])

useEffect(()=>{
    if(props.user !== undefined){
        setUserData(props.user);
    }
})
    
    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{ flex: 1, height: scrolHeight }}
                contentContainerStyle={{ flexGrow: 1 }}
                automaticallyAdjustContentInsets="automatic"
            >
                <View style={styles.profileContainer}>
                    <View style={styles.profilPicContainer}>
                        <Icon name="user" size={90} color="#808080" />
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameStyle}>{userData !== undefined ? userData.name : null}</Text>
                        </View>
                        <View style={styles.userTitle}>
                            <Text style={styles.userTitleStyle}>Role : {userData !== undefined ? userData.role : null}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.userInfoContainer}>
                    <View>
                        <Text style={styles.labelStyle}>Email</Text>
                        <Text style={styles.userInsertedValueStyle}>{userData !== undefined ? userData.email : null}</Text>
                    </View>
                    <View style={styles.viewBlock}>
                        <Text style={styles.labelStyle}>Account Status</Text>
                        <Text style={styles.userInsertedValueStyle}>{userData !== undefined ? userData.status : null}</Text>
                    </View>
                    <View style={styles.viewBlock}>
                        <Text style={styles.labelStyle}>Contact Number</Text>
                        <Text style={styles.userInsertedValueStyle}>{userData !== undefined && userData.contact !== undefined ? userData.contact : null}</Text>
                    </View>
                    {/* <View style={styles.viewBlock}>
                        <Text style={styles.labelStyle}>Gender</Text>
                        <Text style={styles.userInsertedValueStyle}>Male</Text>
                    </View> */}
                    {/* <View style={{ marginBottom: 10 }}>

                    </View> */}
                </View>
                <View style={styles.recentSearchHeading}>
                    <Text style={{ fontWeight: 'bold', color: 'gray', }}>My Properties</Text>
                </View>
                {myAddedProperties && myAddedProperties.length > 0 ?
                    <View style={styles.recentSearhCarosualContainer}>
                        <ViewPropertyCarousal
                            data={myAddedProperties}
                            showViewPropertyDetails={showViewPropertyDetails}
                        />
                    </View>
                    :
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
                        <Text style={{fontWeight:'bold'}}>Not yet add any property</Text>
                    </View>
                }
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state)=>{
    // console.log('MapStateToProps State Value ..>>>', state);
       return {
         user:state.authReducer.user
       }
     }
     
     const mapDispatchToProps = (dispatch)=>{
     return {
       updateUser:null
     }
     }
   
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
   