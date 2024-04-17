import { StyleSheet } from "react-native";
import { colorItem } from "../../assets/color";

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    indicatorContainer: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 5,
        alignItems: 'center',
        height:200,
        width:200
    },
    loadingText: { color: colorItem.textColor, fontSize: 15 }
})

export default styles