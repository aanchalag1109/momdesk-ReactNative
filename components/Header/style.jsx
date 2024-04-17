import { StyleSheet } from "react-native";
import { colorItem } from "../../assets/color";
import { Fonts } from "../../assets/fontFamilies";
import { FontSizes } from "../../assets/fontsizes";

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor:colorItem.orange
    },
    headingContainer: { width: '80%', flexDirection: 'row' },
    leftContainer: {
        justifyContent: 'center',
        width: '10%',
        height:30,
        alignItems:"center",
        borderRadius:50,
    },
    head: { justifyContent: 'center', width: '80%', marginLeft: 10 },
    headText: { color: colorItem.white, fontSize: FontSizes.slightLarge, fontFamily:Fonts.Poppins_Medium },
    subheadText: { color: colorItem.subMainLightColor, fontSize: FontSizes.small, fontFamily:Fonts.Poppins_Medium },
    rightContainer: { width: '20%', justifyContent: 'center', alignItems: 'flex-end' },
    headerIconStyle:{color:colorItem.white, fontSize:FontSizes.extraLarge}
})

export default styles