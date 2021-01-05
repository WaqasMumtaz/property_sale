import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
mainContainer:{
    flex: 1,
    marginHorizontal:12,
    // backgroundColor:'#fff'
},
bottomContainer:{
    padding:3,
    borderTopWidth:2,
    borderTopColor:'#D3D3D3', 
},
btnsContainer:{
    flexDirection:'row',
   justifyContent:'flex-end',
   padding:10,
   backgroundColor:'#fff'

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
    backgroundColor:'#32CD32',
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
},
iconBtn:{
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#D3D3D3',
    borderRadius:45,
    height:45,
    width:45
},
iconBtnSelectd:{
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#DAEBDE',
    borderRadius:45,
    height:45,
    width:45
},
iconStyle:{
    color:'#000'
},
selctdIcon:{
    color:'#32CD32'
},
textStyle:{
    color:'#000',
    justifyContent:'center',
    alignItems:'center'
},
slctTextStyle:{
    color:'#32CD32',
    justifyContent:'center',
    alignItems:'center'
},
borderLine:{
    borderBottomWidth:1,
    borderBottomColor:'#D3D3D3',
    marginTop:10
},
priceRange:{
    marginVertical:10
},
areaRange:{
    marginVertical:10

},
item:{
    width:100,
    height:40,
    backgroundColor:'#ebe9e6',
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:7
    // padding:10
},
selectedItem:{
    width:100,
    height:40,
    backgroundColor:'#DAEBDE',
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:7
},
// bedRoomsContainer:{
//     marginVertical:10,

// },
btnsStyle:{
    padding:10,
    backgroundColor:'#ebe9e6',
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    borderRadius:5
},
selectedBtnStyle:{
    padding:10,
    backgroundColor:'#DAEBDE',
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    borderRadius:5
},
bedRoomsContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginVertical:0.5,
    // justifyContent:'space-between'

},
bedRoomTitleIcon:{
    flexDirection:'row',
    marginTop:20
},
bathroomsContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
},
addKeyInput:{
    borderWidth:3,
    borderColor:'#ebe9e6',
    height:50,
    borderRadius:7,
    flex:1
    
},
addBtn:{
    borderWidth:3,
    borderColor:'#ebe9e6',
    height:50,
    borderRadius:7,
    marginHorizontal:7,
    justifyContent:'center',
    alignItems:'center',
    padding:15
},
addBtnContainer:{
    marginTop:10,
    marginBottom:15,
    flexDirection:'row',
    
},
centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
   // alignItems: "",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width:'90%',
    height:'40%'
  },
  


})

export default styles;