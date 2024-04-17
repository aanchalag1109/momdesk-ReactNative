import React from "react";
import { Pressable, Text, View } from "react-native";
import { Styles } from "./styles";

const ImgButton = ({ leftImage, btnText, custumBtnStyle, custumTextStyle, handleFunc }) => {
    return (
        <Pressable onPress={handleFunc} style={[Styles.btnContainer,custumBtnStyle]}>
            <View style={Styles.btnImageStyle}>{leftImage}</View>
            <Text style={[Styles.btnTextStyle, custumTextStyle]}>
                {btnText}
            </Text>
        </Pressable>
    )
}

export default ImgButton