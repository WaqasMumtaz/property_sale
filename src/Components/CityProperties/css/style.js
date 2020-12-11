import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
mainContainer:{
    flex: 1,
    marginHorizontal:12,
    marginTop:10
    // backgroundColor:'#fff'
},
listBtnsContainer:{
    // backgroundColor:'red',
   
},
propertyItemContainer:{
    borderColor:'#ebe9e6',
    borderWidth:3,
    padding:5,
    borderRadius:5,
    marginVertical:15
},
filter:{
    borderBottomWidth:2,
    borderLeftWidth:2,
    borderTopWidth:2,
    borderColor:'gray',
    width:'20%',
    padding:5
},
item:{
    borderWidth:2,
    borderColor:'#ebe9e6',
    margin:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:10,
    borderRadius:6


}

})

export default styles;