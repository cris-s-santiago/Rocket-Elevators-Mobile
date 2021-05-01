import * as React from 'react';
import { Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import Home from '../screens/Home'
import ElevatorStatus from '../screens/ElevatorStatus'

const Stack = createStackNavigator()

// Header logo
function LogoTitle() {
  return (
    <Image
      style={{ width: 30, height: 40, marginLeft:10 }}
      source={require('../assets/background.png')}
    />
  );
}

//Page controller
function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen" // Page that launches the application
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} // Load my page login page
          options={{
            title: 'Log In',
            headerTitleAlign: 'center',
            headerLeft: props => <LogoTitle {...props} /> // call the method for the logo
          }}
        />
        <Stack.Screen name="Home" component={Home}  // Load my page home page
          options={
            ({navigation}) => (
            {  
              title: 'Home',
              headerTitleAlign: 'center',
              headerLeft: props => <LogoTitle {...props} />,
              headerRight: () => (                                       // Touchscreen button for the login page
              <TouchableOpacity onPress={() => navigation.navigate ('LoginScreen')}> 
                <Text style={styles.text}>Log Out</Text>
              </TouchableOpacity>
            )}
          )}          
          />
          <Stack.Screen name="ElevatorStatus" component={ElevatorStatus} // Load my page change status page
          options={
            ({navigation}) => (
            {  
              title: 'Elevator Status',
              headerTitleAlign: 'center',
              headerRight: () => (                                // Touchscreen button for return home without change the status(for Iphone)
                <TouchableOpacity onPress={() => navigation.navigate ('Home')}>
                <Text style={styles.text}>Back</Text>
              </TouchableOpacity>
              ),
              headerRight: () => (                                 // Touchscreen button for the login page
              <TouchableOpacity onPress={() => navigation.navigate ('LoginScreen')}>
                <Text style={styles.text}>Log Out</Text>
              </TouchableOpacity>
            )}
          )}          
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({  // Style for the touchscreen button
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    width: '100%',
    marginRight:15,
  },
})

export default MainNavigator