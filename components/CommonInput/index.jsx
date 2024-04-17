import React,{memo} from 'react'
import { TextInput, Text, View } from 'react-native'
import { Styles } from './style'

const CommonInput = ({ value, handleInput=()=>{}, placeholder, keyType="default",disable = false, Icon, custumInputStyle, name, secure, leftIcon }) => {
    return (
        <>
            <View style={Styles.InputContainer}>
                {
                    leftIcon ? <View style={Styles.InputIconContainer}>
                        <Text style={Styles.InputIconContainerText}>{leftIcon}</Text>
                    </View> : ''
                }
                <TextInput keyboardType={keyType} editable={!disable} secureTextEntry={secure} style={[Styles.InputStyle, custumInputStyle]} value={value} onChangeText={val => handleInput(val, name)} placeholderTextColor="#000"  placeholder={placeholder} />
                {
                    Icon ? <View style={Styles.InputIconContainer}>
                        <Text>{Icon}</Text>
                    </View> : ''
                }
            </View>
        </>
    )
}

export default memo(CommonInput)