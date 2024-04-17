import React, { useState } from 'react';
import { View, TextInput, Button, Text, KeyboardAvoidingView, ScrollView, StyleSheet, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Styles } from './styles';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { PostData, axiosPostData, baseUrl } from '../../../utils/ApiInstances';
import CommonInput from '../../../components/CommonInput';
import { colorItem } from '../../../assets/color';
import CommonBtn from '../../../components/commonBtn';
import Toaster from '../../../components/Toaster';
import Header from '../../../components/Header';
import { ROUTECONST } from '../../../utils/Routes/RouteConstants';
import Storage from '../../../utils/Storage';

const AddRecipe = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [toaster, settoaster] = useState({ msg: '', color: '' });
    const [duration, setDuration] = useState('');
    const [category, setCategory] = useState('Breakfast');
    const [instructions, setInstructions] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [imageSource, setImageSource] = useState(null);
    const [imageDeatils, setImageDetails] = useState('');

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                console.log(JSON.stringify(response));
                let imageUri = response.uri || response.assets?.[0]?.uri;
                let imageName = response.fileName || response.assets?.[0]?.fileName;
                let imageType = response.type || response.assets?.[0]?.type;
                setImageSource(imageUri);
                setImageDetails({
                    uri: imageUri,
                    name: imageName,
                    type: imageType,
                });
            }
        });
    };
    const handleCameraLaunch = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.error) {
                console.log('Camera Error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                let imageName = response.fileName || response.assets?.[0]?.fileName;
                let imageType = response.type || response.assets?.[0]?.type;
                setImageSource(imageUri);
                setImageDetails({
                    uri: imageUri,
                    name: imageName,
                    type: imageType,
                });
            }
        });
    }
    const submitRecipe = async () => {
        let token = await Storage.getToken();
        console.log("token is", token);
        const formData = new FormData();
        formData.append('image', imageDeatils);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('duration', duration);
        formData.append('instructions', instructions);
        formData.append('ingredients', ingredients);
        formData.append('category', category);
        await fetch(baseUrl + '/create-recipe', {
            method: 'post',
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: 'Bearer ' + token,
            },
            body: formData,
          })
            .then(response => {
              const rrr = response.json();
              return rrr;
            })
            .then(res => {
                if (res.status) {
                    props.navigation.navigate(ROUTECONST.RECIPELIST)
                }else{
                    settoaster({ msg: res.message, color: colorItem.red });
                }
              
            })
            .catch(err => {
              console.log("mm", err);
            });
        
        
    };
    const handleIngredientChange = (index, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };
    const addIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const removeIngredient = (index) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    };

    const handleTitleInput = (value) => {
        setTitle(value);
    }
    const handleDescriptionInput = (value) => {
        setDescription(value);
    }
    const handleInstructionInput = (value) => {
        setInstructions(value);
    }
    const handleImageInput = (value) => {
        setImageUrl(value);
    }
    const handleDurationInput = (value) => {
        setDuration(value);
    }

    return (
        <>
            <Header title='Add New Recipe' leftIconFunction={() => props.navigation.goBack()} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={Styles.scrollViewContainer}>
                    <View style={Styles.container}>
                        <View style={Styles.mainHeadingContainer}>
                            <Text style={Styles.headingMsg}>Add New Recipe</Text>
                        </View>

                        <View style={Styles.textInputContainer}>
                            <Text style={Styles.inputMsg}>Upload Recipe Image</Text>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <CommonBtn customBtnStyle={{ paddingHorizontal: 10, width: 120 }} handleBtn={openImagePicker} btnText=" From Device" />
                                <CommonBtn customBtnStyle={{ paddingHorizontal: 10, width: 120 }} handleBtn={handleCameraLaunch} btnText="Open Camera" />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                {imageSource && <Image source={{uri: imageSource}} style={{ width: 100, height: 100 }} />}
                            </View>
                            
                                
                        </View>
                        <View style={Styles.textInputContainer}>
                            <Text style={Styles.inputMsg}>Enter Recipe Title</Text>
                            <CommonInput value={title} handleInput={handleTitleInput} name='email' />
                        </View>
                        <View style={Styles.textInputContainer}>
                            <Text style={Styles.inputMsg}>Enter Title Description</Text>
                            <CommonInput value={description} handleInput={handleDescriptionInput} name='password' />
                        </View>
                        <View style={Styles.textInputContainer}>
                            <Text style={Styles.inputMsg}>Enter Duration (In Minute)</Text>
                            <CommonInput keyType='numeric' value={duration} handleInput={handleDurationInput} name='password' />
                        </View>
                        <View style={Styles.textInputContainer}>
                            <Text style={Styles.inputMsg}>Add Instructions</Text>
                            <CommonInput value={instructions} handleInput={handleInstructionInput} name='instructions' />
                        </View>
                        <View style={Styles.textInputContainer}>
                            <Text style={Styles.inputMsg}>Add Ingredients</Text>
                        </View>
                        <View style={Styles.ingredientsInputContainer}>
                            {ingredients.map((ingredient, index) => (
                                <View key={index} style={Styles.ingredientsContainer}>
                                    <CommonInput
                                        key={index}
                                        custumInputStyle={index > 0 ? Styles.ingredientsInput : ''}
                                        value={ingredient}
                                        handleInput={(text) => handleIngredientChange(index, text)}
                                    />
                                    {index > 0 && (
                                        <Button
                                            title="Remove"
                                            style={Styles.ingredientsButton}
                                            onPress={() => removeIngredient(index)}
                                            color={colorItem.orange}
                                        />
                                    )}
                                </View>
                            ))}
                        </View>
                        <CommonBtn handleBtn={addIngredient} btnText="Add More" />
                        <View style={Styles.textInputContainer}>
                            <Text style={Styles.inputMsg}>Select Catgeory</Text>
                            <RNPickerSelect
                                style={pickerSelectStyles}
                                useNativeAndroidPickerStyle={false}
                                onValueChange={(value) => setCategory(value)}
                                items={[
                                    { label: 'Breakfast', value: 'Breakfast' },
                                    { label: 'Lunch', value: 'Lunch' },
                                    { label: 'Dinner', value: 'Dinner' },
                                ]}
                            />
                        </View>
                        <CommonBtn handleBtn={submitRecipe} btnText="Add Recipe" />
                    </View>
                    <Toaster settoaster={settoaster} toaster={toaster} />
                </ScrollView >
            </KeyboardAvoidingView>
        </>

    );
};
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: colorItem.black,
        borderRadius: 10,
        color: colorItem.black,
        paddingRight: 30,
        backgroundColor: colorItem.white,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginTop: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: colorItem.black,
        borderRadius: 10,
        color: colorItem.black,
        paddingRight: 30, // to ensure the text is never behind the icon
        backgroundColor: colorItem.white, // background color
    },
});
export default AddRecipe;