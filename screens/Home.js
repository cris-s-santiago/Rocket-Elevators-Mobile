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
	const [elevators, setElevators] = useState([]);	
	const isVisible = useIsFocused();

	useEffect(() => {
		if (isVisible) {
			axios.get("https://rocket-elevator-mobile.herokuapp.com/api/Elevators/NotActive")
			.then((res) => {
				console.log(res.data);
				setElevators(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		}
	}, [isVisible]);
	const setStatus = (id, status) => {
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