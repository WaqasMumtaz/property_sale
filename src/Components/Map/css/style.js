import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
    container: {
       // ...StyleSheet.absoluteFillObject,
        height: 300,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
      bottomContainer:{
        justifyContent:'flex-end',
        marginBottom:15
        
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