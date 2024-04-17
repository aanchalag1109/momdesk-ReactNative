import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "react-native";
import { MainAuthRoutes, MainUnAuthRoutes } from "./utils/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { colorItem } from "./assets/color";
import { Root } from 'react-native-popup-confirm-toast';
import { GetData } from './utils/ApiInstances';
import { ROUTECONST } from './utils/Routes/RouteConstants';
import Login from "./screens/unauthorized/login";
import Register from "./screens/unauthorized/register";
import RecipeList from "./screens/Receipes/ReceipeList";
import RecipeDetails from "./screens/Receipes/ReceipeDetails";
import Storage from "./utils/Storage";
import AddRecipe from "./screens/Receipes/AddReceipe";

const Stack = createStackNavigator();
const AuthContext = React.createContext();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await Storage.getToken();
      } catch (e) {
        console.log("error is", e);
      }
      setUserToken(userToken);
      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken == null ? (
          // No token found, user isn't signed in
          <>
            <Stack.Screen name={ROUTECONST.LOGIN} options={{ headerShown: false }} component={Login} />
            <Stack.Screen name={ROUTECONST.REGISTER} options={{ headerShown: false }} component={Register} />
            <Stack.Screen name={ROUTECONST.RECIPELIST} options={{ headerShown: false }} component={RecipeList} />
            <Stack.Screen name={ROUTECONST.RECIPEDETAILS} options={{ headerShown: false }} component={RecipeDetails} />
            <Stack.Screen name={ROUTECONST.ADDRECIPE} options={{ headerShown: false }} component={AddRecipe} />
          </>
        ) : (
          // User is signed in
          <>
            <Stack.Screen name={ROUTECONST.RECIPELIST} options={{ headerShown: false }} component={RecipeList} />
            <Stack.Screen name={ROUTECONST.ADDRECIPE} options={{ headerShown: false }} component={AddRecipe} />
            <Stack.Screen name={ROUTECONST.RECIPEDETAILS} options={{ headerShown: false }} component={RecipeDetails} />
            <Stack.Screen name={ROUTECONST.LOGIN} options={{ headerShown: false }} component={Login} />
            <Stack.Screen name={ROUTECONST.REGISTER} options={{ headerShown: false }} component={Register} />
            
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { App as default, AuthContext };