import { StyleSheet } from "react-native";
import { colorItem } from "../../../assets/color";
import { FontSizes } from "../../../assets/fontsizes";
import { Fonts } from "../../../assets/fontFamilies";

export const Styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: colorItem.mainColor
    },
    container: {
        marginBottom: 20,
        flex: 1
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    textInputContainer: {
        marginTop: 5
    },
    mainHeadingContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    LogoImageStyle: {
        marginTop: 50,
        width: 250,
        height: 200,
        alignContent: 'center'
    },
    bodyContainer: {
    },
    headingMsg: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        fontWeight: 'bold',
        marginTop:30,
        marginBottom: 20,
        fontSize: FontSizes.extraLarge,
        color: colorItem.orange,
    },
    inputMsg: {
        color: colorItem.black,
        fontSize: FontSizes.small,
        marginHorizontal: 15
    },
    footerContainer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    regText: {
        color: colorItem.orange,
        fontWeight: 'bold',
        marginTop: 1,
        fontSize: FontSizes.small,
        fontFamily: Fonts.Poppins_Medium,
    },
    regContainer: {
        height: 15
    }
})