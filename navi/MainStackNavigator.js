import * as React from 'react';
import { Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import Home from '../screens/Home'
import ElevatorStatus from '../screens/ElevatorStatus'

const Stack = createStackNavigator()

function LogoTitle() {
  return (
    <Image
      style={{ width: 30, height: 40, marginLeft:10 }}
      source={require('../assets/background.png')}
    />
  );
}

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} 
          options={{
            title: 'Log In',
            headerTitleAlign: 'center',
            headerLeft: props => <LogoTitle {...props} />
          }}
        />
        <Stack.Screen name="Home" component={Home} 
          options={
            ({navigation}) => (
            {  
              title: 'Home',
              headerTitleAlign: 'center',
              headerLeft: props => <LogoTitle {...props} />,
              headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate ('LoginScreen')}>
                <Text style={styles.text}>Log Out</Text>
              </TouchableOpacity>
            )}
          )}          
          />
          <Stack.Screen name="ElevatorStatus" component={ElevatorStatus} 
          options={
            ({navigation}) => (
            {  
              title: 'Elevator Status',
              headerTitleAlign: 'center',
              headerLeft: props => <LogoTitle {...props} />,
              headerRight: () => (
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

const styles = StyleSheet.create({
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    width: '100%',
    marginRight:20,
  },
})

export default MainStackNavigator