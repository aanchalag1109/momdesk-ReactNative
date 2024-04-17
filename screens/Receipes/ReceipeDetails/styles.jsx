import { StyleSheet } from "react-native";
import { colorItem } from "../../../assets/color";
import { FontSizes } from "../../../assets/fontsizes";
import { Fonts } from "../../../assets/fontFamilies";

export const Styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        paddingHorizontal: 5,
        backgroundColor: colorItem.mainColor
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    dishName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colorItem.black,
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        marginBottom: 10,
        color: colorItem.black,
    },
    duration: {
        fontSize: 14,
        marginBottom: 10,
        color: '#666',
    },
    ingredientsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colorItem.black,
    },
    ingredients: {
        fontSize: 14,
        marginBottom: 5,
        color: colorItem.light_grey,
    },
});
