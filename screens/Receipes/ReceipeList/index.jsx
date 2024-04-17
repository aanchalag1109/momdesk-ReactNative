import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { images } from '../../../assets/images';
import { Styles } from './styles';
import HomeHeader from '../../Home/homeHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colorItem } from '../../../assets/color';
import { ROUTECONST } from '../../../utils/Routes/RouteConstants';
import { axiosGetData } from '../../../utils/ApiInstances';
import Storage from '../../../utils/Storage';
import { useFocusEffect } from '@react-navigation/native';
const ReceipeList = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [isEndReached, setIsEndReached] = useState(false);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetchData();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            fetchData();
        }, [])
    );

    const fetchData = async () => {
        setLoading(true);
        await axiosGetData('get-all-recipes').then((res) => {
            console.log("response is", res);
            setLoading(false);
            setData(res);
        });
    };

    const leftIcon = () => (
        <Pressable style={Styles.ProfileImageContainer}>
            <Image source={images.USER_AVTAR} resizeMode='contain' style={Styles.ImageStyle} />
        </Pressable>
    )

    const renderItem = ({ item }) => (
        <TouchableOpacity style={Styles.cardContainer} onPress={() => navigation.navigate(ROUTECONST.RECIPEDETAILS, {data: item})}>
            <View style={Styles.imageContainer}>
                <Image source={{ uri: item.image }} style={Styles.image} />
            </View>
            <View style={Styles.textContainer}>
                <Text style={Styles.title}>{item.title}</Text>
                <Text numberOfLines={2} style={Styles.description}>{item.description}</Text>
                <Text style={Styles.subContent}><FontAwesome name={'cutlery'} color={colorItem.light_grey} /> {item.ingredients.length}+ Ingredients</Text>
                <Text style={Styles.subContent}><FontAwesome name={'clock-o'} color={colorItem.light_grey} /> {item.duration}</Text>
                <Text style={Styles.subContent}><FontAwesome name={'gears'} color={colorItem.light_grey} /> {item.category}</Text>
            </View>
        </TouchableOpacity>
    );

    const handleLogout = async () => {
        await Storage.clearToken();
        navigation.navigate(ROUTECONST.LOGIN);
    };

    const searchFilterFunction = (text) => {
        setSearch(text);
        if (text === '') {
            fetchData();
        }
        const newData = data.filter(item => {
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setData(newData);
    };

    return (
        <>
            <HomeHeader left={() => leftIcon()} handleRight={() => navigation.navigate(ROUTECONST.ADDRECIPE)} handleRightMost={handleLogout} />
            <View style={Styles.searchContainer}>
                <TextInput
                    style={Styles.searchInput}
                    placeholder="Search Recipes.."
                    placeholderTextColor="#999"
                    onChangeText={text => searchFilterFunction(text)}
                    value={search}
                />
                <FontAwesome name="search" size={20} color={colorItem.orange} style={Styles.searchIcon} />
            </View>
            {
                data.length ? (
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item._id}
                    />
                ) : (<Text>No Recipe Found</Text>)
            }
        </>
    );
};

export default ReceipeList;
