import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { colorItem } from '../../assets/color';
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './style';


const Header = ({ left = () => (<Ionicons name="arrow-back" style={styles.headerIconStyle} />), timeStart, leftIconFunction = () => { }, right = () => (<Ionicons name="add-circle-outline" style={styles.headerIconStyle} />), rightIconFunction = () => { }, title = '' }) => {
  return (
    <View
      style={styles.headerContainer}>
      <View style={styles.headingContainer}>
        {
          left ? <Pressable
            android_ripple={{ color: colorItem.white, foreground: false }}
            onPress={leftIconFunction}
            style={styles.leftContainer}>
            <Text>{left()}</Text>
          </Pressable> : ''
        }
        <View style={styles.head}>
          <Text style={styles.headText}>{title}</Text>
        </View>
      </View>
      <Pressable
        onPress={rightIconFunction}
        style={styles.rightContainer}>
        <Text>{right()}</Text>
      </Pressable>
    </View>
  );
};

export default Header;
