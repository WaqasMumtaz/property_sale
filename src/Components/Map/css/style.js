import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
    container: {
       // ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
       // backgroundColor:'red'
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
      bottomContainer:{
       justifyContent:'flex-end',
       marginTop:50,
       marginBottom:20
       
        
      },
      chipScrollView:{
        position:'absolute',
        //paddingHorizontal:12,
        borderTopColor:'#D3D3D3',
        borderTopWidth:1,
        //elevation:2,
        paddingTop:4,
       // marginBottom:20
      },
      itemsContainer:{
        flexDirection:'row',
        borderColor:'#D3D3D3',
        backgroundColor:'#D3D3D3',
        padding:8,
        paddingHorizontal:20,
        marginHorizontal:12,
        height:35,
        borderRadius:20
      },
    //   borderLine:{
    //     borderBottomWidth:0.8,
    //     borderBottomColor:'#D3D3D3',
    //     marginVertical:12,
    //     
    // },
    
})

export default styles;