import React, { Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import LottieView from 'lottie-react-native';
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
                <Pressable onPress={handleRight} style={{ width: "30%", height: 35, marginBottom: 4 }}>
                    <LottieView source={animation.ADD_ITEM} autoPlay loop />
                </Pressable>
                <Pressable style={{height:120, width:"30%"}} onPress={handleRightMost}>
                    <LottieView source={animation.LOGOUT} autoPlay loop />
                </Pressable>
            </View>
        </View>
    )
}

export default HomeHeader