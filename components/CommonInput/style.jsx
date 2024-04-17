import { StyleSheet } from 'react-native'
import { colorItem } from '../../assets/color'
import { FontSizes } from '../../assets/fontsizes'
import { Fonts } from '../../assets/fontFamilies'

export const Styles = StyleSheet.create({
    InputContainer: {
        backgroundColor: colorItem.white,
        marginHorizontal: 10,
        borderColor: colorItem.black,
        borderWidth: 1,
        borderRadius: 7,
        height: 50,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop:10
    },
    InputStyle: {
        width: "93%",
        fontSize: FontSizes.slightLarge,
        fontFamily: Fonts.Poppins_Medium,
        color: colorItem.black
    },
    InputIconContainer:{
        justifyContent:"center",
        alignItems:"center",
        color: colorItem.orange,
        width:'5%'
    },
    InputIconContainerText:{
        color: colorItem.orange
    }
})