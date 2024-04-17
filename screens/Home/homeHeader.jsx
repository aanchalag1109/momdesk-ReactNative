import React, { Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { images } from '../../assets/images';
import { animation } from "../../assets/animation";



const HomeHeader = ({ left, rightsLeftItem, rightsRightItem, handleRight = () => { }, handleRightMost = () => { } }) => {

    return (
        <View style={styles.headerContainer}>
            <View style={styles.leftIconContainer}>
                {left()}
            </View>
            <View style={styles.centerContent}>
                <Text style={styles.centerContentText}> Home </Text>
            </View>
            <View style={styles.rightIconsContainer}>
                <Pressable onPress={handleRight} style={{ width: "30%" }}>
                    <Ionicons name="add-circle" style={styles.headerIconStyle} />
                </Pressable>
                <Pressable onPress={handleRightMost} style={{ width: "30%" }}>
                    <Ionicons name="exit-outline" style={styles.headerIconStyle} />
                </Pressable>
            </View>
        </View>
    )
}

export default HomeHeader