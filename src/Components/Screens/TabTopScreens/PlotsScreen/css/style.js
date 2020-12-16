import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
    mainContainer:{
        paddingVertical: 15, 
       // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textContainer:{
        marginTop:5,
        flexDirection:'row', 
        justifyContent:'center'
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
})

export default styles;
