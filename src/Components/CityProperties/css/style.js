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


},
centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems:'flex-end',
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
    // height:'40%'
  },
  headingWithBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#32CD32',
    borderBottomWidth: 1,
    paddingVertical: 15
},
modalText: {
    color: '#32CD32',
    fontWeight: 'bold',

},
itemsFilter:{
    backgroundColor: '#ebe9e6', 
    borderRadius: 10,
    padding:5,
    marginVertical:5
}


})

export default styles;