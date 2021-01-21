import React from 'react';
import { StyleSheet,Platform} from 'react-native';

const styles =StyleSheet.create({
    mainContainer:{
        flex:1,
        marginHorizontal:20,
       
    },
    headerIcon:{
        height:18,
        width:18
    },
    headerIconContainer:{
        marginRight:30,
        marginBottom:8
    },
    headingContainer:{
        // flex:0.25,
        //height:'7%',
        //backgroundColor:'pink'
    },
    headingStyle:{
        fontSize:20,
        color:'#4f4f4f',
        // fontFamily: "MontserratMedium",
    },
    profilPicStyle:{
        width: 150,
        height: 150, 
        borderRadius: 150/2
    },
    profilPicContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginTop:15,
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    nameContainer:{
        // borderWidth:2,
        // borderColor:'red',
        marginTop:15,
        padding:5,
    },
    nameStyle:{
        fontWeight:'bold',
        color:'#000'
    },
    userTitle:{
        // borderWidth:2,
        // borderColor:'green',
        justifyContent:'center',
        alignItems:'center',
        padding:5
    },
    userTitleStyle:{
        // fontFamily: 'MontserratLight',
        color:'#4f4f4f',
    },
    profileContainer:{
        flex:0.25,
        //backgroundColor:'red'
    },
    userInfoContainer:{
       // flex:4,
       // backgroundColor:'yellow'
    },
    emailContainer:{
        flex:1,
        backgroundColor:'blue'
    },
    labelStyle:{
        // fontFamily:'MontserratMedium',
        // color: '#A6A6A6',
        color: '#4f4f4f',
    },
    userInsertedValueStyle:{
        // fontFamily: 'MontserratLight',
        color: '#4f4f4f',
        marginTop:7,
        //marginLeft:7,
        backgroundColor:'#e5e5e5',
        padding:10,
        paddingLeft:16,
        borderRadius:3,

    },
    viewBlock:{
        marginTop:12
    },
    recentSearchHeading:{
        marginHorizontal:12,
        marginTop:30,
        //backgroundColor:'red',
        // marginLeft:20,
        
    },
    recentSearhCarosualContainer:{
       // marginHorizontal:12,
        marginTop:10,
    },
    editBtn:{
        marginRight:20
    }
    
})

export default styles;