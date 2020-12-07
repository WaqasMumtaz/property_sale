import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
mainContainer:{
    flex: 1,
    // backgroundColor: '#307ecc' 
    justifyContent:'center',
    alignItems:"center",
},
item:{
    borderWidth:2,
    borderRadius:5,
    borderColor:'#DCDCDC',
    padding:12,
    marginHorizontal:8,
    width:200,
    height:120,
    justifyContent:'space-between'
},
title:{
    color:'#307ecc',
    fontWeight:'bold',
},
para:{
    // fontSize:13,
    color:'gray'
},
lastPara:{
    color:'gray',
    fontSize:12
}

})

export default styles;