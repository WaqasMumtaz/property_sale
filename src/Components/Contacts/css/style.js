import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
msgsBtns:{
   borderWidth:1,
   borderColor:'#32CD32',
   flexDirection:'row',
//    width:"20%",
   justifyContent:'center',
   paddingVertical:8,
   paddingHorizontal:12

},
phoneBtn:{
    borderWidth:1,
   borderColor:'#32CD32',
   flexDirection:'row',
//    width:"35%",
   justifyContent:'center',
   paddingVertical:10,
   backgroundColor:'#32CD32',
   paddingHorizontal:30
},
messagBtn:{
    borderWidth:1,
    borderColor:'#32CD32',
    flexDirection:'row',
    // width:"20%",
    justifyContent:'center',
    paddingVertical:10,
   paddingHorizontal:12

},
whatsAppBtn:{
    borderWidth:1,
    borderColor:'#32CD32',
    flexDirection:'row',
    // width:"25%",
    justifyContent:'center',
    paddingVertical:10,
    paddingHorizontal:6
    
}
})

export default styles;