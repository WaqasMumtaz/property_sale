import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
mainContainer:{
    flex: 1,
    // marginHorizontal:12,
    // backgroundColor:'#fff'
},
bottomBtns:{
    justifyContent:'flex-end',
    marginHorizontal:12,
},
bottomLine:{
    borderBottomWidth:2,
    borderBottomColor:'#D3D3D3',
    marginVertical:4,
    elevation:2
},
sliderImgsContainer:{
     // height:'30%',
    // justifyContent:'center',
    // alignItems:'center',
    // backgroundColor:'red'
},
wrapper:{
     //height:'20%',
},
priceHeading:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:10
},
borderLine:{
    borderBottomWidth:0.8,
    borderBottomColor:'#D3D3D3',
    marginVertical:12,
    elevation:2
},
detailsContainer:{
    margin:10
},
iconAndTitleContainer:{
    // borderWidth:1, 
    // borderColor:'red',
    width:'50%',
    alignItems:'center',
    justifyContent:'space-evenly',
    flexDirection:'row',
    padding:10,

},
textContainer:{
    padding:10,
    width:'50%'
},
shortDetailContainer:{
    margin:12,
    flexDirection:'row',
    justifyContent:'space-around'
},
shortIconsTexts:{
    flexDirection:'row',
    // borderWidth:2,
    // borderColor:'red'
},
mapScreenBtn:{
    margin:12,
    flexDirection:'row',
    //justifyContent:'space-between',
    //width:'80%',
    alignItems:'center'

}

})

export default styles;