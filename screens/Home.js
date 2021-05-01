import React, { useState, useEffect } from "react";
import ContainerStyle from "../assets/components/ContainerStyle";
import ViewStyle from "../assets/components/ViewStyle";
import HeaderText from "../assets/components/HeaderText";
import List from "../assets/components/List";
import TextButton from "../assets/components/TextButton";
import Logo from "../assets/components/Logo";
import {FlatList} from "react-native";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";

const Home = ({ navigation }) => {	
	const [elevators, setElevators] = useState([]);	 //Save the API response in the elevator variable
	const isVisible = useIsFocused(); 

	useEffect(() => {
		if (isVisible) {
			axios.get("https://rocket-elevator-mobile.herokuapp.com/api/Elevators/NotActive") //Calls the API and returns the list of elevators that are not active in the time
			.then((res) => {
				setElevators(res.data); //Pass the response on to const elevators
			})
			.catch((err) => {
				console.log(err);
			});
		}
	}, [isVisible]);
	const setStatus = (id, status) => {
		// Calls the Elevator Status page with the id and status.
		navigation.navigate("ElevatorStatus", {id: id, status: status,});
	};
	return (
		<ContainerStyle>
			<Logo />
			<ViewStyle>
				<HeaderText>NON OPERATIONAL ELEVATORS</HeaderText>
				<FlatList
					showsVerticalScrollIndicator={false}
					keyExtractor={elevators => elevators.id.toString()}
					data={elevators}
					renderItem={({ item }) => {
						return (
							//When an elevator is clicked on the list, pass the id and status.
							<List onPress={() => setStatus(item.id, item.status)}> 
								<TextButton >
									{" "}
									Elevator: {item.id}   Status: {item.status}
								</TextButton>
							</List>
						);
					}}
				/>					
			</ViewStyle>
		</ContainerStyle>
	);
};

export default Home;