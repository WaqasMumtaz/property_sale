import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
mainContainer:{
    flex: 1,
    // backgroundColor: '#307ecc' 
},
drawerContent: {
    flex: 1,
  },
  logoSection: {
    //paddingLeft: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  imageStyle:{
    width: '50%',
    height: 100,
    margin: 30,
  },
  userAuthContainer:{
    flexDirection:'row',
    justifyContent:'center',
    padding:8,
    borderWidth:2,
    borderColor:'#7DE24E',
    borderRadius:5
  },
  registrationContainer:{
    marginHorizontal: 35,
    // backgroundColor:'red',
  },
  userNameContainer:{
    justifyContent:'center' ,
    alignItems:'center',
    padding:5
  },
  borderLine:{
    borderBottomWidth:0.4,
    borderBottomColor:'gray',
    marginHorizontal:5,
    marginTop:'5%',
    shadowColor:'gray',
    shadowOpacity: 0.8,

  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 10,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})

export default styles;