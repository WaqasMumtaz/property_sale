import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
mainContainer:{
    flex: 1,
    marginHorizontal:12,
    // justifyContent: 'center',
    // alignItems: 'center'
},
bottomContainer:{
    padding:3,
    borderTopWidth:0.3,
    borderTopColor:'gray', 
},
btnsContainer:{
    flexDirection:'row',
   justifyContent:'flex-end',
   padding:10
},
resetBtnStyle:{
// backgroundColor:'#000',
paddingVertical:12,
marginRight:8,
paddingHorizontal:10,
justifyContent:'center'
},
resetText:{
color:'#808080',
alignItems:'center',
fontWeight:'bold',

},
adsBtnStyle:{
    backgroundColor:'#7DE24E',
    paddingHorizontal:50,
    paddingVertical:12,
    justifyContent:'center',
    borderRadius:5
},
adsText:{
color:'#fff',
fontWeight:'bold',
fontSize:16
},
wantContainer:{
    flexDirection:'row',
    paddingVertical:12,
    borderBottomWidth:0.3,
    borderBottomColor:'#808080',
    justifyContent:'space-between',
      
    
},
unCheck:{
    color:'#000',
    paddingTop:8
},
check:{
    color:'#7DE24E',
    paddingTop:8

},
selectCity:{
    flexDirection:'row',
    justifyContent:'space-between',

},
cityContainer:{
    paddingVertical:12,
    borderBottomWidth:0.3,
    borderBottomColor:'#808080',
},
locationContainer:{
flexDirection:'row'
},
iconOrText:{
    // backgroundColor:'red',
    width:'50%',
    flexDirection:'row',
    paddingVertical:12,
    borderBottomWidth:0.3,
    borderBottomColor:'#808080',
},
iconRight:{
    width:'50%',
    flexDirection:'row',
    paddingVertical:12,
    borderBottomWidth:0.3,
    borderBottomColor:'#808080',
    justifyContent:'flex-end'
}

})

export default styles;