import * as React from 'react';
import { View, StyleSheet, Image , TouchableOpacity } from 'react-native';
import styles from './css/style';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = (props) => {
    return (
        <View style={styles.mainContainer}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                  <View style={styles.logoSection}>
                      <Image
                       source={require('../../Images/sale.png')}
                       style={styles.imageStyle}
                       resizeMode="contain"
                      />
                  </View>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerContent;