import React, { useState } from "react";
import Toast from 'react-native-simple-toast';
import ContainerStyle from '../assets/components/ContainerStyle'
import Logo from '../assets/components/Logo'
import Button from '../assets/components/Button'
import Paragraph from '../assets/components/Paragraph'
import TextInput from '../assets/components/Input'
import validator from 'validator'
import axios from 'axios';
import { ImageBackground } from 'react-native'
import imagemElevator from "../assets/elevator.jpg"

const LoginScreen = ({ navigation }) => {

    const [textInputEmail, setTextInputEmail] = useState({ value: '', error: '' });
    console.log(textInputEmail);
    
    async function checkEmail(){
        if (!validator.isEmail(textInputEmail)) {
            Toast.show('Please insert a valide email!', Toast.SHORT);
            return;
        }        
        return await axios.get(`https://rocket-elevator-mobile.herokuapp.com/api/Employees/${textInputEmail}`)
            .then(function (res) {
                const response = res.data;
                if (response == true) {
                navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                        })
                }
                else{
                    Toast.show(`${textInputEmail} is unavailable, please insert a valide email and try again!`, Toast.SHORT);
                    console.log(textInputEmail);
                }
            })
            .catch(function (error) {  
                Toast.show(`${error}. Please, try again!`, Toast.SHORT); 
            });
    }    
    return(
        <ImageBackground source={ imagemElevator } style={{flex: 1}}>
            <ContainerStyle>
                <Logo />
                <Paragraph >
                    Welcome to Rocket Elevators Mobile App
                </Paragraph>
                <TextInput
                    label="Email"
                    returnKeyType="next"
                    value = {textInputEmail.value}
                    onChangeText={(value) => setTextInputEmail(value)}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    keyboardType="email-address"
                    required
                />
                <Button mode="contained" onPress={checkEmail}>
                    Login
                </Button>                
            </ContainerStyle>
            <Paragraph style={{ textAlign: "center"}} >
                This app is for employees only: please use
            </Paragraph>
            <Paragraph style={{paddingBottom: 10, textAlign: "center"}} >
                 your registred informations
            </Paragraph>
        </ImageBackground>
    )
}    

export default LoginScreen