import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
mainContainer:{
    flex: 1,
   // marginHorizontal:12,
    //marginTop:10
    // backgroundColor:'#fff'
},
inputText:{
    borderColor:'#ebe9e6',
    borderWidth:1,
    height:40
},
borderLine:{
    borderBottomWidth:2,
    borderBottomColor:'#ebe9e6',
    elevation:3,
    marginVertical:20
},
mainLocationBody:{
    margin:12
},
cityNamesContainer:{
    marginLeft: 12,
    marginVertical: 15
},
item:{
    //borderWidth:1,
    //borderColor:'#000',
    padding:10,
   // marginVertical:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
}

})

export default styles;