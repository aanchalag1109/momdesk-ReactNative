import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { colorItem } from '../../../assets/color';
import Header from '../../../components/Header';
import { Styles } from './styles';

const RecipeDetails = (props) => {
    const recipeDetails = props.route.params.data
    return (
        <>
            <Header title='Recipe Detail' leftIconFunction={() => props.navigation.goBack()} />
            <ScrollView style={Styles.scrollViewContainer}>
                <View style={Styles.container}>
                    <Image source={{ uri: recipeDetails.image }} style={Styles.image} />
                    <Text style={Styles.dishName}>{recipeDetails.title}</Text>
                    <Text style={Styles.description}>{recipeDetails.description}</Text>
                    <Text style={Styles.duration}>Duration: {recipeDetails.duration}m</Text>
                    <Text style={Styles.ingredientsTitle}>Ingredients:</Text>
                    {recipeDetails.ingredients.map((ingredient, index) => (
                        <Text key={index} style={Styles.ingredients}>{ingredient}</Text>
                    ))}
                </View>
            </ScrollView>
        </>
    );
};
export default RecipeDetails;
