import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

const img = require("./assets/bruschetta.png");

const HomeScreen = ({ navigation }) => {
  const [numServings, setNumServings] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bruschetta Recipe</Text>
      <Image source={img}></Image>
      <TextInput style={styles.input} onChangeText={newText => setNumServings(parseInt(newText))} placeholder='Enter the Number of Servings' textAlign='center'></TextInput>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Recipe', { numServings: numServings })}><Text style={styles.buttonText}>View Recipe</Text></Pressable>
    </View>

  );
}

const RecipeScreen = ({ route, navigation }) => {
  const { numServings } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bruschetta</Text>

      <Text style={styles.subtitle}>Ingredients</Text>
      <Text style={styles.ingredients}>
        {numServings * 4} plum tomatoes{'\n'}
        {numServings * 6} basil leaves{'\n'}
        {numServings * 3} garlic cloves, chopped{'\n'}
        {numServings * 3} TB olive oil{'\n'}
      </Text>

      <Text style={styles.subtitle}>Directions</Text>
      <Text style={styles.directions}>Combine the ingredients, add salt to taste. Top French bread slices with mixture</Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Healthy Recipes',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#ffffff'
          }} />
        <Stack.Screen 
          name="Recipe" 
          component={RecipeScreen} options={{
          title: "",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#ffffff'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 25,
    marginLeft: 50,
    marginTop: 10,
  },
  ingredients: {
    fontSize: 20,
    marginLeft: 70,
    lineHeight: 30
  },
  directions: {
    fontSize: 20,
    marginRight: 30,
    marginLeft: 70,
    marginBottom: 30
  },
  button: {
    alignItems: 'center'
  },
  buttonText: {
    alignItems: 'center',
    backgroundColor: '#888888',
    padding: 8,
    color: '#ffffff'
  },
  input: {
    marginVertical: 30,
  }
});
