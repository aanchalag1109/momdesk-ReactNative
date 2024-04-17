import React, { useState } from 'react';
import { Image, Pressable, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import Header from '../../../components/Header';
import { Styles } from './styles'
import { images } from '../../../assets/images'
import CommonInput from '../../../components/CommonInput';
import ImgButton from '../../../components/imgButton';
import CommonBtn from '../../../components/commonBtn';
import { ROUTECONST } from '../../../utils/Routes/RouteConstants';
import Toaster from '../../../components/Toaster';
import { colorItem } from '../../../assets/color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { axiosPostData } from '../../../utils/ApiInstances';

const Register = ({ navigation }) => {
    const [inputEmailData, setInputEmailData] = useState('');
    const [inputFullnameData, setInputFullnameData] = useState('');
    const [inputPasswordData, setInputPasswordData] = useState('');
    const [toaster, settoaster] = useState({ msg: '', color: '' });
    const [secure, setSecure] = useState(true)
    const handleEmailInput = (value) => {
        setInputEmailData(value)
    }
    const handleFullnameInput = (value) => {
        setInputFullnameData(value)
    }
    const handlePasswordInput = (value) => {
        setInputPasswordData(value)
    }
    const handleBtn = async () => {
        if (!inputEmailData || !inputPasswordData || !inputFullnameData) {
            settoaster({ msg: 'All fields are required', color: colorItem.red });
            return;
        }
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(inputEmailData)) {
            settoaster({ msg: 'Invalid email address', color: colorItem.red });
            return;
        }
        const res = await axiosPostData('register-user', {
            fullname: inputFullnameData,
            email: inputEmailData,
            password: inputPasswordData
        });
        if (res.status) {
            settoaster({ msg: res.message, color: colorItem.green })
            navigation.navigate(ROUTECONST.LOGIN);
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
                        <Text style={Styles.headingMsg}>Register</Text>
                        
                    </View>
                    <View style={Styles.textInputContainer}>
                        <Text style={Styles.inputMsg}>Enter your Full Name</Text>
                        <CommonInput leftIcon={<FontAwesome name={'user'} color={colorItem.orange} onPress={() => setSecure(!secure)} style={Styles.IconStyle} />} value={inputFullnameData} handleInput={handleFullnameInput} name='fullname' />
                    </View>
                    <View style={Styles.textInputContainer}>
                        <Text style={Styles.inputMsg}>Enter your Email Address</Text>
                        <CommonInput leftIcon={<FontAwesome name={'envelope'} color={colorItem.orange} onPress={() => setSecure(!secure)} style={Styles.IconStyle} />} value={inputEmailData} handleInput={handleEmailInput} name='email' />
                    </View>
                    <View style={Styles.textInputContainer}>
                        <Text style={Styles.inputMsg}>Enter your Password</Text>
                        <CommonInput  leftIcon={<FontAwesome name={!secure ? "eye" : 'eye-slash'} color={colorItem.orange} onPress={() => setSecure(!secure)} style={Styles.IconStyle} />} value={inputPasswordData} secure={secure} handleInput={handlePasswordInput} name='password' />
                    </View>
                    <CommonBtn handleBtn={handleBtn} btnText="Register Now" />
                        <View style={Styles.footerContainer}>
                        <Text style={[Styles.inputMsg, { marginHorizontal: 5 }]}>Alreadt Have An Account?</Text><Pressable style={Styles.regContainer} onPress={() => navigation.navigate(ROUTECONST.LOGIN)}><Text style={Styles.regText}>Login</Text></Pressable>
                    </View>
                </View>
                <Toaster settoaster={settoaster} toaster={toaster} />
            </ScrollView >
        </KeyboardAvoidingView>
    )
}

export default Register