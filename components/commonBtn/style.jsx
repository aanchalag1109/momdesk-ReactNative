import { StyleSheet } from 'react-native'
import { colorItem } from '../../assets/color'
import { FontSizes } from '../../assets/fontsizes'
import { Fonts } from '../../assets/fontFamilies'
export const Styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: colorItem.orange,
        marginHorizontal: 20,
        color: colorItem.white,
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginVertical:20
    },
    btnTextStyle: {
        color: colorItem.white,
        fontSize: FontSizes.medium,
        fontFamily: Fonts.Poppins_Medium
    }
})