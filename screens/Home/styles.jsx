import { StyleSheet, Dimensions } from "react-native";
import { colorItem } from "../../assets/color";
import { Fonts } from "../../assets/fontFamilies";
import { FontSizes } from "../../assets/fontsizes";

const width = Dimensions.get("screen").width

export const styles = StyleSheet.create({
    ProfileImageContainer: { backgroundColor: colorItem.mainColor, justifyContent: "center", alignItems: "center", borderRadius: 50, height: 48, width: 48, borderWidth: 1, borderColor: colorItem.white },
    ImageStyle: { height: 45, width: 45, borderRadius: 50 },
    headerContainer: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor: colorItem.orange
    },
    headerIconStyle:{color:colorItem.white, fontSize:FontSizes.extraLarge, marginleft:10},
    appLogo: { height: 50, width: 150 },
    rightIconsContainer: { flex:1, flexDirection: 'row', gap:10, justifyContent: 'flex-end', alignItems: 'center'},
    leftIconContainer: { width: '15%', },
    centerContent: { width: "60%", alignItems: "center", justifyContent: "center" },
    centerContentText: { fontSize: FontSizes.slightLarge, color: colorItem.white, fontFamily: Fonts.Poppins_Medium},
    mainContainer: {
        flex: 1,
        backgroundColor: colorItem.orange
    },
    bannerCardContainer: {
        flexDirection: 'row',
        elevation: 4,
        margin: 10,
        backgroundColor: colorItem.white,
        borderRadius: 10,
        paddingRight: 30,
        height: 70
    },
    BannerImage: {
        height: '100%',
        width: '100%',
    },
    upcommingContainer: {
        paddingHorizontal: 10
    },
    tabContainer: {
        backgroundColor: colorItem.white,
        height: 45,
        elevation: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    tabContent: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        marginLeft: 10
    },
    tabContentText: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: FontSizes.slightLarge,
        lineHeight: 18,
    },
    matchContainer: {
        borderRadius: 7,
        width: width - 20,
        // backgroundColor: colorItem.subMainColor,
    },
    dotActive: {
        margin: 2,
        color: colorItem.subMainColor,
    },
    dot: {
        margin: 2,
        color: colorItem.light_grey,
    },
    wrapdot: {
        position: 'absolute',
        bottom: -13,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    joinedSectionContainer: { height: 200 },
    joinedsubContainer: { position: 'absolute', top: 15, paddingHorizontal: 10 },
    joinedBoxHeader: {
        fontSize: 13,
        fontFamily: Fonts.Poppins_SemiBold,
        color: colorItem.white,
    },
    LinearGradientStyle: {
        height: 100,
        opacity: 0.6,
        width: '130%',
        position: 'absolute',
        top: 0,
    },
    backImageStyle: {
        height: 100,
        width: '100%'
    },
})