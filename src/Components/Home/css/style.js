import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
mainContainer:{
    flex: 1,
    // backgroundColor: '#307ecc' 
},
toggleContainer:{
     height:'25%',
    //flex:1,
    backgroundColor:'#7DE24E'
},
scrollView:{
flex:1
},
imageStyle:{
    flex: 1,
    justifyContent: "center",
    // height:'100%'
},
toggleButton:{
    flexDirection:'row',
    justifyContent:'center',
    marginHorizontal:95,
    // borderWidth:3,
    // borderColor:'#008000',
    // paddingHorizontal:8,
    // paddingVertical:7,
    marginTop:8
    
},
buyBtn:{
    backgroundColor:'#32CD32',
    borderWidth:2,
    borderColor:'#32CD32',
    paddingHorizontal:20,
    paddingVertical:7,
    borderTopLeftRadius:4,
    borderBottomLeftRadius:4
    
},
rentBtn:{
    backgroundColor:'#32CD32',
    borderWidth:2,
    borderColor:'#32CD32',
    paddingHorizontal:20,
    paddingVertical:7,
    borderTopRightRadius:4,
    borderBottomRightRadius:4
},
buyTextStyle:{
    fontWeight:'bold',
    color:'white'
}

})

export default styles;
