import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import console = require('console');
// const screenWidth=Dimensions.get('window').width;
// const screenHeight=Dimensions.get('window').height;

const TouchableButton = (props) => {
  //console.log(props)
  return (
    <View >
      <TouchableOpacity
        // disabled={props.btnDisable}
        style={props.touchBtnStyle}
        onPress={props.onPress}>
        <Text
          style={props.textStyle} >
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default TouchableButton;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  btnStyle: {
    flex: 3,
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#FF6200',
    alignItems: 'center',
    borderRadius: 5

  }
})