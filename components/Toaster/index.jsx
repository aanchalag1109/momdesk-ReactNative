import React from 'react-native'
import { Snackbar } from 'react-native-paper';
import { View } from 'react-native'
import { styles } from './styles';

const Toaster = ({ settoaster, toaster }) => {
    return (
        <View>
            <Snackbar
                style={[styles.toasterContainer,{backgroundColor:toaster.color}]}
                visible={!!toaster.msg}
                onDismiss={() => settoaster({msg:'', color:''})}
                duration={2000}
            // action={{
            //     // label: 'Undo',
            //     onPress: () => {
            //         // Do something
            //     },
            // }}
            >
                {toaster.msg}
            </Snackbar>
        </View>
    )
}

export default Toaster