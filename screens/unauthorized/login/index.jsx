import React, { useState } from 'react';
import { Image, Pressable, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import { Styles } from './styles'
import { images } from '../../../assets/images'
import CommonInput from '../../../components/CommonInput';
import Storage from '../../../utils/Storage';
import CommonBtn from '../../../components/commonBtn';
import { ROUTECONST } from '../../../utils/Routes/RouteConstants';
import Toaster from '../../../components/Toaster';
import { colorItem } from '../../../assets/color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { axiosPostData } from '../../../utils/ApiInstances';

const Login = ({ navigation }) => {
    const [inputEmailData, setInputEmailData] = useState('');
    const [inputPasswordData, setInputPasswordData] = useState('');
    const [toaster, settoaster] = useState({ msg: '', color: '' });
    const [secure, setSecure] = useState(true)
    const handleEmailInput = (value) => {
        setInputEmailData(value)
    }
    const handlePasswordInput = (value) => {
        setInputPasswordData(value)
    }
    const handleBtn = async () => {
        if (!inputEmailData || !inputPasswordData) {
            settoaster({ msg: 'Email and password cannot be empty', color: colorItem.red });
            return;
        }
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(inputEmailData)) {
            settoaster({ msg: 'Invalid email address', color: colorItem.red });
            return;
        }
        const res = await axiosPostData('login-user', {
            email: inputEmailData,
            password: inputPasswordData
        });
        if (res.status) {
            const token = await Storage.saveToken(res.accessToken);
            settoaster({ msg: res.message, color: colorItem.green })
            navigation.navigate(ROUTECONST.RECIPELIST);
        } else {
            settoaster({ msg: res.message, color: colorItem.red })
        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
            <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={Styles.scrollViewContainer}>
                
                <View style={Styles.container}>
                    <View style={Styles.logoContainer}>
                     <Image style={Styles.LogoImageStyle} source={images.LOGIN_SCREEN} resizeMode='contain' />
                    </View>
                    <View style={Styles.mainHeadingContainer}>
                        <Text style={Styles.headingMsg}>Login</Text>
                        
                    </View>
                    <View style={Styles.textInputContainer}>
                        <Text style={Styles.inputMsg}>Enter your Email Address</Text>
                        <CommonInput leftIcon={<FontAwesome name={'envelope'} color={colorItem.orange} onPress={() => setSecure(!secure)} style={Styles.IconStyle} />} value={inputEmailData} handleInput={handleEmailInput} name='email' />
                    </View>
                    <View style={Styles.textInputContainer}>
                        <Text style={Styles.inputMsg}>Enter your Password</Text>
                        <CommonInput  leftIcon={<FontAwesome name={!secure ? "eye" : 'eye-slash'} color={colorItem.orange} onPress={() => setSecure(!secure)} style={Styles.IconStyle} />} value={inputPasswordData} secure={secure} handleInput={handlePasswordInput} name='password' />
                    </View>
                    <CommonBtn handleBtn={handleBtn} btnText="Login" />
                        <View style={Styles.footerContainer}>
                        <Text style={[Styles.inputMsg, { marginHorizontal: 5 }]}>Don't Have An Account?</Text><Pressable style={Styles.regContainer} onPress={() => navigation.navigate(ROUTECONST.REGISTER)}><Text style={Styles.regText}>Register</Text></Pressable>
                    </View>
                </View>
                <Toaster settoaster={settoaster} toaster={toaster} />
            </ScrollView >
        </KeyboardAvoidingView>
    )
}

export default Login