import {StyleSheet,Dimensions,Platform} from 'react-native';
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 300,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
})

export default styles;