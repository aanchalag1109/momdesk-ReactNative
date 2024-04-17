import { StyleSheet } from "react-native";
import { colorItem } from "../../assets/color";
import { Fonts } from "../../assets/fontFamilies";
import { FontSizes } from "../../assets/fontsizes";

export const Styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: colorItem.white,
        borderRadius: 50,
        height: 50,
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    btnTextStyle: {
        color: colorItem.black,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: FontSizes.medium
    },
    btnImageStyle:{
        position:"absolute",
        left:20
    }
})