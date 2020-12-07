import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
mainContainer:{
    flex: 1,
    // backgroundColor: '#307ecc' 
},
toggleContainer:{
     height:130,
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
textStyle:{
    fontWeight:'bold',
    color:'white'
},
selectdBuyBtn:{
    backgroundColor:'white',
    borderWidth:2,
    borderColor:'white',
    paddingHorizontal:20,
    paddingVertical:7,
    borderTopLeftRadius:4,
    borderBottomLeftRadius:4
},
selectdRentBtn:{
    backgroundColor:'white',
    borderWidth:2,
    borderColor:'white',
    paddingHorizontal:20,
    paddingVertical:7,
    borderTopRightRadius:4,
    borderBottomRightRadius:4
},
selectdTextBtn:{
    fontWeight:'bold',
    color:'#32CD32'
},
searchContainer:{
    marginTop:20,
    backgroundColor:"#fff",
    marginHorizontal:12,
    flexDirection:'row',
    justifyContent:'flex-end',
    // padding:3,
    height:45,
    borderWidth:1,
    borderColor:'white',
    borderRadius:3
},
inputTexts:{
    flex: 1,
        color: 'black',
        height: 40,
        //borderColor: 'gray',
        backgroundColor: 'white',
       // borderRadius: 2,
        //marginRight: 20,
        marginLeft:10
},
cityBtn:{
    height:40,
    paddingVertical:10,
    paddingLeft:5
},
line:{
    borderRightWidth:0.2,
    borderRightColor:'gray',
    marginLeft:22,
    marginVertical:7
},
iconStyle:{
    color:"#307ecc",
    marginVertical:13,
    marginLeft:5
},
browseHeading:{
    marginHorizontal:12,
    marginTop:20
},
paginationContainer:{
    marginHorizontal:12,
    marginTop:12
    
},
recentSearchHeading:{
    marginHorizontal:12,
    marginTop:30,
    //backgroundColor:'red',
    // marginLeft:20,
    
},
recentSearhCarosualContainer:{
    marginHorizontal:12,
    marginTop:10,
}

})

export default styles;
