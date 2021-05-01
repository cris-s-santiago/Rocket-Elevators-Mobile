import React from 'react'
import {View} from 'react-native'
import axios from "axios";
import ContainerStyle from '../assets/components/ContainerStyle'
import Logo from '../assets/components/Logo';
import ButtonText from '../assets/components/ButtonText';
import ButtonContainer from '../assets/components/ButtonContainer';
import TextStatus from '../assets/components/TextStatus';
import TextGreen from '../assets/components/TextGreen';
import TextRed from '../assets/components/TextRed';


function ElevatorScreen({ navigation, route }) {
  //Saves the id and status values you receive at the time the page is called
  const id = route.params.id;
  var status = route.params.status;

  //Method for changing the status of an elevator
  async function changeStatus() {
    return await axios.put("https://rocket-elevator-mobile.herokuapp.com/api/elevators/"+id+"/Status",{ id: id, status: "active"})
      .then(res => {
        console.log("Response", res);
      })
      .catch(function(error){
          console.log("ERROR",error);
      });
  }

  //Method for check the status of an elevator
  async function checkStatus(){      
    return await axios.get(`https://rocket-elevator-mobile.herokuapp.com/api/Elevators/${id}`)
      .then(function (res) {
          const response = res.data;
          return response;            
      })
      .catch(function (error) {                
          alert(`${error}. Please, try again!`);            
      });
  }

  //If the status is active, shows the button to return to the home screen
  if (status == "active"){
    return (
      <ContainerStyle>
          <Logo style={{paddingBottom: 500}} />   
          <View style={{paddingTop: 80, paddingBottom: 50}}>
              <TextStatus> Elevator : {id}</TextStatus>
              <TextGreen> Status : {status}</TextGreen>
              <ButtonContainer
                onPress={() => navigation.navigate ('Home')}> 
                <ButtonText>Back to list</ButtonText>
              </ButtonContainer>
          </View>        
      </ContainerStyle>    
    )
  //If the status is not active, it shows the button for changing the status
  }else {
    return (
    <ContainerStyle>
      <Logo/>
      <View style={{paddingTop: 80, paddingBottom: 50}}>
        <TextStatus> Elevator : {id}</TextStatus>
        <TextRed> Status : {status}</TextRed>
        <ButtonContainer
          onPress={ async () => { 
              await changeStatus(); //Calls the method to change the status
              const Elevator = await checkStatus(); //Calls the check the status
              navigation.navigate('ElevatorStatus', {id: Elevator.id, status: Elevator.status,}) //Renders the page again, passing in the new status and id values.
          }}>
          <ButtonText>Change status to Active</ButtonText>
        </ButtonContainer>
      </View>
    </ContainerStyle>
    )
  }
}
export default ElevatorScreen