import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
mainContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
butnsContainer:{
    backgroundColor:'#fff',
    flexDirection:'row',
    width:'100%',
    padding:3,
    justifyContent:'space-between'
},
btnStyle:{
    borderWidth:2,
    borderColor:'#DCDCDC',
    padding:6,
    borderRadius:15,
    // justifyContent:'center'
    // width:90,
    alignItems:'center'
},
clickdBtn:{
    borderWidth:2,
    borderColor:'#DAEBDE',
    padding:6,
    borderRadius:15,
    backgroundColor:'#DAEBDE',
    // justifyContent:'center'
    // width:90,
    alignItems:'center'
},
btnText:{
    fontSize:13,
    color:'#000'
},
clickdBtnText:{
    fontSize:13,
    color:'#32CD32',
    fontWeight:'bold'
},
clickdTypeBtn:{
    borderWidth:2,
    borderColor:'#BCE5C7',
    padding:6,
    borderRadius:14,
    width:70,
    alignItems:'center',
    backgroundColor:'#BCE5C7',

},
btnTypeStyle:{
    borderWidth:2,
    borderColor:'#DCDCDC',
    padding:6,
    borderRadius:14,
    width:70,
    alignItems:'center'
},
propertyNamesContainer:{
    width:'100%'
// backgroundColor:'#fff',
// marginVertical:15,
// flex:1
},
itemsContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
},
item: {
    backgroundColor: "#fff",
    // height:20,
    padding: 7,
    marginVertical: 8,
    marginHorizontal: 6,
    width:100,
    alignItems:'center',
    borderRadius:5,
    borderColor:'#DCDCDC',
    borderWidth:1,
    shadowColor: "#DCDCDC",
    // shadowOpacity: 0.8,
    
  },
  title: {
     fontSize: 11,
  },
  para:{
      fontSize:8
  }
})

export default styles;