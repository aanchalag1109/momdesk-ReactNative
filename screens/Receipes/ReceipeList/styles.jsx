import { StyleSheet } from "react-native";
import { colorItem } from "../../../assets/color";
import { FontSizes } from "../../../assets/fontsizes";
import { Fonts } from "../../../assets/fontFamilies";

export const Styles = StyleSheet.create({
    ProfileImageContainer: { backgroundColor: colorItem.mainColor, justifyContent: "center", alignItems: "center", borderRadius: 50, height: 48, width: 48, borderWidth: 1, borderColor: colorItem.white },
    ImageStyle: { height: 45, width: 45, borderRadius: 50 },
    headerContainer: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor: colorItem.mainColor
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colorItem.white,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 12,
        margin: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: colorItem.white,
      },
      searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
      },
      searchIcon: {
        width: 24,
        height: 24,
        tintColor: '#999',
      },
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      imageContainer: {
        marginRight:10
      },
      image: {
        width: 100,
        height: 110,
        borderRadius: 10,
      },
      textContainer: {
        flex: 1,
        justifyContent: 'left',
        paddingHorizontal: 10,
      },
      title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 2,
        color: colorItem.orange,
      },
      description: {
        fontSize: 12,
        color: colorItem.lightGreyText,
      },
      subContent: {
        fontSize: 11,
        marginTop: 5,
        color: colorItem.light_grey,
      }
})