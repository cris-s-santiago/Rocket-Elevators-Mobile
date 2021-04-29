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
  const id = route.params.id;
  var status = route.params.status;

  async function changeStatus() {
    return await axios.put("https://rocket-elevator-mobile.herokuapp.com/api/elevators/"+id+"/Status",{ id: id, status: "active"})
      .then(res => {
        console.log("Response", res);
      })
      .catch(function(error){
          console.log("ERROR",error);
      });
  }

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
  }else {
    return (
    <ContainerStyle>
      <Logo/>
      <View style={{paddingTop: 80, paddingBottom: 50}}>
        <TextStatus> Elevator : {id}</TextStatus>
        <TextRed> Status : {status}</TextRed>
        <ButtonContainer
          onPress={ async () => { 
              await changeStatus();
              const Elevator = await checkStatus();
              navigation.navigate('ElevatorStatus', {id: Elevator.id, status: Elevator.status,})
          }}>
          <ButtonText>Change status to Active</ButtonText>
        </ButtonContainer>
      </View>
    </ContainerStyle>
    )
  }
}
export default ElevatorScreen