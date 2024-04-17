import React from 'react'
import { Pressable, Text } from 'react-native'
import { Styles } from './style'
import { colorItem } from '../../assets/color'

const CommonBtn = ({ btnText, handleBtn, customBtnStyle, customBtnTextStyle, ripleColor='rgba(0, 0, 0, .32)' }) => {
    return (
        <Pressable android_ripple={{ color: ripleColor, foreground: true }} onPress={handleBtn} style={[Styles.btnContainer, customBtnStyle]}>
            <Text style={[Styles.btnTextStyle, customBtnTextStyle]}>{btnText}</Text>
        </Pressable>
    )
}

export default CommonBtn