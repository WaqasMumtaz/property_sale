import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
mainContainer:{
    flex: 1,
    marginHorizontal:12,
    // backgroundColor:'#fff'
},
inputText:{
    borderColor:'#ebe9e6',
    borderWidth:1,
    height:40
},
locationContainer:{
    marginHorizontal:12
},
propertyTypeContainer:{
    marginHorizontal:12
},
borderLine:{
    borderBottomWidth:2,
    borderBottomColor:'#ebe9e6',
    elevation:3,
    marginVertical:20
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
btnStyle:{
    borderRadius:14,
    flexDirection:'row',
    justifyContent:'center',
    paddingHorizontal:30,
    borderWidth:1,
    borderColor:'#ebe9e6',
    paddingVertical:8
},
clckdBtnStyle:{
    borderRadius:14,
    flexDirection:'row',
    justifyContent:'center',
    paddingHorizontal:30,
    borderWidth:1,
    borderColor:'#DAEBDE',
    backgroundColor:'#DAEBDE',
    paddingVertical:8
},
clickdText:{
    color:'#7DE24E',
    fontWeight:'bold'
},
txt:{
color:'#000'
},
btnsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15
},
detailProprtyInput:{
    borderBottomColor:'#ebe9e6',
    borderBottomWidth:1,
    height:40
},
bottomBtnsContainer:{
    flexDirection:'row',
    justifyContent:'space-around'
},
uploadLateBtn:{
    borderWidth:2,
    borderColor:'#7DE24E',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:30,
    paddingVertical:8
},
uploadNowBtn:{
    borderWidth:1,
    borderColor:'#7DE24E',
    backgroundColor:'#7DE24E',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:30,
    paddingVertical:8


}
})

export default styles;